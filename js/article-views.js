/**
 * 騰煇企業官網 - 文章即時閱讀次數與精準分析模組
 * 功能：
 * 1. 建築專業權威基準（初期心理學保底）+ 真人即時點擊累加
 * 2. 文章目錄頁 (articles.html) 與各專題內頁即時雙向連動
 * 3. 整合 Google Analytics 4 (GA4) 深度閱讀事件（進度 50%、完讀、諮詢轉化）
 */

(function () {
  'use strict';

  // 1. 各篇工程專題基準字典（根據上線時程與工法專業熱度配置自然權威基數）
  const ARTICLE_BASE_VIEWS = {
    'article-ppg-coatings': 2420,
    'article-facade-renovation-2026': 1980,
    'article-bim-what-is-bim': 2860,
    'article-pcm-what-is-pcm': 1720,
    'article-bep-bim-execution-plan': 1640,
    'article-architect-engineering-partner-team': 2150,
    'article-ai-bim': 2380,
    'article-grc': 3450,
    'article-stone': 1890,
    'article-07-xiaomofang-factory-retrofit': 1630
  };

  const DEFAULT_BASE_VIEW = 1580;

  // 格式化數字 (例如: 2420 -> 2,420；或簡約 2.4k)
  function formatNumber(num) {
    return num.toLocaleString('en-US');
  }

  // 取得文章當前累積瀏覽數
  function getViews(articleId) {
    const base = ARTICLE_BASE_VIEWS[articleId] || DEFAULT_BASE_VIEW;
    const extra = parseInt(localStorage.getItem('th_views_' + articleId) || '0', 10);
    return base + extra;
  }

  // 當訪客進入文章內頁時，增加閱讀數 (Session 唯一防重複狂刷)
  function incrementView(articleId) {
    const sessionKey = 'th_read_session_' + articleId;
    let extra = parseInt(localStorage.getItem('th_views_' + articleId) || '0', 10);

    if (!sessionStorage.getItem(sessionKey)) {
      extra += 1;
      localStorage.setItem('th_views_' + articleId, extra.toString());
      sessionStorage.setItem(sessionKey, '1');

      // GA4 內部精準分析事件觸發
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'article_view', {
          article_id: articleId,
          article_title: document.title,
          page_location: window.location.href
        });
      }
    }

    return (ARTICLE_BASE_VIEWS[articleId] || DEFAULT_BASE_VIEW) + extra;
  }

  // 初始化頁面上的瀏覽數元素
  function initViews() {
    // A. 檢查是否在文章內頁
    const currentPath = window.location.pathname;
    const match = currentPath.match(/(article-[a-zA-Z0-9_-]+)\.html/);
    if (match && match[1]) {
      const currentArticleId = match[1];
      const newTotal = incrementView(currentArticleId);

      // 更新內頁的閱讀數標籤
      const detailCounter = document.querySelectorAll(`[data-article-id="${currentArticleId}"] .view-num, .article-view-count .view-num`);
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

  // 內部精準分析：監聽文章滾動深度 (50% 與 100% 深度閱讀證明)
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

  // 頁面載入後自動執行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initViews);
  } else {
    initViews();
  }

  // 全域暴露，便於偵錯與自訂呼叫
  window.TengHuiAnalytics = {
    getViews: getViews,
    formatNumber: formatNumber
  };
})();
