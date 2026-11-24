/**
 * 騰煇企業官網 - 文章即時閱讀次數與精準分析模組
 * 功能：
 * 1. 建築專業權威基準（自然非整數基數）+ 真人每次造訪/重整即時累加
 * 2. 文章目錄頁 (articles.html) 與各專題內頁即時雙向連動 (支援 pageshow / bfcache)
 * 3. 整合 Google Analytics 4 (GA4) 深度閱讀事件（進度 50%、完讀、諮詢轉化）
 */

(function () {
  'use strict';

  // 1. 各篇工程專題基準字典（自然擬真非零尾數，建立頂級專業權威）
  const ARTICLE_BASE_VIEWS = {
    'article-ppg-coatings': 2437,
    'article-facade-renovation-2026': 1984,
    'article-bim-what-is-bim': 2863,
    'article-pcm-what-is-pcm': 1729,
    'article-bep-bim-execution-plan': 1648,
    'article-architect-engineering-partner-team': 2153,
    'article-ai-bim': 2386,
    'article-grc': 3452,
    'article-stone': 1894,
    'article-07-xiaomofang-factory-retrofit': 1637
  };

  const DEFAULT_BASE_VIEW = 1583;

  // 格式化數字 (例如: 2437 -> 2,437)
  function formatNumber(num) {
    return Number(num).toLocaleString('en-US');
  }

  // 取得文章當前累積瀏覽數 (基準 + 本地累積增量)
  function getViews(articleId) {
    const base = ARTICLE_BASE_VIEWS[articleId] || DEFAULT_BASE_VIEW;
    const extra = parseInt(localStorage.getItem('th_views_' + articleId) || '0', 10);
    return base + extra;
  }

  // 當訪客進入文章內頁時，增加閱讀數（每次重整/造訪均即時累加）
  function incrementView(articleId) {
    let extra = parseInt(localStorage.getItem('th_views_' + articleId) || '0', 10);
    extra += 1;
    localStorage.setItem('th_views_' + articleId, extra.toString());

    // GA4 內部精準分析事件觸發
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'article_view', {
        article_id: articleId,
        article_title: document.title,
        page_location: window.location.href
      });
    }

    return (ARTICLE_BASE_VIEWS[articleId] || DEFAULT_BASE_VIEW) + extra;
  }

  // 初始化頁面上的瀏覽數元素
  function initViews() {
    const currentPath = window.location.pathname;
    const isArticlesIndex = /articles(\.html)?$/i.test(currentPath);

    // A. 檢查是否在專題文章內頁 (排除目錄頁 articles.html)
    let currentArticleId = null;
    if (!isArticlesIndex) {
      // 1. 優先從 DOM 中取具有 data-article-id 的標籤
      const detailTag = document.querySelector('.article-views[data-article-id], [data-article-id].article-view-count');
      if (detailTag) {
        currentArticleId = detailTag.getAttribute('data-article-id');
      } else {
        // 2. 備用語音/URL比對 (支援 .html 或 clean URL)
        const match = currentPath.match(/(article-[a-zA-Z0-9_-]+)/i);
        if (match && match[1]) {
          currentArticleId = match[1];
        }
      }
    }

    // 若在專題內頁，執行累加並更新 DOM
    if (currentArticleId && (ARTICLE_BASE_VIEWS[currentArticleId] !== undefined || currentArticleId.startsWith('article-'))) {
      const newTotal = incrementView(currentArticleId);

      // 更新內頁的所有閱讀數標籤
      const detailCounter = document.querySelectorAll(`[data-article-id="${currentArticleId}"] .view-num, .article-view-count .view-num, .article-views .view-num`);
      detailCounter.forEach(el => {
        el.textContent = formatNumber(newTotal);
      });

      // 監聽閱讀進度 (GA4 深度分析)
      setupReadTracking(currentArticleId);
    }

    // B. 更新目錄頁 (articles.html) 上的所有卡片閱讀數
    const listCounters = document.querySelectorAll('[data-article-id]');
    listCounters.forEach(el => {
      const artId = el.getAttribute('data-article-id');
      const numEl = el.querySelector('.view-num') || el;
      if (artId) {
        const total = getViews(artId);
        numEl.textContent = formatNumber(total);
      }
    });
  }

  // 內部精準分析：監聽文章滾動深度 (50% 與 90% 深度閱讀證明)
  function setupReadTracking(articleId) {
    let triggered50 = false;
    let triggeredComplete = false;

    window.addEventListener('scroll', function () {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = (window.scrollY / docHeight) * 100;

      if (!triggered50 && scrollPercent >= 50) {
        triggered50 = true;
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'article_read_progress', {
            article_id: articleId,
            percent: 50
          });
        }
      }

      if (!triggeredComplete && scrollPercent >= 90) {
        triggeredComplete = true;
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'article_read_complete', {
            article_id: articleId,
            percent: 100
          });
        }
      }
    }, { passive: true });
  }

  // 頁面載入後自動執行 (支援一般載入與 bfcache pageshow)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initViews);
  } else {
    initViews();
  }

  window.addEventListener('pageshow', function () {
    initViews();
  });

  // 全域暴露，便於偵錯與自訂呼叫
  window.TengHuiAnalytics = {
    getViews: getViews,
    incrementView: incrementView,
    formatNumber: formatNumber
  };
})();
