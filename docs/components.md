# 3) Component system

## A. Slime Shapes

### Компоненты
- `Shape / Slime / Blob-* / Default`
- `Shape / Slime / Splash-* / Default`
- `Shape / Slime / Wave-* / Default`
- `Shape / Slime / Drop-* / Default`

### Variants
- `Family`: Blob/Splash/Wave/Drop
- `Density`: Soft/Medium/Bold
- `Direction`: Top/Bottom/Left/Right/Center
- `Size`: S/M/L/XL
- `Theme`: Primary/Secondary/Accent

### Свойства
- `size`
- `colorTheme`
- `flipH` (boolean)
- `flipV` (boolean)
- `opacityLevel` (100/80/60)

---

## B. UI-плашки

### 1) Название шоу
`UI / Plate / ShowTitle-{S|M|L} / {Default|OnAir|Promo}`

**Variants:**
- Fill: `Fill`, `Outline`, `Glass`
- Corners: `Round`, `Organic`

**Props:**
- `size`
- `style`
- `iconSlot` (on/off)
- `subtitle` (on/off)

### 2) Инфо-плашки
`UI / Plate / Info-{S|M|L} / {Default|Active}`

**Props:**
- `leadingIcon` (on/off)
- `trailingArrow` (on/off)
- `density` (compact/regular)

---

## C. Карточки

### 1) Show card
`Component / Card / Show-{PosterTop|MediaTop} / {Default|Hover|Pressed}`

**Props:**
- `aspect` (1:1, 4:5, 16:9)
- `badge` (on/off)
- `progress` (on/off)
- `metaRows` (1/2/3)

### 2) Episode card
`Component / Card / Episode-{Compact|Full} / {Default|Hover}`

**Props:**
- `thumbnail`
- `duration`
- `locked` (on/off)

---

## D. Контейнеры под контент

`Container / Media / {Image|Video|Character} / {Default|Framed|Masked}`

**Props:**
- `ratio` (1:1, 3:4, 16:9, 9:16)
- `padding` (none/s/m/l)
- `overlay` (none/dim/gradient)

---

## E. Композиционные блоки

### 1) Hero block
`Comp / Hero / {CharacterLeft|CharacterCenter|CharacterRight} / {Default|Promo}`

**Props:**
- `titleRows` (1..3)
- `ctaCount` (0..2)
- `bgIntensity` (soft/normal/punch)

### 2) Broadcast lower-third
`Comp / Broadcast / LowerThird-{S|M|L} / {Default|Breaking|OnAir}`

**Props:**
- `safeAreaMode` (on/off)
- `ticker` (on/off)
- `icon` (on/off)

### 3) Endboard
`Comp / Broadcast / Endboard-{Standard|Split|Countdown} / {Default|Final}`

**Props:**
- `nextShow` (on/off)
- `timeBlock` (on/off)
- `qrBlock` (on/off)

---

# 5) Работа с формами (stroke-based slime)

## Перенос в Figma
1. Импортируй вектор с исходным stroke.
2. Проверь `Scale strokes & effects` для компонента (включено для master).
3. Добавь размерные variants (S/M/L/XL) вручную — не только scale.

## Когда делать Outline Stroke
**Outline нужен, если:**
- форма идет в эфирный шаблон с частым ресайзом;
- форма уходит в handoff разработке как конечный SVG;
- есть сложные кастомные caps/joins, которые могут «плыть».

**Не делать Outline, если:**
- форма остается редактируемым мастер-ассетом внутри библиотеки;
- нужно быстро менять толщину/стиль stroke.

## Как избежать поломки при масштабировании
- Используй size variants вместо свободного растягивания.
- Ограничь минимальный размер (`min width/height`) для каждой формы.
- Для organic форм фиксируй ключевые узлы (не auto smooth everywhere).
- Не использовать boolean operations на лету в инстансах — только в мастере.
- Проверяй формы на 3 контрольных размерах: `S`, `M`, `XL`.

---

# 4) Color & Gradient system

## Группы
- **Primary** — главный брендовый тон, для hero и ключевых плашек.
- **Secondary** — поддерживающие фоны, вторичные блоки и карточки.
- **Accent** — акценты CTA, стикеры, бейджи, спец-события.

## Правила применения
- На одном экране/посте: 1 Primary + 1 Secondary + до 1 Accent.
- Не ставить два Punch-градиента рядом в равном визуальном весе.
- Текст поверх яркого градиента — только `text-inverse` (#FFFFFF) с проверкой контраста.
- Для эфирных lower-third использовать менее агрессивные `Soft/Normal`.

## Хранение в Figma Styles
- Color Styles:
  - `Color/Brand/*`
  - `Color/Neutral/*`
  - `Color/Semantic/*`
- Paint Styles (градиенты):
  - `Gradient/Primary/*`
  - `Gradient/Secondary/*`
  - `Gradient/Accent/*`

## Связь с токенами
- Источник истины: `tokens/colors.json`, `tokens/gradients.json`.
- Имена style в Figma повторяют токен-ветки 1:1.
- Любой новый цвет сначала добавляется в токены, потом в style.
