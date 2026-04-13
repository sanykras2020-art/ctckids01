# 1) Структура Figma-файла

## Pages (порядок)
1. `00_Cover`
2. `01_Foundations`
3. `02_Components/Core`
4. `03_Components/Compositions`
5. `04_Templates`
6. `05_Showcases`
7. `99_Archive`

---

## Логика страниц и фреймов

### `00_Cover`
**Зачем:** вход в систему и навигация.

**Frames:**
- `Intro / What inside`
- `Version / Changelog`
- `Links / Team contacts`

### `01_Foundations`
**Зачем:** базовые правила, стили и токены.

**Frames:**
- `Colors / Solid`
- `Gradients / Primary-Secondary-Accent`
- `Typography / TV & Digital`
- `Spacing & Radius`
- `Grid / Social-16:9-9:16`
- `Motion hints / Optional`

### `02_Components/Core`
**Зачем:** атомарные элементы.

**Frames:**
- `Slime Shapes / Base`
- `UI Plates / Titles`
- `Cards / Show & Content`
- `Containers / Media`
- `Badges & Labels`
- `Buttons / CTA`

### `03_Components/Compositions`
**Зачем:** готовые композиционные блоки из Core.

**Frames:**
- `Hero / KV block`
- `Show Promo / Host + plate + slime`
- `Episode Card Rows`
- `Lower-third / Broadcast`
- `Endboard / Broadcast`

### `04_Templates`
**Зачем:** production-макеты под реальные форматы.

**Frames:**
- `Social / Post 1080x1080`
- `Social / Story 1080x1920`
- `Broadcast / 1920x1080 Lower-third`
- `Broadcast / 1920x1080 Endboard`
- `Promo / Print A4 + Digital banner`

### `05_Showcases`
**Зачем:** примеры «как должно выглядеть».

**Frames:**
- `KV examples`
- `Social campaign examples`
- `Broadcast package examples`

### `99_Archive`
**Зачем:** неактуальные версии и эксперименты.

**Frames:**
- `Deprecated / Components`
- `Deprecated / Templates`

---

## Иерархия системы
`Foundations -> Core Components -> Composition Components -> Templates -> Showcases`

**Правило:**
- Foundations ничего не наследуют.
- Core использует только Foundations.
- Compositions используют Core + Foundations.
- Templates используют Compositions + Core.
- Showcases — только демонстрация (без новых сущностей).
