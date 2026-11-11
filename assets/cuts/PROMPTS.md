# Ahn-boat Lab Town · 만화 컷 다시 그리기 프롬프트 (Genspark용)

2026-11-11 이 프롬프트로 받은 그림 13장으로 교체를 마쳤습니다. 다시 그릴 때 아래를 그대로 씁니다.
아래 프롬프트로 그림을 받으면 **같은 파일 이름**(`.webp`, 16:9, 1200×720 이상)으로 덮어쓰기만 하면 됩니다. 코드는 고칠 필요가 없습니다.

## 쓰는 법
1. 맨 위 **공통 스타일**을 먼저 붙이고, 이어서 컷별 **장면** 문단을 붙입니다.
2. 장면에 나오는 캐릭터의 **캐릭터 토큰**을 장면 문단 뒤에 차례로 붙입니다(괄호 안 이름 = 아래 토큰 이름).
3. 맨 끝에 **공통 금지어(negative)** 를 붙입니다.
4. 그림 안에 글자가 들어가면 다시 뽑습니다(다국어 페이지라 글자 없는 그림이어야 함).
5. 미공개 X1~X3는 반드시 **검은 실루엣**으로만 — 얼굴·옷 색을 그리면 안 됩니다(예고 규칙).

---

## 공통 스타일 (모든 컷 맨 앞)
```
A single comic panel, 16:9 wide, detailed 16-bit SNES-era pixel art, crisp pixels, dithering shading, thick dark outlines, bright clean white research lab with pastel accents (mint, sky blue, butter yellow, soft pink), comedic slapstick mood, chibi characters about 2.5 heads tall, dynamic comic composition with radial speed lines, no readable text, no letters, no words, no logos
```

## 공통 금지어 (모든 컷 맨 끝)
```
Negative: text, letters, words, logo, watermark, signature, speech bubbles with writing, blurry, smooth vector art, 3D render, photorealistic, dark gloomy horror mood, gore, off-model characters, extra fingers, duplicated characters
```

## 캐릭터 토큰 (fruitfly-lab-expressions 공식 명세 그대로)
- **DOCTOR** — `the Professor, a chibi male scientist with a big head, dark charcoal spiky hair with a white streak at the front, a small low ponytail at the back, very thick bold black eyebrows, teal-framed rectangular glasses, light peach skin, white lab coat over a black vest, black tie and black slacks`
- **HARU** — `Haru, a cute chibi anime girl lab assistant, long straight pink hair with navy blue streaks including a thick navy streak down the center of the bangs, two round messy hair buns on top of the head, a small ahoge, big bright blue eyes, lavender hoodie with white drawstrings over a white t-shirt, open white knee-length lab coat, blue jeans, lavender sneakers`
- **FLY** — `the Fruit Fly, a tiny expressive cartoon fruit fly researcher with a dark charcoal-black segmented insect body, large glossy red compound eyes, a retro dark blue helmet with a yellow-white center stripe and small round side bolts, colorful dangling cables in magenta, purple and blue curving from the back of the helmet, a tiny white lab coat over a black vest, translucent veined wings, six thin black legs with the front pair used like hands`
- **ABABOT** — `AbaBot, a boxy beige retro CRT-monitor robot (about 70% of the doctor's height), dark green screen face with mint pixel eyes and mouth, short antenna topped with a red-brown abacus bead, gray segmented arms, two small tank treads, holding a wooden abacus`
- **SIA** — `Sia, a chibi girl maid intern, long straight jet-black hair to the waist with side-swept bangs, calm gray eyes, small silver earrings, no headdress, charcoal-black long-sleeved maid dress with white lace cuffs, large gray bow at the collar, long white frilled apron tied with a big bow at the back, white socks, black flat shoes`
- **MOA** — `Moa, a chibi girl maid intern (the smallest of the human characters), long ash-beige hair to the waist with wavy ends, white frilled maid headband, amber-brown eyes, camel knit cardigan over a white shirt with a red and navy plaid bow tie, white frilled apron, black skirt, white socks, brown loafers`
- **X1** — `a mysterious cute solid silhouette character filled with one flat very dark navy-black color with a thin purple rim light, two round plain white dot eyes, two small pink blush pixels, long side ponytail tied with a big bright pink bow (the only colored part)`
- **X2** — `a mysterious cute solid silhouette character filled with one flat very dark navy-black color with a thin purple rim light, round beret and short hair, round glasses frame whose lenses show two small teal reflections (the only colored part), two round white dot eyes, pink blush pixels`
- **X3** — `a very small mysterious cute solid silhouette character filled with one flat very dark navy-black color with a thin purple rim light, hood with cat ears, oversized lab coat with sleeves covering the hands, two hood drawstrings ending in small yellow pompoms (the only colored part), two round white dot eyes, pink blush pixels`

---

## 사고 컷 (accident)

### `e1_acc.webp` — 뇌 홀로그램 글리치 (초파리 뇌 연구)
장면: `A giant glowing cyan hologram of a fruit-fly brain floats above a lab bench and glitches wildly — RGB-split edges, broken scanlines, sparks flying. The hologram swells huge and fills the upper half of the panel. FLY panics in the foreground with sweat drops, arms flailing. SIA on the right flinches back with a shocked face, one hand raised. X2 peeks in from the bottom-right corner, only head and glasses visible.`
캐릭터: FLY, SIA, X2
> 원래 컷 `cut4_fly`(초파리가 크게 보이는 홀로그램)와 번갈아 나오니, 이 컷은 **뇌**가 커지는 쪽으로 그리면 겹치지 않습니다.

### `e2_acc.webp` — 차트 폭락 (비즈니스 AI)
장면: `A big wall monitor shows a line chart crashing straight down in red with a downward arrow. ABABOT in the center shows an alarmed face with red flashing antenna. DOCTOR runs in panic from the left, papers flying from his hands. MOA on the right trips and her tray of pink teacups flies into the air. HARU in a small circular inset in the top-left corner cries waterfall tears.`
캐릭터: DOCTOR, ABABOT, MOA, HARU

### `e3_acc.webp` — 조립 로봇 폭주 (제조·로봇 AI)
장면: `On a factory-style workbench, ABABOT goes berserk: smoke puffs, orange sparks, spinning abacus beads shooting out like bullets. HARU dashes away to the left with a comic running pose. SIA bravely holds a mop forward like a shield. MOA hides behind a potted plant on the far right, peeking out. DOCTOR's shocked face appears in a small circular inset top-left.`
캐릭터: ABABOT, HARU, SIA, MOA, DOCTOR

### `e4_acc.webp` — 스캐너 과열 (자연어 분석)
장면: `An overheating document scanner on a desk blows smoke, and dozens of paper sheets explode upward and swirl through the whole panel. HARU on the left stares up dumbfounded. SIA jumps to catch papers with both hands. MOA swats papers with a feather duster. SIA's teary face appears in a circular inset top-right.`
캐릭터: HARU, SIA, MOA

### `e5_acc.webp` — GPU 랙 과열·냉각수 누수 (데이터 코어)
장면: `A tall dark GPU server rack in the center with glowing red fans, thick smoke clouds on top, and blue coolant leaking into a big puddle on the white floor. SIA mops the puddle seriously. DOCTOR runs in from the left sweating. ABABOT on the right droops with a low-battery face. DOCTOR's sweating face appears in a circular inset top-left.`
캐릭터: SIA, DOCTOR, ABABOT

### `e6_acc.webp` — 전 구역 과부하 (중앙 허브)
장면: `The whole lab shakes: red alarm lamps in both top corners, a red-tinted burst background, wobble lines around everyone. A lineup of DOCTOR, HARU, FLY, ABABOT, SIA and MOA all shaking in panic in a row, each with a different funny shock pose. Behind them, X1, X2 and X3 tremble together as small silhouettes. FLY's shocked face in a circular inset at the top center.`
캐릭터: DOCTOR, HARU, FLY, ABABOT, SIA, MOA, X1, X2, X3

### `e7_acc.webp` — 찻잔 32개 낙하 (인턴 라운지, 새 실험)
장면: `An avalanche of thirty-two teacups (pink, white and pale blue) rains down onto DOCTOR's desk and keyboard, tea splashing everywhere. DOCTOR leaps back in shock. MOA on the right holds an empty silver tray, frozen with a guilty face. Insets: MOA apologizing (top-right circle) and DOCTOR in shock (top-left circle).`
캐릭터: DOCTOR, MOA

### `e8_acc.webp` — 바닥이 너무 반짝여서 전원 미끄러짐 (데이터 세척장, 새 실험)
장면: `The lab floor is polished to a mirror shine with sparkle stars. DOCTOR, HARU, ABABOT and MOA all slip at the same time — tilted mid-air with legs up and swoosh arcs. Only SIA stands calmly on the right holding her mop, looking surprised at what she has done. SIA's flustered face in a circular inset top-right.`
캐릭터: DOCTOR, HARU, ABABOT, MOA, SIA

### `e9_acc.webp` — 정전, 어둠 속 하얀 눈 (??? 대기석, 새 실험)
장면: `Total blackout: an almost black panel with faint diagonal stripes. In the center, X1, X2 and X3 stand as silhouettes — only their round white dot eyes and pink blush glow in the dark. MOA (bottom-left circle inset) and SIA (bottom-right circle inset) scream in fear. DOCTOR's shocked face in a small circle top-left. Funny, not scary.`
캐릭터: X1, X2, X3, MOA, SIA, DOCTOR

---

## 대박 컷 (jackpot)

### `jack_all.webp` — 전원 축하
장면: `Golden sunburst background with confetti and stars. DOCTOR thumbs up, HARU cheering with both arms up, FLY with a lightbulb idea pose, ABABOT dancing with the abacus raised, SIA cheering quietly with a small fist, MOA cheering with a light stick, standing in a row. Behind them X1, X2 and X3 jump and cheer as small silhouettes.`
캐릭터: DOCTOR, HARU, FLY, ABABOT, SIA, MOA, X1, X2, X3
> 원래 단체 사진 `group_large`와 번갈아 나옵니다.

### `e7_jack.webp` — 한 방울도 안 흘린 배치 서빙
장면: `Golden burst background. MOA in the center serves a tray with perfect balance; five teacups float in an arc above the tray with sparkle stars, not a single drop spilled. DOCTOR gives a thumbs up on the left, SIA claps on the right, HARU cheers behind. MOA's proud face in a circle inset top-left.`
캐릭터: MOA, DOCTOR, SIA, HARU

### `e8_jack.webp` — 빈칸 없는 완벽한 데이터셋
장면: `Mint green burst background. A big white board shows a grid table where every cell has a green check mark. SIA in the center cheers with a small proud fist, mop at her side. ABABOT dances on the left, MOA claps, FLY holds up a lightbulb. SIA's proud face in a circle inset top-left.`
캐릭터: SIA, ABABOT, MOA, FLY

### `e9_jack.webp` — 신호 해독 성공 · 새 식구 예고
장면: `A dark stage with three warm spotlights. Under each spotlight, X1, X2 and X3 wave happily as silhouettes, little stars twinkling around. HARU (bottom-left circle) and MOA (bottom-right circle) watch with sparkling eyes. A teaser feeling — 'new members are coming soon' — without any text.`
캐릭터: X1, X2, X3, HARU, MOA
