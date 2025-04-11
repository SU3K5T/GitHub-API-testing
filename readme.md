# GitHub Testing API

Тестовое задание
Node.js сервис для отслеживания популярных репозиториев на GitHub с автообновлением данных.

## Возможности

- Автоматическая синхронизация с GitHub API (раз в 60 минут)
- Ручной запуск обновления
- Поиск репозиториев по id или name
- CLI интерфейс для взаимодействия
- Хранение данных в PostgreSQL

## Используемые инструменты

- express - для http сервера
- axios - для http запросов
- pg - клиент для PostgreSQL
- sequelize — ORM для работы с базами данных
- commander - для создания CLI

## Быстрый старт

### 1. Установка зависимостей

-npm install

### 2. Создание базы данных

-psql -U пользователь -c "CREATE DATABASE github-api-testing;" (таблица repositories создается автоматически )

### 3. Запуск сервера

- node server.js

### 4.Доступные команды (cli.js)

- get <idOrName> - поулчить репозиторий по id или name
- list - получить все репозитории (10)
- sync - запустить forceSync (принудительную синхронизацию)

## Пример использования

~ node server.js

`start
Executing (default): INSERT INTO "repositories" ("id","name","stars","url","createdAt","updatedAt") VALUES (28457823,'freeCodeCamp',416173,'https://github.com/freeCodeCamp/freeCodeCamp','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(132750724,'build-your-own-x',370108,'https://github.com/codecrafters-io/build-your-own-x','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(21737465,'awesome',355555,'https://github.com/sindresorhus/awesome','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(13491895,'free-programming-books',354730,'https://github.com/EbookFoundation/free-programming-books','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(54346799,'public-apis',335404,'https://github.com/public-apis/public-apis','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(60493101,'coding-interview-university',314213,'https://github.com/jwasham/coding-interview-university','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(85077558,'developer-roadmap',313537,'https://github.com/kamranahmedse/developer-roadmap','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(83222441,'system-design-primer',296013,'https://github.com/donnemartin/system-design-primer','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(177736533,'996.ICU',270509,'https://github.com/996icu/996.ICU','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00'),(21289110,'awesome-python',240060,'https://github.com/vinta/awesome-python','2025-04-11 08:33:51.225 +00:00','2025-04-11 08:33:51.225 +00:00') ON CONFLICT ("id") DO UPDATE SET "stars"=EXCLUDED."stars" RETURNING "id","name","stars","url","createdAt","updatedAt";
Синхронизация завершена!`

~ node cli.js get 21289110

{
id: 21289110,
name: 'awesome-python',
stars: 240060,
url: 'https://api.github.com/repos/vinta/awesome-python',
createdAt: '2025-04-10T09:09:57.443Z',
updatedAt: '2025-04-10T09:09:57.443Z'
}
