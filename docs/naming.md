# 2) Naming system

Формат для всего:  
`Category / Type / Variant / State`

Где:
- **Category** — крупный домен (`Shape`, `UI`, `Container`, `Comp`, `Template`)
- **Type** — назначение
- **Variant** — визуальная/структурная версия
- **State** — состояние (`Default`, `Hover`, `Active`, `Disabled`, `OnAir`, и т.д.)

---

## Компоненты

### Общий паттерн
`Component / <Type> / <Variant> / <State>`

Примеры:
- `Component / Button / Primary-L / Default`
- `Component / Card / Show-MediaTop / Hover`
- `Component / Plate / ShowTitle-Fill / Default`

## Формы (slime)

### Паттерн
`Shape / Slime / <Family>-<Density>-<Direction> / <State>`

Где:
- **Family**: `Blob`, `Splash`, `Wave`, `Drop`
- **Density**: `Soft`, `Medium`, `Bold`
- **Direction**: `Top`, `Bottom`, `Left`, `Right`, `Center`

Примеры:
- `Shape / Slime / Blob-Soft-Top / Default`
- `Shape / Slime / Splash-Bold-Left / Default`
- `Shape / Slime / Wave-Medium-Bottom / Animated`

## Градиенты

### Паттерн (style name)
`Gradient / <Tier> / <HuePair> / <Intensity>`

Где:
- **Tier**: `Primary`, `Secondary`, `Accent`
- **HuePair**: `Yellow-Orange`, `Blue-Purple`, `Lime-Cyan`
- **Intensity**: `Soft`, `Normal`, `Punch`

Примеры:
- `Gradient / Primary / Yellow-Orange / Normal`
- `Gradient / Secondary / Blue-Purple / Soft`
- `Gradient / Accent / Lime-Cyan / Punch`

## UI элементы

### Паттерн
`UI / <Type> / <Variant> / <State>`

Типы:
- `Plate`
- `Badge`
- `Tag`
- `Counter`
- `Ticker`

Примеры:
- `UI / Plate / ShowTitle-L / Default`
- `UI / Badge / AgeRating-6+ / Default`
- `UI / Tag / NewEpisode / Default`

---

## Правила масштабирования
- Не добавлять брендовые названия шоу в имена базовых компонентов.
- Размер зашивается в `Variant`: `S/M/L/XL`.
- Тон темы зашивается в Variant, если влияет на геометрию: `Fill`, `Outline`, `Glass`.
- State обязателен, даже если пока только `Default`.
