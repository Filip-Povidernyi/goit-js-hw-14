let counterValue = 0;
const value = document.querySelector('#value');

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

const handleClick = (e) => {
    if (e.target === decBtn) {
        counterValue -= 1;
    } else if (e.target === incBtn) {
        counterValue += 1;
    }
    value.textContent = counterValue;
};

decBtn.addEventListener('click', handleClick);
incBtn.addEventListener('click', handleClick);
