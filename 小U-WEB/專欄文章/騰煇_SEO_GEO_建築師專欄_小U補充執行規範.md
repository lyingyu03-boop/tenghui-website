# 騰煇 SEO × GEO｜建築師內容專欄補充執行規範
版本：2026-10-02
用途：提供小U（網站管理／SEO・GEO Implementation）執行四篇 BIM × PCM × BEP × 建築工程協作專欄的補充規範。

---

# 00｜這份文件的核心目的

本文件不是重新改寫四篇文章，而是補充「文章發布到網站後，如何讓搜尋引擎與 AI 系統更容易理解、索引、引用與串聯」。

核心目標：

1. 提升騰煇在「建築師、BIM、PCM、BEP、建築工程協作」相關搜尋的主題關聯性。
2. 讓 AI 搜尋系統能清楚辨識文章的主題、定義、受眾、作者、資料來源與相關頁面。
3. 建立四篇文章之間的語意內鏈，而不是單純堆疊關鍵字。
4. 逐步建立「騰煇企業 × 建築工程 × BIM × 建築師協作」的網站內容實體。
5. 保留騰煇自己的工程觀點與第一手內容，不把文章做成關鍵字堆疊或政府資料整理站。

重要原則：

> SEO 的核心不是把更多關鍵字藏進網站，而是讓搜尋引擎與 AI 更準確理解「這一頁在回答什麼問題、誰適合閱讀、與哪些主題有關」。

---

# 01｜最重要的執行原則：不要埋「隱藏關鍵字垃圾」

過去網站可能使用 JS 在頁面中整理關鍵字。

此機制可以保留，但用途必須調整。

## 不建議

不要在 JS、HTML、CSS 隱藏區域或其他使用者不可見位置大量堆疊：

- 建築師
- 建築師事務所
- 台灣建築師
- BIM
- BIM 建模
- 建築工程
- GRC
- PCM
- BEP
- 外牆工程
- 建築設計
- 建築施工
- ……大量同義詞

也不要重複相同關鍵字以試圖提高排名。

## 建議

將原本的「Keyword Layer」升級成：

> **SEO / GEO Semantic Layer（語意層）**

用途不是告訴搜尋引擎「這頁有很多關鍵字」，而是整理：

- primaryTopic：主要主題
- relatedTopics：相關主題
- entities：重要實體／名詞
- audience：主要受眾
- questions：本頁回答的搜尋問題
- relatedArticles：相關文章
- relatedServices：相關服務
- author：作者／顧問
- sources：資料來源
- contentType：文章類型

這些資料可以由 JS 或 JSON-LD 管理，但不得與頁面實際可見內容矛盾。

---

# 02｜四篇文章的 Semantic Map

## ARTICLE 01｜BIM

### Primary Topic
BIM

### Primary Entity
Building Information Modeling／建築資訊模型

### Related Entities
- 3D BIM
- 4D BIM
- 建築資訊
- BIM 建模
- BIM 協作
- 建築工程
- 工程資訊
- 模型交付
- 資訊交接
- 建築師

### Audience
- 建築師
- 建築師事務所
- 工程團隊
- 營造相關人員
- PCM／專案管理相關人員

### Core Questions
- BIM 是什麼？
- BIM 和一般 3D 建模有什麼不同？
- 3D BIM 是什麼？
- 4D BIM 是什麼？
- BIM 可以應用在哪些階段？
- BIM 模型建立之後誰使用？
- BIM 一定要自己建立嗎？
- BIM 與 PCM、BEP 有什麼關係？

### Related Articles
- PCM
- BEP
- 建築師／工程協作

---

# 03｜ARTICLE 02｜PCM

### Primary Topic
PCM

### Primary Entity
Professional Construction Management／專業營建管理

### Related Entities
- 專案管理
- 建築工程管理
- 工程進度
- 品質管理
- 成本管理
- 專業界面
- BIM
- 建築師
- 營造
- 工程協作

### Audience
- 建築師
- 建築師事務所
- 業主
- PCM
- 工程管理人員
- 營造與專業工程團隊

### Core Questions
- PCM 是什麼？
- PCM 在建築工程中做什麼？
- PCM 和建築師有什麼不同？
- PCM 和營造有什麼不同？
- PCM 和 BIM 有什麼關係？
- 為什麼工程需要專案管理？

### Related Articles
- BIM
- BEP
- 建築師／工程協作

---

# 04｜ARTICLE 03｜BEP

### Primary Topic
BEP

### Primary Entity
BIM Execution Plan／BIM 執行計畫

### Related Entities
- BIM 協作
- BIM 專案
- 模型要求
- 資訊交換
- 模型交付
- BIM 品質管理
- PCM
- 建築師
- 營造
- 專業分包
- 工程資訊

### Audience
- 建築師
- 建築師事務所
- PCM
- BIM 團隊
- 營造
- 專業工程團隊

### Core Questions
- BEP 是什麼？
- BIM Execution Plan 是什麼？
- BEP 和 BIM 有什麼不同？
- BEP 為什麼需要定義角色？
- BEP 需要規劃哪些內容？
- BEP 和 PCM 有什麼關係？
- BIM 模型如何交接與協作？

### Related Articles
- BIM
- PCM
- 建築師／工程協作

---

# 05｜ARTICLE 04｜建築師與工程協作

### Primary Topic
建築師工程協作

### Related Entities
- 建築師
- 建築師事務所
- BIM
- PCM
- BEP
- 工程整合
- GRC
- GRC 預鑄
- 外牆工程
- 專業廠商
- 設計到施工
- 建築工程

### Audience
- 建築師
- 建築師事務所
- 建築設計團隊
- 工程顧問
- 營造
- 專業工程廠商

### Core Questions
- 建築師為什麼需要跨專業合作？
- BIM 如何連結設計與工程？
- 建築師如何與專業工程廠商協作？
- 從設計到施工，中間需要哪些專業？
- GRC 等特殊造型工程如何與設計協作？
- 建築師如何找到可以長期合作的專業團隊？

注意：

「所有建築師都需要固定合作團隊」不可作為結論。

標題中的「可能」應保留，文章應呈現不同專案有不同組織方式。

---

# 06｜官方資料來源策略

## A. 優先來源

涉及 BIM、建築工程、公共工程、政策、研究結果、制度與規範時，優先使用：

### 第一優先
- 內政部
- 內政部建築研究所（ABRI）
- 國土管理相關官方機關
- 公共工程委員會
- 其他與該主題直接相關的中央／地方政府機關

### 第二優先
- 國立大學／研究機構
- 正式學術論文
- 國際標準或正式標準組織
- 具有明確出版資訊的研究報告

### 第三優先
- 官方產業組織
- 官方技術文件
- 原始資料提供者

不得因為某篇文章需要來源，就任意引用 SEO 部落格、行銷公司文章或二手整理文章取代第一手資料。

---

# 07｜內政部建築研究所資料的使用方式

建研所資料很適合本系列，但必須「適度使用」。

## 適合引用的情況

### ① 名詞／概念背景

例如：

- BIM 發展
- 建築資訊
- BIM 導入
- BIM 協作
- 建築工程數位化

### ② 研究結果

例如：

- BIM 自建／外包／合作模式
- BEP 實務問題
- 特定研究對象的調查結果

### ③ 政策／公共工程現況

可以引用，但必須明確標示：

- 研究年份
- 研究對象
- 研究範圍
- 資料適用情境

## 不可以

不得把：

「某一年度、某一類型公共工程的研究結果」

改寫成：

「現在全台營建業都如此」。

不得把：

「研究指出可能存在某問題」

改寫成：

「業界普遍存在某問題」。

不得把：

「政府推動公共工程 BIM」

改寫成：

「所有民間建築案都必須使用 BIM」。

不得把舊研究數據直接寫成 2026 年現況。

---

# 08｜外部官方連結的正確做法

不要只連：

> 內政部建築研究所首頁

優先連到：

> **實際支持該句話的研究報告、官方頁面或原始資料。**

例如：

「根據內政部建築研究所○○年度研究……」

「資料來源｜內政部建築研究所：〈○○○○〉」

連結應直接指向該份資料。

## 正文與參考資料區可以並存

重要數據、政策、研究結論：

> 在正文附近提供來源。

文章結尾：

> ## 參考資料

列出完整資料名稱、發布機關、年份及官方連結。

---

# 09｜官方來源不是越多越好

不要為了 SEO／GEO 而讓文章充滿外部連結。

原則：

> **需要證明的地方才引用。**

一般知識整理、騰煇自己的工程觀點、騰煇第一手案例：

不需要每一句都掛外部來源。

建議一篇文章以「少量、高品質、直接支持主張」的來源為原則。

---

# 10｜「官方資料」與「騰煇觀點」必須分開

文章中要清楚區分：

### 官方資料
「內政部建築研究所某年度研究指出……」

### 騰煇的整理
「從工程實務角度，可以將這件事理解為……」

### 騰煇第一手經驗
「在實際工程中，我們會遇到……」

不要把騰煇自己的推論寫成政府或研究機構的結論。

---

# 11｜每篇文章建立「可被 AI 直接理解的答案」

重要名詞第一次出現時，應有清楚、獨立、可引用的定義。

例如：

## BIM 是什麼？

> BIM（Building Information Modeling）可以理解為將建築幾何模型與工程資訊整合，並讓資訊在不同工程階段持續建立、使用與交接的方法。

## 3D BIM 是什麼？

> 3D BIM 是以三維模型呈現建築幾何與相關工程資訊的 BIM 應用方式。

## 4D BIM 是什麼？

> 4D BIM 是在 3D BIM 的基礎上加入時間與施工時序，用來呈現工程不同階段的施工進程。

以上文字必須依實際來源與騰煇最終確認內容調整，不得把示例句直接視為官方定義。

原則：

> **一個問題，先給一個清楚答案，再展開說明。**

---

# 12｜H1 / H2 / H3 結構

每篇文章：

- 1 個 H1
- H2 用於主要問題／主要概念
- H3 用於子問題
- 不要為了 SEO 把同一個關鍵字反覆放進所有標題

例如：

H1：
> BIM 是什麼？從 3D 建模，到建築資訊模型

H2：
> BIM 到底是什麼？

H2：
> 3D BIM 和一般 3D 建模有什麼不同？

H2：
> BIM 可以應用在哪些工程階段？

H2：
> BIM 要怎麼進入實務？

H3：
> BIM 一定要公司自己建立嗎？

H3：
> 模型建立之後，誰來使用？

H2：
> BIM 和 PCM、BEP 有什麼關係？

H2：
> 常見問題

標題必須服務讀者理解，不得只服務關鍵字。

---

# 13｜四篇文章的語意內鏈

不要只使用：

> 上一篇／下一篇

改成自然語意連結。

## BIM → PCM

在 BIM 文末：

> BIM 解決的是建築資訊如何建立、整合與使用；但當專案進入多專業協作後，工程本身又需要如何被管理？

連結：

> **PCM 是什麼？建築工程中的專案管理，到底在管理什麼？**

## PCM → BEP

> 當 BIM 成為專案管理的重要資訊工具後，不同專業又要依照什麼方式協作？

連結：

> **BEP 是什麼？BIM 專案，為什麼需要一份「執行計畫」？**

## BEP → 建築師協作

> 當 BIM 從單一公司的模型，走向跨專業資訊協作，建築師與不同工程專業之間的合作方式也會變得重要。

連結：

> **未來的建築師，可能都需要固定的合作團隊？**

## 第四篇 → 回連前面三篇

自然連回：

- BIM
- PCM
- BEP

形成閉環。

---

# 14｜文章 → 服務頁

只有在語意自然時才連結，不要硬塞。

例如：

BIM 文章：

> BIM 與實際工程如何銜接？

可連：

> 騰煇 BIM／3D 數位工程相關頁面

GRC 段落：

> 特殊造型如何從設計走向工程？

可連：

> 騰煇 GRC 工程頁面

外牆工程段落：

> 建築設計如何進入外牆工程？

可連：

> 騰煇外牆工程／外牆更新頁面

原則：

> 文章回答知識問題；服務頁承接實際需求。

---

# 15｜顧問／作者實體

待顧問專業介紹頁建立後：

文章應標示：

> 作者／專業顧問  
> 李瑩昱  
> BIM × 建築資訊 × 數位工程

並連結至顧問介紹頁。

顧問介紹頁再回連相關文章。

不要自行增加顧問尚未確認的：

- 學歷
- 職稱
- 專業資格
- 案件數
- 軟體能力
- 研究成果
- 專案經驗

所有作者資料必須以顧問本人／騰煇確認資料為準。

---

# 16｜Structured Data

小U應檢查並視網站實際架構建立：

## Article／BlogPosting

至少考慮：

- headline
- description
- datePublished
- dateModified
- author
- publisher
- mainEntityOfPage
- image

資料必須與頁面可見內容一致。

## BreadcrumbList

建立：

> 首頁 → 建築工程知識 → BIM 是什麼？

不要只按照 URL 字串機械生成。

Breadcrumb 應反映使用者理解的網站階層。

## Organization

網站首頁／組織相關位置建立騰煇企業 Organization structured data。

資料必須與官方網站實際公開資訊一致。

## ProfilePage

如果網站建立正式顧問／作者介紹頁，可以評估使用 ProfilePage 結構化資料。

## FAQ

FAQ 主要目的是讓內容更清楚。

不得為了 Schema 而生成大量頁面上不存在的 FAQ。

FAQ 內容必須真的出現在使用者可閱讀的頁面內容中。

---

# 17｜JS / JSON-LD Semantic Layer 建議格式

可建立每篇文章自己的語意設定。

示意：

```javascript
const articleSemantic = {
  primaryTopic: "BIM",
  primaryEntity: "Building Information Modeling",
  relatedEntities: [
    "3D BIM",
    "4D BIM",
    "建築資訊模型",
    "BIM 協作",
    "建築工程",
    "建築師"
  ],
  audience: [
    "建築師",
    "建築師事務所",
    "工程團隊",
    "PCM"
  ],
  questions: [
    "BIM 是什麼？",
    "BIM 和一般 3D 建模有什麼不同？",
    "3D BIM 是什麼？",
    "4D BIM 是什麼？",
    "BIM 一定要自己建立嗎？"
  ],
  relatedArticles: [
    "/articles/pcm-what-is-pcm.html",
    "/articles/bep-bim-execution-plan.html"
  ],
  relatedServices: [
    "/services/bim",
    "/services/grc",
    "/services/exterior-wall"
  ]
};
```

這只是結構示意。

實際 URL 必須以騰煇網站現況為準。

不要產生不存在的 URL。

---

# 18｜Semantic Layer 的硬性限制

Semantic Layer 裡的內容：

1. 必須與頁面內容一致。
2. 不得加入頁面完全沒有討論的主題，只為搶搜尋詞。
3. 不得加入騰煇尚未確認提供的服務。
4. 不得加入未確認的 BIM 軟體。
5. 不得加入未確認的 BIM 案件數。
6. 不得加入未確認的 BIM 資格。
7. 不得加入未確認的自動算量、自動報價、AI 排錯等能力。
8. 不得加入「最佳」「最強」「領先」「唯一」等未經證實的比較性描述。
9. 不得把「建築師」當成所有文章的無差別關鍵字。
10. 每個 Topic 必須能在頁面正文找到合理對應。

---

# 19｜SEO 基礎技術檢查

每篇發布前，小U檢查：

- Title 唯一
- Meta Description 唯一
- H1 唯一
- Canonical 正確
- URL 穩定
- robots 可索引
- 沒有 noindex
- Sitemap 已包含
- Breadcrumb 正確
- Article Schema 正確
- Organization 關聯正確
- Author／Profile 關聯正確（若已建立）
- Open Graph 正確
- 圖片 alt 與圖片實際內容一致
- 內部連結正常
- 不存在 404
- 不產生重複 URL
- 行動裝置可讀
- 頁面載入不因 SEO 程式碼明顯變慢

Structured data 上線後應使用 Google Rich Results Test／URL Inspection 等官方工具檢查。

---

# 20｜Google / Bing / AI 的觀察方式

不要用「有沒有排名第一」當作 GEO 成效的唯一判斷。

## Google

觀察：

- Search Console impressions
- clicks
- CTR
- queries
- indexed pages
- page performance
- query → landing page 對應

## Bing

如果網站已連接 Bing Webmaster Tools：

持續觀察 AI Performance：

- Pages Cited
- Grounding Queries
- Page-level Citation Activity
- Topics
- Intents
- Citation Share（若帳戶功能可用）
- Compare

Bing 的 AI Performance 顯示的是 AI 答案中的引用活動，不等於排名、權威分數或流量。

---

# 21｜GEO 成效不要做錯誤解讀

以下不能直接推論：

> 「AI 引用增加，所以一定是這次 SEO 修改造成。」

因為 AI citation 會受到：

- 使用者問題變化
- AI 模型更新
- 搜尋結果變化
- 網站內容更新
- 其他網站內容變化
- 資料重新整理

等因素影響。

應該把它當成：

> **觀察性指標，而不是單一因果證明。**

---

# 22｜四篇文章的發布順序

建議：

### 第一階段
01 BIM

建立核心詞彙與網站知識入口。

↓

### 第二階段
02 PCM

建立「BIM × 專案管理」語意關係。

↓

### 第三階段
03 BEP

建立「BIM × 協作 × 執行」語意關係。

↓

### 第四階段
04 建築師工程協作

開始把：

> BIM × PCM × BEP × GRC × 工程整合

連到騰煇的實際工程能力。

---

# 23｜發布前最終審核

小U不得只檢查「關鍵字有沒有出現」。

必須回答：

### Content
- 這篇真正回答了什麼問題？
- 第一段能否快速理解主題？
- 重要名詞是否有清楚定義？
- 是否有第一手內容？

### SEO
- Title 是否明確？
- H1/H2/H3 是否合理？
- URL 是否穩定？
- Canonical 是否正確？
- Sitemap 是否包含？

### GEO
- AI 是否能直接找到一句完整答案？
- 重要主張是否有來源？
- 官方資料是否直接支持該主張？
- 作者是否清楚？
- 相關文章是否有語意內鏈？
- 頁面是否能被獨立理解？

### Entity
- 騰煇企業名稱是否一致？
- 建築師、BIM、PCM、BEP 等名詞是否一致？
- 顧問資料是否一致？
- 服務名稱是否一致？

---

# 24｜最終原則

本系列不是：

> 「四篇 SEO 關鍵字文章。」

而是：

> **「四篇建立騰煇建築工程知識入口的核心文章。」**

SEO 負責讓搜尋引擎找到它。

GEO 負責讓 AI 理解它。

官方資料負責讓可驗證的主張有證據。

騰煇自己的工程觀點負責建立差異。

案例與服務頁負責承接實際需求。

最後形成：

**搜尋問題**

↓

**知識文章**

↓

**相關文章**

↓

**顧問／作者**

↓

**騰煇工程案例**

↓

**服務頁**

↓

**詢問／轉換**

不要以「藏更多關鍵字」作為主要策略。

---

# 25｜推薦官方資料與工具

執行時優先使用以下官方來源：

- Google Search Central
- Google Search Console
- Google Rich Results Test
- Google URL Inspection
- Google Structured Data documentation
- Bing Webmaster Tools
- Bing AI Performance
- Bing Webmaster Guidelines
- 內政部
- 內政部建築研究所
- 公共工程委員會
- 其他與文章主題直接相關之政府／研究機構

所有外部來源必須直接對應文章主張，不得為了增加「權威感」而大量堆疊來源。

---

# 26｜小U執行時的最後一句判斷標準

如果一項 SEO／GEO 技術：

> **讓搜尋引擎更容易理解頁面，且不犧牲使用者閱讀品質 → 執行。**

如果一項技術：

> **只有搜尋引擎可能看得到，但使用者看不到，而且主要目的是堆疊關鍵字 → 不執行。**

如果一項技術：

> **需要騰煇新增未確認的服務、能力、資格或案例 → 先停下來要求確認。**

---

# 27｜資料來源說明

本規範中的 SEO／GEO 技術方向，以 Google Search Central 與 Bing Webmaster Tools 官方公開文件為主要依據。

Bing 目前已提供 AI Performance，可查看網站頁面在 Microsoft Copilot、Bing AI 生成摘要及部分合作 AI 體驗中的引用活動，以及 Grounding Queries、Pages Cited 等資料；Bing 官方也建議針對 AI 搜尋改善內容的主題聚焦、結構清晰、證據支持與內容更新。 

Google Search Central 官方文件則提供 Article、Breadcrumb、Organization、Profile Page 等結構化資料相關規範與測試方式。

內政部建築研究所資料則只作為「建築／BIM 主題的第一手官方研究來源」，每一篇文章應依實際主張重新查找並引用最直接的原始資料，不得預先指定某一份研究必須使用。

