# Проект «Калькулятор»

Расчёт доходности открытия офиса турагентства.

## Локальная разработка

```sh
npm install
npm run dev
```

Тесты запускаются командой `npm test`, production-сборка — `npm run build`.

## Публикация

После `npm run build` загрузите `dist/calculator.js` и `dist/calculator.css` в
`/content/lib/franch-coral-ru/calc/` на CDN. Имена входных файлов стабильны,
поэтому обновлять пути в `support/more-features.js` после каждой сборки не нужно.
