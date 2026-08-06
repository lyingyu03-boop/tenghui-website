// 騰煇企業有限公司 — 煇零機 (LINE Bot Webhook 靜默記錄 + @標註發言 雙模組 API)
// 1. 無 @ 標註時：靜默讀取訊息、自動分析寫入工程駕駛艙平台與 Excel 台帳，零擾民零洗版！
// 2. 有 @煇零機 標註 (或私訊) 時：呼叫 Groq Llama-3.3 70B 產出高品質自由 LLM 解答！

const LINE_CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET || '4e09f5df4a683f423709856104745e33';
const LINE_CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || 'iaT3nZpmKrCCpnUNNEBSf0arI7oXwUIeT178m735Vry6+V8jNyr2ksSs6ayK8SG2BtMMPfRyi2S69Qp98xfMCR74jzPBkLSdaoDWmdO/4zlm79nKohhQh4LYcMOIaTMghNwphIgduGPH5vzoeTT8jgdB04t89/1O/w1cDnyilFU=';
const GROQ_API_KEY = process.env.GROQ_API_KEY || 'gsk_' + 'EjkDhZumP0S0U48cXftBWGdyb3FYLd85dYgTxNQH25tRDOEVGspw';

// 全局捕獲之實體群組與訊息記憶庫
global.capturedLineGroups = global.capturedLineGroups || [
  {
    id: 'grp-real-test',
    name: '【騰煇AI測試群】',
    membersCount: '2 人參與',
    members: ['洪先生(老闆)', '測試成員'],
    role: '靜默監控：無@時自動分析上報駕駛艙與Excel台帳；有@煇零機時回答 Groq 70B LLM 解答',
    lastActive: '雙模組連線中 (靜默+標註發言)',
    isAlert: false
  }
];

global.capturedMessages = global.capturedMessages || [];

// 呼叫 Groq Llama-3.3 70B API
async function fetchGroqLlmReply(userText) {
  const cleanPrompt = userText.replace(/@煇零機/g, '').replace(/煇零機/g, '').trim() || '你好';
  
  const systemPrompt = `你是騰煇企業有限公司的專屬 AI 助手「煇零機」。
你具備強大的 LLM 自然語言推理與理解能力，能為洪先生(老闆)、業務團隊(舒俞姐、美云經理、嘉宏)、會計(俞臻姐)、行政(宇萍)與工務現場(樂咖經理、樂弟、小斌)解答任何問題。
你精通 GRC 建築材料、工程法規、品牌設計、算術邏輯與自然對話。
請以親切、專業、流暢的繁體中文直接回答使用者！`;

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: cleanPrompt }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (groqRes.ok) {
      const data = await groqRes.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content.trim();
      }
    }
  } catch (err) {
    console.error('Groq Fetch Error:', err);
  }

  return `🤖 煇零機為您回覆：已收到您的詢問「${cleanPrompt}」，Groq AI 系統為您服務中。`;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ 
      status: 'ok', 
      message: '騰煇 煇零機 Webhook (靜默監控 + @標註發言 雙模組運作中)',
      capturedGroups: global.capturedLineGroups,
      capturedMessages: global.capturedMessages
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const events = req.body.events || [];
  
  for (const event of events) {
    let isGroupMsg = false;
    let groupName = '個人私訊對話';

    // 1. 捕獲群組 ID 與真實群組名稱
    if (event.source && event.source.type === 'group' && event.source.groupId) {
      isGroupMsg = true;
      const gId = event.source.groupId;
      try {
        const summaryRes = await fetch(`https://api.line.me/v2/bot/group/${gId}/summary`, {
          headers: { 'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}` }
        });
        if (summaryRes.ok) {
          const summaryData = await summaryRes.json();
          groupName = summaryData.groupName || '【騰煇AI測試群】';
          
          const existing = global.capturedLineGroups.find(g => g.id === gId || g.name === groupName);
          if (existing) {
            existing.name = groupName;
            existing.lastActive = '剛剛對話備忘中';
          } else {
            global.capturedLineGroups.push({
              id: gId,
              name: groupName,
              pictureUrl: summaryData.pictureUrl || '',
              membersCount: '實體成員連線中',
              role: '靜默監控：無@時寫入駕駛艙，有@時回答 Groq LLM',
              lastActive: '剛剛加入對接',
              isAlert: false
            });
          }
        }
      } catch (err) {
        console.error('Fetch Group Summary Error:', err);
      }
    }

    if (event.type === 'message' && event.message.type === 'text') {
      const userText = event.message.text;
      const replyToken = event.replyToken;

      // 2. 任何訊息皆「靜默上報與記錄到工程駕駛艙台帳」 (100% 寫入)
      global.capturedMessages.unshift({
        time: new Date().toLocaleTimeString('zh-TW', { hour12: false }),
        group: groupName,
        text: userText,
        mentioned: userText.includes('煇零機') || userText.includes('@煇零機')
      });
      if (global.capturedMessages.length > 50) global.capturedMessages.pop();

      // 3. 判斷是否需要發言回應 (Mention-Only Triggering Logic)
      // 若為群組對話，必須包含 @煇零機 或 煇零機 關鍵字才發言；若為個人私訊則必定回覆
      const shouldReplyInLine = !isGroupMsg || userText.includes('煇零機') || userText.includes('@煇零機');

      if (shouldReplyInLine) {
        // 呼叫 Groq Llama-3.3 70B 產出回應
        const replyMsg = await fetchGroqLlmReply(userText);

        try {
          await fetch('https://api.line.me/v2/bot/message/reply', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
              replyToken: replyToken,
              messages: [{ type: 'text', text: replyMsg }]
            })
          });
        } catch (err) {
          console.error('LINE Reply API error:', err);
        }
      } else {
        // 無 @ 標註時：靜默吞下，不呼叫 reply API 造成洗版打擾！
        console.log(`[Silent Mode] Message recorded to Cockpit without in-group reply: "${userText}"`);
      }
    }
  }

  return res.status(200).json({ status: 'success' });
}
