
import originalMas from './data.js';
import masToObj from './objectlist.js';
import { blackList, blackListSalary, blackListPets } from './blacklist.js';
import createCard from './create_htmlBox.js';
import taggingCard from './tagging_html_card.js';


// создание из масива  - масив объектов
const obj = masToObj(originalMas)

// вызов чёрного списка
blackList(obj);

// вызов чёрного списка по валюте
blackListSalary(obj)

// вызов чёрного списка по питомцам
blackListPets(obj)

// вызов функции отрисовки карточек
createCard(obj);
// вызов функции которая отмечает юзеров из черного списка
taggingCard(obj);