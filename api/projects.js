// 騰煇企業有限公司 — 115 全案場動態 API (/api/projects)
// 包含洪先生(老闆)、舒俞姐、美云經理、嘉宏、樂咖經理、小斌、樂弟責任案場

const liveProjectsData = [
  {
    id: "p115-01",
    name: "好澄/國園 — 台北流行音樂中心外牆工程",
    client: "好澄/國園工程",
    salesRep: "洪先生(老闆)",
    siteManager: "樂咖經理",
    accounting: "俞臻姐",
    totalAmount: "$45,800,000",
    paidAmount: "$38,000,000",
    stage: "公設地標完工檢收中",
    status: "🟢 台北地標工程完工",
    isAlert: false
  },
  {
    id: "p115-02",
    name: "中塑工程 — 台塑貨運北區營運中心塗料",
    client: "中塑工程/台塑",
    salesRep: "洪先生(老闆)",
    siteManager: "小斌",
    accounting: "俞臻姐",
    totalAmount: "$28,500,000",
    paidAmount: "$22,000,000",
    stage: "北區營運中心噴塗中",
    status: "🟢 議價合約執行中",
    isAlert: false
  },
  {
    id: "p115-03",
    name: "久樘開發 — 久樘建設總部外牆塗料工程",
    client: "久樘開發",
    salesRep: "洪先生(老闆)",
    siteManager: "樂弟",
    accounting: "俞臻姐",
    totalAmount: "$16,200,000",
    paidAmount: "$12,800,000",
    stage: "總部外牆塗裝驗收",
    status: "🟢 建商總部完工估驗",
    isAlert: false
  },
  {
    id: "p115-04",
    name: "御豐營造 — 三重花園綻 GRC 裝飾工程",
    client: "御豐營造",
    salesRep: "舒俞姐",
    siteManager: "樂咖經理",
    accounting: "俞臻姐",
    totalAmount: "$8,500,000",
    paidAmount: "$5,100,000",
    stage: "3F 吊裝進度 60%",
    status: "⚠️ 3F 窗台尺寸落差 5cm 警示",
    isAlert: true
  },
  {
    id: "p115-05",
    name: "中塑工程 — 嘉義馬稠後外牆塗料趕工案",
    client: "中塑工程",
    salesRep: "舒俞姐",
    siteManager: "小斌",
    accounting: "俞臻姐",
    totalAmount: "$12,800,000",
    paidAmount: "$7,200,000",
    stage: "外牆噴塗趕工中",
    status: "⚠️ 8/14 前完工 (每日扣款 0.5%)",
    isAlert: true
  },
  {
    id: "p115-06",
    name: "國園建設 — 新竹縣戶政大樓 GRC 造型工程",
    client: "國園建設",
    salesRep: "美云經理",
    siteManager: "樂咖經理",
    accounting: "俞臻姐",
    totalAmount: "$15,600,000",
    paidAmount: "$9,300,000",
    stage: "1F 大樣放樣點收",
    status: "🟢 1F 放樣完成",
    isAlert: false
  },
  {
    id: "p115-07",
    name: "統一敦富商場 — 包板與包柱造型工程",
    client: "帝硯建設/陳小姐",
    salesRep: "嘉宏",
    siteManager: "小斌",
    accounting: "俞臻姐",
    totalAmount: "$6,800,000",
    paidAmount: "$4,200,000",
    stage: "對帳核對數量與合約追加",
    status: "🟢 嘉宏對帳估驗中",
    isAlert: false
  }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'success', data: liveProjectsData });
  }
  return res.status(405).send('Method Not Allowed');
}
