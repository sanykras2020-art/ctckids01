import { readFile } from "node:fs/promises";

const pages = ["index.html", "asia/index.html"];
const textArrow = /[↗↖↘↙→←↑↓]/u;
const failures = [];

for (const page of pages) {
  const html = await readFile(new URL(`../${page}`, import.meta.url), "utf8");

  if (textArrow.test(html)) {
    failures.push(`${page}: найдена шрифтовая стрелка вместо векторной иконки`);
  }

  const externalLinks = html.match(/<a\b[^>]*target=["']_blank["'][^>]*>[\s\S]*?<\/a>/gi) ?? [];
  for (const link of externalLinks) {
    if (!/\bicon-arrow\b/.test(link)) {
      failures.push(`${page}: внешняя ссылка без icon-arrow`);
    }
  }

  const iconTags = html.match(/<span\b[^>]*\bicon-arrow\b[^>]*>/gi) ?? [];
  if (iconTags.length === 0) {
    failures.push(`${page}: не найдены векторные иконки стрелок`);
  }
  for (const tag of iconTags) {
    if (!/aria-hidden=["']true["']/i.test(tag)) {
      failures.push(`${page}: декоративная стрелка не скрыта от скринридера`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`OK: ${pages.length} страницы используют только единые векторные стрелки`);
}
