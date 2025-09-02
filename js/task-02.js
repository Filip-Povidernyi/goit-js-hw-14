const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const content = ingredients.map(ingred =>
  `<li class="item">${ingred}</li>`
);
list.insertAdjacentHTML("beforeend", content.join(''));

// OR

// const list = document.querySelector('#ingredients');
// const content = [];
// for (let ingredient of ingredients) {
//   let elem = document.createElement("li");
//   elem.classList.add('item');
//   elem.textContent = ingredient;
//   content.push(elem);
// };
// list.append(...content);