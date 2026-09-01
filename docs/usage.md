# 7) Применение системы в реальности

## A. Соцсети (посты)

### Формат: 1080x1080 (анонс эпизода)
Сборка:
1. `Template / Social / Post-1080 / Default`
2. Вставить `Comp / Hero / CharacterLeft / Promo`
3. Подключить `UI / Plate / ShowTitle-M / Default`
4. Добавить `UI / Tag / NewEpisode / Default`

**Результат:** за 5-10 минут собирается новый пост без ручного рисования плашек.

### Формат: 1080x1920 (stories/reels cover)
Сборка:
1. `Template / Social / Story-1080x1920 / Default`
2. `Container / Media / Character / Masked`
3. `UI / Plate / Info-M / Active`

**Результат:** единый стиль для вертикального контента, быстрая серийность.

---

## B. Эфир

### Lower-third
Сборка:
1. `Template / Broadcast / LowerThird-1920x1080 / Default`
2. `Comp / Broadcast / LowerThird-M / OnAir`
3. `UI / Badge / AgeRating-6+ / Default`

**Важно:** все элементы держатся в safe-area и не выходят за эфирную зону.

### Endboard
Сборка:
1. `Template / Broadcast / Endboard-1920x1080 / Final`
2. `Comp / Broadcast / Endboard-Countdown / Final`
3. `UI / Plate / ShowTitle-L / OnAir`

**Результат:** стандартизированный финальный кадр для разных шоу.

---

## C. Key Visual

Сборка:
1. `Comp / Hero / CharacterCenter / Promo`
2. 2-3 слоя `Shape / Slime / * / Default` (разная depth-непрозрачность)
3. `Gradient / Primary / ... / Punch`
4. Главная плашка `UI / Plate / ShowTitle-L / Promo`

**Результат:** KV выглядит брендово, но собирается из библиотеки без ручной сборки с нуля.

---

## D. Промо-материалы

### Digital banner
- База из `Template / Promo / Banner-*`
- Контент в `Container / Media / Image / Framed`
- CTA через `Component / Button / Primary-L / Default`

### Print one-pager
- Используется тот же слойный принцип (gradient + slime + plate)
- Подготовка в CMYK делается на экспортном этапе, а не в master-компонентах

---

# 8) Антиошибки

## Нельзя делать
- Рисовать новые плашки поверх системы «вручную» для каждого макета.
- Растягивать slime формы без size variants.
- Смешивать show-specific стили в базовые компоненты.
- Создавать дубликаты цветов вне token/styles.
- Нарушать safe-area в эфирных шаблонах.

## Частые ошибки дизайнеров
1. **Слишком много уникальных градиентов**  
   Решение: только токенизированные `Primary/Secondary/Accent`.
2. **Переименование компонентов “как удобно”**  
   Решение: всегда `Category / Type / Variant / State`.
3. **Случайный outline stroke у мастер-форм**  
   Решение: outline только для финальных технических кейсов.
4. **Лишние эффект-слои (blur/shadow) в каждой карточке**  
   Решение: эффекты вынести в variants.
5. **Нарушение иерархии**  
   Решение: новые сущности сначала в Foundations/Core, потом в Templates.
