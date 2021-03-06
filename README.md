# Спринт 11 - работа с webpack

## Введение

Ссылка на готовый проект: https://marmar051.github.io/sprint11

## В этом проекте:
1. Выполнена сборка build и dev.
2. Настроено хеширование CSS и JS-файлов.
3. В корне проекта добавлен файл с именем .nojekyll, необходимый для корректной работы БЭМ в GitHub.
4. Автоматическое обновление страницы проекта при сохранении файлов.
5. Webpack настроен для работы с изображениями и их оптимизации.
6. Настроено два режима сборки: development и production.
7. Настроена работа со стилями в зависимости от сборки.
8. Код разбит на модули, используются директивы import/export


## Инструкция по работе с проектом
#### На данном этапе разработки этого проекта реализованы две главные функции:
1. Добавление карточки: по нажатию на кнопку "+" открывается Popup в котором необходимо заполнить поля "Название" и "URL картинки", эти поля проходят соответствующую валидацию на длинну строки и ее тип, исходя из этого кнопка Sabmit становится активной или неактивной. В случае успешной валидации заполнения полей, при нажатии на кнопку Sabmit данные отправляются на сервер с помощью API запроса, в случае получение положительного ответа - карточка с вашими данными добавляется в DOM.


2. Редактирование профиля: на странице имеются поля с данными "Имя" и "профессия", которые можно изменять. При нажатии на кнопку "Edit" открывается Popup в котором поля заполнены исходя из того какая информация (Имя и профессия) отображается на данный момент на странице. Так же эти поля проходят валидацию на длинну строки, исходя из этого кнопка Submit становитс активной или неактивной. После изменения информации в полях при нажатии на кнопку Submit данные отправляются на сервер с помощью API запроса, в случае получения положительного ответа - обновленные данные появляются на странице.


3. Увеличение изображения: на странице осуществлен функционал увеличения изображения добавленой карточки. При нажатии на само изображение, оно открывается в Popup.

4. Удаление карточки: при наведении курсора на карточку, появляется активная иконка со значком корзины, при клике по которой карточка удаляется.

5. Лайки: всем карточкам можно выставлять лайк, при клике на иконку со знаком сердечка. Либо при повторном клике - лайк снимать.

Для корректной работы нужен токен API

## Подготовка к работе с проектом

1. Проверьте наличие установленного node.js и npm
2. Скопируйте проект на компьютер: git clone https://github.com/marmar051/sprint11
3. Установите зависимости: npm install

## Работа с проектом

1. Для локальной разработки используйте: npm run dev 
2. Для сборки production версии: npm run build 
3. Для деплоя на сервисе GitHub Pages используйте: npm run deploy
