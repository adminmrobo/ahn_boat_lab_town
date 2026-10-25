# Ahn Lab Town — 업데이트 방법

## 폴더 구성
- `index.html` — 연구실 페이지 (코드는 건드리지 않아도 됩니다)
- `tasks.json` — 할 작업 / 제조 중 / 완성 목록
- `research.json` — 박사 연구실적 (GitHub 페이지, 논문, 특허, 저서)
- `config.json` — 공유 카운터 주소, 박사 소개 링크 2개
- `assets/` — 맵, 캐릭터 포즈(27종), 사고 컷
- `counter_apps_script.gs` — 방문자 전체 누적 집계용 구글 시트 코드

## 연구실적 추가하기 (research.json)
GitHub에서 `research.json`을 열고 연필(편집) 아이콘을 누른 뒤, 같은 묶음 안의 항목 한 줄을 복사해 붙이고 내용만 바꾸면 됩니다.

```json
{"title": "새 강의 페이지 제목", "url": "https://adminmrobo.github.io/새저장소/", "desc": "시리즈 이름"},
```

논문은 `papers` 묶음에 `date`, `title`, `venue`, `url`을 넣습니다. 쉼표(,)를 빠뜨리면 페이지가 내장된 예전 목록을 보여 주니, 저장 전에 항목 사이 쉼표를 확인하세요. 맨 위 `updated` 날짜도 바꿔 주세요.

## 작업 현황 바꾸기 (tasks.json)
`status`를 `todo`(할 작업) → `doing`(제조 중) → `done`(완성)으로 바꾸고, 완성되면 `link`를 넣습니다. 담당자 `owner`는 `doc` / `asst` / `fly` / `robo` 중 하나입니다.

## 방문자 전체 클릭·사고 건수 누적하기
지금은 방문자 각자의 브라우저 안에서만 누적됩니다. 모든 방문자의 합계를 쌓으려면:
1. 구글 시트를 새로 만들고 [확장 프로그램] → [Apps Script]를 엽니다.
2. `counter_apps_script.gs` 내용을 붙여넣고 저장합니다.
3. [배포] → [새 배포] → 웹 앱 / 실행 사용자: 나 / 액세스: 모든 사용자 → 배포.
4. 나온 주소(…/exec)를 `config.json`의 `COUNTER_URL`에 넣습니다.

시트의 `log` 탭에 실험 시각·종류·출력 레벨·사고 여부가 한 줄씩 쌓입니다.
