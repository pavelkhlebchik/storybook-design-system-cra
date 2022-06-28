# Библиотека компонентов Платформа ОФД (Storybook + React(TypeScript). Based on Create-React-App)

Представляет собой обычную библиотеку компонентов, только с GUI в виде Storybook'a
Документация по написанию сториз - https://storybook.js.org/docs/react/writing-stories/introduction (TS)

## Как установить библиотеку компонентов?

### `{npm install git+ssh://git@ofd-git00.ev.local:pofd-front/storybook.git}`

В `node_modules` добавляется пакет `ofd-storybook-cl` оттуда же и берём импорты

## Как использовать библиотеку компонентов?

К примеру:

`import { Button } from 'ofd-storybook-cl/dist';`

В папке `dist` у нас лежат транпиленные на Babel 8+ наши `.tsx` компоненты и `index.js` (точка входа откуда всё импортируется);

## Как посмотреть библиотеку компонентов через Storybook?

### `npm run storybook`

На `http://localhost:6006/` поднимается приложение, либо можно на любом другом порту, если установить его в package.json

## Как получить статический Storybook?

### `npm run build-storybook`

## Подготовка библиотеки компонентов

### `npm prepare`

Перекомпилит последнюю версию которая лежит в `dist`.
Данная команда _срабатывает автоматически_ при установке пакета

## Проверка компиляции библиотеки компонентов

### `npm run dist`

Собирает всё в `dist`.
Из этой команды состоит `prepare`
Используется чтобы, к примеру, протестить компиляцию компонента, без установки зависимости в другом репозитории.

## Работа в Библиотеке.

!ИМПОРТЫ В `index.tsx` КОМПОНЕНТОВ ПИШЕМ С РАШРИРЕНИЕМ `.js`!
не смотря что они у нас `.tsx`! Так нужно для Babel. Потому что в dist мы обращаемся к `.js`

В остальном пишем код в соответвии с код-стайлом и линтером:
https://confluence.evotor.ru/display/EO/javaScript+codestyle - JS
https://confluence.evotor.ru/display/EO/React+codestyle - React
https://confluence.evotor.ru/display/EO/Typescript+codestyle - Typescript
