# s. web os — web

Frontend-часть проекта «s. web os»: React + TypeScript + Vite + Tailwind CSS.

## Запуск

```bash
npm install
npm run dev
```

## Команды

- `npm run dev` — dev-сервер
- `npm run build` — сборка в `dist/`
- `npm run lint` — oxlint
- `npm run preview` — предпросмотр собранного `dist/`

## Модульная система плагинов

Приложение загружает плагины в рантайме из `dist/plugins` (в dev — из `public/plugins`):

- `public/plugins/index.json` — список плагинов
- каждый плагин — ESM-модуль, экспортирующий `register(api)`, который возвращает
  `{ id, name, routes: [{ path, name, icon, element }] }`
- каждый маршрут даёт кнопку в сайдбаре (ссылку на `path`) и страницу по этому пути

Исходники плагинов и их сборка — в отдельном проекте `web-plugin-builder`.

## Структура

```
src/
  layouts/AppLayout.tsx   # шапка + сайдбар + контент
  pages/                  # страницы-превью стилей
  plugins/                # рантайм-лоадер и контекст плагинов
  styles/                 # дизайн-система (кнопки, поля, рамки, текст)
public/
  plugins/                # собранные плагины + манифест
  favicon.svg
```