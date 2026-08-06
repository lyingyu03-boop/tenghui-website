// 騰煇企業 — 全案場與合約共用雙向資料庫 API (/api/projects)
// Synchronized Live Shared Database Extracted from 115年度《行政工作紀錄.xlsx》
// 業務團隊正式加入：嘉宏 (顏嘉宏)

let sharedProjects = [
  {
    id: 'proj-115-1',
    name: '御豐營造 — 三重花園綻 3F GRC飾板',
    client: '御豐營造',
    salesRep: '舒俞姐',
    siteManager: '樂咖經理',
    accounting: '俞臻姐',
    totalAmount: '$5,800,000',
    paidAmount: '$3,480,000 (60%)',
    status: '工務達 60% (已自動觸發第二期估驗請款)',
    stage: 'GRC 飾板吊裝中',
    isAlert: true
  },
  {
    id: 'proj-115-2',
    name: 'T115-0302 國園工程 — 瓏山林山河飯店',
    client: '國園工程',
    salesRep: '舒俞姐',
    siteManager: '樂咖經理',
    accounting: '俞臻姐',
    totalAmount: '$2,850,000',
    paidAmount: '$1,710,000 (60%)',
    status: '回頭車兩台運送中，7/21完成卸貨',
    stage: '塗料噴塗與簽收點收',
    isAlert: false
  },
  {
    id: 'proj-115-3',
    name: 'T115-0505 / 0202 瑞築建設 — 品風華外牆',
    client: '瑞築建設 / 藍天',
    salesRep: '美云經理',
    siteManager: '小斌',
    accounting: '俞臻姐',
    totalAmount: '$1,275,895',
    paidAmount: '$1,084,510 (85%)',
    status: '出貨三台車 17噸，亞伯丁 MGN-143*20 桶已送達',
    stage: '滴水條與 PPG 塗裝完成 85%',
    isAlert: false
  },
  {
    id: 'proj-115-4',
    name: 'T115-0301 采暘建設 — 台東山河苑 GRC/UHPC',
    client: '采暘建設 / 國園',
    salesRep: '美云經理',
    siteManager: '樂弟',
    accounting: '俞臻姐',
    totalAmount: '$3,400,000',
    paidAmount: '$2,380,000 (70%)',
    status: '回頭車運費 $15,000、堆高機 $3,150 俞臻姐匯款完成',
    stage: 'UHPC 飾板卸貨完成',
    isAlert: false
  },
  {
    id: 'proj-115-5',
    name: 'T113-1003 中塑 — 馬稠後趕工工程',
    client: '中塑',
    salesRep: '舒俞姐',
    siteManager: '小斌',
    accounting: '俞臻姐',
    totalAmount: '$4,100,000',
    paidAmount: '$3,280,000 (80%)',
    status: '⚠️ 8/14 前必須完工（逾期每日扣款 0.5%）',
    stage: '東和/東聯吊車配合趕工',
    isAlert: true
  },
  {
    id: 'proj-115-6',
    name: 'T115-0405 亨御國際 — 統一敦富商場包板',
    client: '亨御國際 / 帝硯',
    salesRep: '嘉宏',
    siteManager: '小斌',
    accounting: '俞臻姐',
    totalAmount: '$1,950,000',
    paidAmount: '$975,000 (50%)',
    status: '帝硯陳小姐核對數量，合約追加嘉宏對帳確認中',
    stage: '包板噴塗進行中',
    isAlert: false
  },
  {
    id: 'proj-115-7',
    name: 'T115-0604/0605 國園 — 新竹縣戶政大樓',
    client: '國園工程',
    salesRep: '美云經理',
    siteManager: '樂咖經理',
    accounting: '俞臻姐',
    totalAmount: '$6,200,000',
    paidAmount: '$1,240,000 (20%)',
    status: '合約與備查資料提送，1F大樣放樣',
    stage: '大樣放樣階段',
    isAlert: false
  }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'success', data: sharedProjects });
  }

  if (req.method !== 'POST') {
    const newProj = req.body;
    if (newProj && newProj.name) {
      const existing = sharedProjects.find(p => p.name.includes(newProj.name) || newProj.name.includes(p.name));
      if (!existing) {
        sharedProjects.unshift({
          id: `proj-${Date.now()}`,
          name: newProj.name,
          client: newProj.client || '國園/營造',
          salesRep: newProj.salesRep || '嘉宏',
          siteManager: newProj.siteManager || '樂咖經理',
          accounting: '俞臻姐',
          totalAmount: newProj.totalAmount || '待報價核定',
          paidAmount: newProj.paidAmount || '$0 (0%)',
          status: newProj.status || 'NEW 煇零機合約解析自動建立',
          stage: newProj.stage || '1F 大樣放樣中',
          isAlert: true
        });
      }
    }
    return res.status(200).json({ status: 'success', data: sharedProjects });
  }

  return res.status(405).send('Method Not Allowed');
}

export function getSharedProjects() {
  return sharedProjects;
}
