/**
 * Ahn Lab Town 공유 카운터 (Google Apps Script)
 * 1) 구글 시트를 새로 만들고 [확장 프로그램] → [Apps Script]를 연다.
 * 2) 이 코드를 붙여넣고 저장한다.
 * 3) [배포] → [새 배포] → 유형: 웹 앱, 실행 사용자: 나, 액세스: 모든 사용자 → 배포.
 * 4) 나온 웹 앱 URL(…/exec)을 config.json 의 COUNTER_URL 에 넣는다.
 * 시트의 "log" 탭에 이벤트가 한 줄씩 쌓이고, 합계는 스크립트 속성에 저장된다.
 */
const EVENTS = ['e1','e2','e3','e4','e5','e6'];

function doGet(e) {
  const p = (e && e.parameter) || {};
  const props = PropertiesService.getScriptProperties();
  if (p.action === 'hit') {
    const ev = EVENTS.indexOf(p.event) >= 0 ? p.event : 'e?';
    const acc = p.accident === '1';
    const lvl = Math.max(1, Math.min(5, parseInt(p.level, 10) || 1));
    const lock = LockService.getScriptLock();
    lock.waitLock(5000);
    try {
      const clicks = Number(props.getProperty('clicks') || 0) + 1;
      const accidents = Number(props.getProperty('accidents') || 0) + (acc ? 1 : 0);
      props.setProperties({ clicks: String(clicks), accidents: String(accidents) });
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const sh = ss.getSheetByName('log') || ss.insertSheet('log');
      if (sh.getLastRow() === 0) sh.appendRow(['시각', '이벤트', '출력 레벨', '사고 여부']);
      sh.appendRow([new Date(), ev, lvl, acc ? '사고' : '성공']);
    } finally {
      lock.releaseLock();
    }
  }
  const out = {
    clicks: Number(props.getProperty('clicks') || 0),
    accidents: Number(props.getProperty('accidents') || 0)
  };
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
