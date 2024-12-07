![Art](https://i.postimg.cc/m28m7FfQ/art.png)

![GitHub Created At](https://img.shields.io/github/created-at/id-andyyy/psy-tatyanao?style=flat&color=%23AA3FF6)
![Lines Of Code](https://tokei.rs/b1/github/id-andyyy/psy-tatyanao?style=flat&category=code&color=%23EC664A)
![Top Language](https://img.shields.io/github/languages/top/id-andyyy/psy-tatyanao?style=flat)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fid-andyyy.github.io%2Fpsy-tatyanao%2F&style=flat)

# Psychologist Tatyana Obrezkova. Landing Page&nbsp;&#128161;

Business card website for consulting psychologist Tatyana Obrezkova&nbsp;&#128105;&#8205;&#9877;&#65039;. The site was created using the Gulp tool.&nbsp;&#129380;

## Description

The site presents sections for familiarizing clients with the psychologist's services: brief information, topics that can be addressed, information about the specialist's education, prices and conditions, frequently asked questions, and social media links. Clients can also submit a request for consultation.

The section texts are temporarily replaced with placeholder content.

## Demo

Visit the [website](https://id-andyyy.github.io/psy-tatyanao/)&nbsp;&#128071;

[![Preview](https://i.postimg.cc/CxyD9hgR/preview.png)](https://id-andyyy.github.io/psy-tatyanao/)

## Technologies and Tools

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=white&color=yellow)
![Gulp](https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white&color=%23C93CD6)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white&color=#6CeA8C)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white&color=f14e32)

Development features:

- Uses Gulp tool
- Tasks are split into two files - development mode tasks and final project build tasks
- Uses a special technique for calculating adaptive values ([view code](https://gist.github.com/id-andyyy/92bffcaa37c60c395324fe26b1a518d6))
- Responsive layout adapts to any device
- All input elements (sliders, checkboxes, color picker) look the same across different browsers
- Error handling for user image uploads
- Hover animations on various elements
- Background decorative elements
- BEM methodology
- Pure JavaScript (code split into functions)
- Meta tags configured

## Functionality Implementation

The following Gulp plugins were used:

- `gulp-file-include` plugin builds a single HTML document using templates and data from JSON files
- `gulp-sass` plugin converts SCSS to CSS code
- Image processing plugins minify, compress and convert images to `.webp` format for faster loading
- `gulp-svg-sprite` plugin combines all svg icons into one sprite for easier access
- Plugins for working with JS code
- Plugins for HTML, CSS and JS code minification
- And more than 15 other plugins (details in [dev.js](./gulp/dev.js) and [docs.js](./gulp/docs.js))

## Feedback

I would appreciate if you could give a star&nbsp;&#11088;. If you found a bug or have suggestions for improvement, please use the [Issues](https://github.com/id-andyyy/psy-tatyanao/issues) section.

## Acknowledgments

Website design and layout by [strawberry2892&nbsp;&#127827;](https://github.com/strawberry2892).

Read in [Russian&nbsp;&#127479;&#127482;](README-ru.md)