const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
  let elem = document.createElement("li");
  elem.classList.add('item');
  elem.textContent = ingredient;
  list.append(elem);
};
