# STS Kids — Figma Implementation Plan (ручная сборка)

> Цель: превратить текущую документацию в пошаговый production-план запуска библиотеки.

## 0) Порядок запуска (общий)

| Шаг | Что делаем | Артефакт на выходе | Кто ответственный |
|---|---|---|---|
| 1 | Создаем файл `STS Kids / Design System` + базовые pages | Каркас файла | Lead Designer |
| 2 | Поднимаем Foundations (цвета, градиенты, spacing, radius, типографика) | Глобальные Styles/Variables | UI Designer |
| 3 | Мигрируем slime формы и нормализуем naming | Компоненты `Shape/*` | Brand Designer |
| 4 | Собираем Core компоненты | `UI/*`, `Component/*`, `Container/*` | UI Designer |
| 5 | Собираем Composition компоненты | `Comp/*` | Motion/Broadcast Designer |
| 6 | Делаем Templates под production-форматы | `Template/*` | SMM + Broadcast Designer |
| 7 | QA + публикация библиотеки | Published Library + changelog | Design Ops |

---

## 1) Пошаговая сборка по страницам Figma

## Page `00_Cover`

### Фреймы создать
- `Intro / What inside`
- `Version / Changelog`
- `Links / Team contacts`

### Что разместить
- Карточка навигации по всем pages.
- Блок текущей версии (`v1.0.0`, дата, владелец).
- Короткие правила использования (3-5 пунктов).

### Порядок сборки
1. Создать cover layout.
2. Добавить links на Pages.
3. Добавить мини changelog и контакты.

---

## Page `01_Foundations`

### Фреймы создать
- `Colors / Solid`
- `Gradients / Primary-Secondary-Accent`
- `Typography / TV & Digital`
- `Spacing & Radius`
- `Grid / Social-16:9-9:16`
- `Motion hints / Optional`

### Что разместить
- Color styles из `tokens/colors.json`.
- Paint styles gradients из `tokens/gradients.json`.
- Типографические стили (Display, Title, Body, Caption).
- Token grid для spacing/radius.
- Базовые layout grids для 1080x1080, 1080x1920, 1920x1080.

### Порядок сборки
1. Завести Variables/Styles для цветов.
2. Завести gradient paint styles.
3. Завести text styles.
4. Добавить spacing/radius reference board.
5. Добавить grid presets.

---

## Page `02_Components/Core`

### Фреймы создать
- `Slime Shapes / Base`
- `UI Plates / Titles`
- `Cards / Show & Content`
- `Containers / Media`
- `Badges & Labels`
- `Buttons / CTA`

### Что разместить
- `Shape / Slime / ...`
- `UI / Plate / ...`, `UI / Badge / ...`, `UI / Tag / ...`
- `Component / Card / ...`, `Component / Button / ...`
- `Container / Media / ...`

### Порядок сборки
1. Сначала shapes (как фундамент визуального языка).
2. Потом UI plates + badges/tags.
3. Затем cards/containers.
4. В конце buttons и states.
5. Прогнать QA на variants/auto-layout/resizing.

---

## Page `03_Components/Compositions`

### Фреймы создать
- `Hero / KV block`
- `Show Promo / Host + plate + slime`
- `Episode Card Rows`
- `Lower-third / Broadcast`
- `Endboard / Broadcast`

### Что разместить
- `Comp / Hero / ...`
- `Comp / Broadcast / LowerThird-*`
- `Comp / Broadcast / Endboard-*`
- Серийные сетки карточек (row modules).

### Порядок сборки
1. Собрать Hero композиции.
2. Собрать broadcast blocks (safe area first).
3. Проверить, что композиции состоят только из Core/Foundations.

---

## Page `04_Templates`

### Фреймы создать
- `Social / Post 1080x1080`
- `Social / Story 1080x1920`
- `Broadcast / 1920x1080 Lower-third`
- `Broadcast / 1920x1080 Endboard`
- `Promo / Print A4 + Digital banner`

### Что разместить
- Production templates без новых стилей.
- Контентные placeholders (`Image`, `Character`, `Title`, `CTA`).
- Подсказки safe-area и export presets.

### Порядок сборки
1. Взять композиции из `03_Components/Compositions`.
2. Собрать шаблоны форматов.
3. Проверить экспорт и читаемость текста.

---

## Page `05_Showcases`

### Фреймы создать
- `KV examples`
- `Social campaign examples`
- `Broadcast package examples`

### Что разместить
- 3-5 эталонных кейсов «как правильно». 
- Примеры do/don't рядом (минимум 1 на каждый формат).

### Порядок сборки
1. Собрать best-practice примеры из Templates.
2. Зафиксировать как reference only (не редактируемый source).

---

## Page `99_Archive`

### Фреймы создать
- `Deprecated / Components`
- `Deprecated / Templates`

### Что разместить
- Старые компоненты с меткой deprecated.
- Дата вывода и альтернатива из новой системы.

### Порядок сборки
1. Перенести устаревшие блоки.
2. Добавить label: `Deprecated since vX.Y.Z`.

---

## 2) MVP scope (релиз 1 vs этап 2)

| Блок | MVP (обязательно в релиз 1) | Phase 2 (можно отложить) |
|---|---|---|
| Foundations | Brand/Neutral/Semantic colors, 6-8 gradients, spacing, radius, text styles | Расширенная motion-система и доп. темы |
| Shapes | 12-16 ключевых slime shapes (S/M/L) | Экзотические формы, seasonal packs |
| UI | ShowTitle plate (S/M/L), Info plate, Badge age rating, Tag new | Спец-плашки под отдельные шоу |
| Cards | Show card + Episode card (2 варианта) | Редкие редакционные типы карточек |
| Containers | Image/Video/Character + basic masks | Сложные multi-mask контейнеры |
| Broadcast | Lower-third M + Endboard standard | Breaking packs, countdown вариации |
| Templates | Post 1080x1080, Story 1080x1920, LT 1920x1080, Endboard 1920x1080 | Print-пакет и нестандартные баннеры |
| Docs | Naming + QA + migration + publishing checklist | Расширенные playbooks по кампаниям |

---

## 3) Migration checklist (старое -> новая система)

## 3.1 Формы (slime)

- [ ] Собрать все legacy shapes в один временный page `Migration / Intake`.
- [ ] Удалить дубликаты по визуально одинаковой геометрии.
- [ ] Проверить stroke settings (weight, cap, join).
- [ ] Создать variants по size (`S/M/L/XL`) вместо free-scale.
- [ ] Переименовать по паттерну `Shape / Slime / Family-Density-Direction / State`.
- [ ] Привязать к color/gradient styles (без локальных цветов).

## 3.2 Градиенты

- [ ] Выгрузить список старых gradients (название + hex + angle).
- [ ] Сопоставить с `Gradient/Primary|Secondary|Accent/*`.
- [ ] Удалить локальные/одноразовые градиенты из компонентов.
- [ ] Зафиксировать mapping-таблицу `old -> new`.

## 3.3 UI-элементы

- [ ] Разложить старые UI на типы: `Plate/Badge/Tag/Button/Card`.
- [ ] Привести к naming `Category/Type/Variant/State`.
- [ ] Проверить Auto Layout (padding, gap, min/max).
- [ ] Проверить constraints для 1:1 / 9:16 / 16:9.

## 3.4 Переименование legacy (шаблон)

| Старое имя | Новое имя | Комментарий |
|---|---|---|
| `blob1` | `Shape / Slime / Blob-Soft-Top / Default` | Приведен family+density+direction |
| `plate_new` | `UI / Plate / ShowTitle-M / Default` | Размер и тип зафиксированы |
| `card_final_v2` | `Component / Card / Show-MediaTop / Default` | Убраны временные суффиксы |
| `grad_orange_pink` | `Gradient / Accent / Orange-Pink / Punch` | Нормализовано к tier/hue/intensity |

## 3.5 Как не сломать stroke-объекты

- [ ] Включить `Scale strokes & effects` в master-компонентах shapes.
- [ ] Не делать outline на master до финального решения.
- [ ] Outline делать только для handoff SVG или эфирных resize-heavy кейсов.
- [ ] После каждого resize проверить caps/joins на `S`, `M`, `XL`.
- [ ] Не использовать boolean operations в инстансах.

---

## 4) QA-checklist для Figma

## 4.1 Naming QA
- [ ] Все компоненты строго в формате `Category / Type / Variant / State`.
- [ ] Нет имен с `final`, `new`, `copy`, `v2`.
- [ ] State указан в 100% компонентов.

## 4.2 Variants QA
- [ ] У каждого ключевого компонента есть `Default`.
- [ ] Variants покрывают MVP-сценарии (sizes/themes/states).
- [ ] Нет «псевдовариантов» отдельными компонентами.

## 4.3 Resizing behavior QA
- [ ] Проверен resize для 1080x1080, 1080x1920, 1920x1080.
- [ ] Text layers не ломают auto layout при длинных названиях.
- [ ] Shapes не теряют форму на минимальном и максимальном размере.

## 4.4 Styles QA
- [ ] Нет локальных цветов в компонентах.
- [ ] Нет локальных градиентов в компонентах.
- [ ] Используются только токенизированные text styles.

## 4.5 Team usability QA
- [ ] SMM-дизайнер собирает пост из шаблона <= 10 минут.
- [ ] Эфирный дизайнер собирает lower-third <= 7 минут.
- [ ] Новый дизайнер находит нужный компонент <= 30 секунд.

---

## 5) Library publishing checklist

## 5.1 Перед публикацией
- [ ] Все MVP-компоненты покрыты variants и states.
- [ ] Нет незавершенных drafts на pages 00-05.
- [ ] Компоненты из `99_Archive` не опубликованы.
- [ ] Все стили и переменные имеют финальные имена.
- [ ] Проведен QA-checklist (раздел 4) и закрыты критичные замечания.

## 5.2 Changelog (формат)

Использовать шаблон:

| Поле | Что писать |
|---|---|
| Version | `v1.0.0` |
| Date | Дата публикации |
| Added | Новые компоненты/шаблоны |
| Changed | Изменения naming/props/visual |
| Deprecated | Что уходит в `99_Archive` |
| Migration notes | Что команде нужно заменить вручную |

## 5.3 Командное внедрение
- [ ] Провести 30-минутный walkthrough по файлу (дизайн + SMM + эфир).
- [ ] Показать 3 реальных сценария: пост, lower-third, endboard.
- [ ] Выдать one-page «как собирать макет за 5 минут».
- [ ] Зафиксировать канал для фидбэка и багов библиотеки.

---

## 6) Sprint-план запуска (рекомендуемый)

| День | Фокус | Результат |
|---|---|---|
| Day 1 | Foundations + naming setup | Готовы styles/variables + правила именования |
| Day 2 | Shapes + UI core | Готовы базовые `Shape/*`, `UI/*` |
| Day 3 | Cards + containers + compositions | Готовы `Component/*`, `Container/*`, `Comp/*` |
| Day 4 | Templates + migration + QA | Готов MVP production templates |
| Day 5 | Publish + onboarding | Опубликована библиотека + changelog + презентация |
