![Арт](https://i.postimg.cc/NjFpDfBZ/art-ru.png)

![GitHub Created At](https://img.shields.io/github/created-at/id-andyyy/psy-tatyanao?style=flat&color=%23AA3FF6)
![Lines Of Code](https://tokei.rs/b1/github/id-andyyy/psy-tatyanao?style=flat&category=code&color=%23EC664A)
![Top Language](https://img.shields.io/github/languages/top/id-andyyy/psy-tatyanao?style=flat)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fid-andyyy.github.io%2Fpsy-tatyanao%2F&style=flat)

# Лендинг психолога Татьяны Обрезковой&nbsp;&#128161;

Сайт-визитка для консультирующего психолога Татьяны Обрезковой&nbsp;&#128105;&#8205;&#9877;&#65039;. Сайт создан с применением инструмента Gulp.&nbsp;&#129380;

## Описание

На сайте представлены разделы для ознакомления клиента с услугами психолога: краткая информация, темы, с которыми можно обращаться, информация об образовании специалиста, цены и условия, часто задаваемые вопросы и ссылки на соцсети. Также клиент может оставить заявку для получения консультации.

Текст разделов временно заменен на шаблонный.

## Демонстрация

Посетите [сайт](https://id-andyyy.github.io/psy-tatyanao/)&nbsp;&#128071;

[![Превью](https://i.postimg.cc/CxyD9hgR/preview.png)](https://id-andyyy.github.io/psy-tatyanao/)

## Технологии и инструменты

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=white&color=yellow)
![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white&color=%23C93CD6)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white&color=#6CeA8C)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white&color=f14e32)

Особенности разработки:

- Используется инструмент Gulp
- Задачи разбиты на два файла - выполняемые в режиме разработки и выполняемые для сборки итогового проекта
- Используется особый прием для вычисления адаптивных величин ([смотреть код](https://gist.github.com/id-andyyy/92bffcaa37c60c395324fe26b1a518d6))
- Адаптивная вёрстка подстраивается под любое устройство
- Все элементы ввода (ползунки, чекбоксы, выбор цвета) выглядят одинаково в разных браузерах
- Прописана обработка ошибок при загрузке изображения пользователем
- Анимации при наведении на различные элементы
- Фоновые декоративные элементы
- БЭМ методология
- Чистый JavaScript (код разбит на функции)
- Настроены мета-теги

## Реализация функционала

Использованы следующие плагины для Gulp:

- плагин `gulp-file-include` собирает единый HTML документ, используя шаблоны и данные из JSON файлов
- плагин `gulp-sass` преобразовывает SCSS в CSS код
- плагины по работе с изображениями минифицируют, сжимают и преобразовывают картинки в формат `.webp` для более быстрой загрузки
- плагин `gulp-svg-sprite` помещает все svg иконки в один спрайт для более удобного доступа
- плагины для работы с JS кодом
- плагины для минификации HTML, CSS и JS кода
- и ещё более 15 других плагинов (подробнее в [dev.js](./gulp/dev.js) и [docs.js](./gulp/docs.js))

## Обратная связь

Буду признателен, если вы поставите звезду&nbsp;&#11088;. Если вы нашли баг или у вас есть предложения по улучшению, используйте раздел [Issues](https://github.com/id-andyyy/psy-tatyanao/issues).

## Благодарности

Дизайн и макет сайта [strawberry2892&nbsp;&#127827;](https://github.com/strawberry2892).

Читать на [английском&nbsp;&#127468;&#127463;](README.md)