# Find-base

Запуск на локальном сервере :
1) Склонировать репозиторий в папку с помощью команды git clone;
2) Зайти через консоль в папку server и прописать npm i;
3) Зайти через консоль в папку client и прописать npm i;
4) После установки пакетов переименовываем файл 'env-example' в '.env', там хранятся дефолтные настройки базы данных;
5) Далее переходим к консоль папки server и прописываем команду создания базды данных : $ npx sequelize-cli db:create ;
6) Накатываем миграции в базу : $ npx sequelize-cli db:migrate;
7) Накатываем сиды : $ npx sequelize-cli db:seed:all;
8) Запускаем сервер в той же консоли командой : $ npm run dev;
9) Переходим в папку client и в консоли пишем : $ npm start ;
10) Ждём автозапуск реакта в браузере;
11) Well Done Используем поиск);

p.s React v.18.2
