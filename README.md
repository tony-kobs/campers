# TravelTrucks

Вебзастосунок для компанії TravelTrucks, яка здає кемпери в оренду. Користувач обирає авто на головній сторінці, фільтрує каталог і бронює конкретний кемпер.

## Основні функції

- Головна сторінка з банером і переходом у каталог.
- Каталог кемперів із фільтрами за локацією, типом кузова, двигуном і трансмісією.
- Довантаження списку по 4 картки кнопкою Load more з урахуванням активних фільтрів.
- Сторінка кемпера в новій вкладці: опис, галерея, відгуки з п’ятизірковою шкалою і форма бронювання.
- Повідомлення про успішне або невдале бронювання.

## Стек

Next.js (App Router), TypeScript, TanStack Query, Formik, Yup, Swiper, CSS Modules.

Дані надходять з [Campers API](https://campers-api.goit.study).

## Встановлення та використання

Потрібні Node.js 20+ і npm.

```bash
npm install
npm run dev
```

Застосунок відкривається на [http://localhost:3000](http://localhost:3000).

Інші команди:

```bash
npm run lint
npm run build
npm start
```

Сторінки:

- `/` — головна
- `/catalog` — каталог
- `/catalog/[camperId]` — деталі кемпера

## Автор

Antony Kobys

Репозиторій: [github.com/tony-kobs/campers](https://github.com/tony-kobs/campers)
