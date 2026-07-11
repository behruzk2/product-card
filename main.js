// Пункт 2: Перекрашиваю только первую карточку
const cardNum1 = document.querySelector('.product');
const changeColorCardBut = document.querySelector('#changeFirstCard');
const firstCardColor = '#be0d0d';

changeColorCardBut.addEventListener('click', () => {
    cardNum1.style.backgroundColor = firstCardColor;
});

// Пункт 3: Перекрашиваю все карточки
const allCards = document.querySelectorAll('.product');
const changeColorCardsBut = document.querySelector('#changeAllCards');
const allCardsColor = '#0dc735';

changeColorCardsBut.addEventListener('click', () => {
    allCards.forEach((card) => {
        card.style.backgroundColor = allCardsColor;
    });
});

// Пункт 4: Открытваю Google
const openGoogle = document.querySelector('#openGoogle');

openGoogle.addEventListener('click', () => {
    window.open('https://www.google.com/');
});

// Пункт 5: Вывожу в консоль и alert 
const outputConsoleLog = document.querySelector('#showConsoleLog');

outputConsoleLog.addEventListener('click', () => {
    outPutConsoleLog('Привет это мое ДЗ');
});

function outPutConsoleLog(message) {
    alert('ДЗ №6');
    console.log(message);
}

// ПУНКТ 6: Вывожу заголовок в консоль при наведении
const head = document.querySelector('.products__title');

head.addEventListener('mouseenter', () => {
    console.log(head.textContent);
});

// Пункт 7: Кнопка с переключением цвета через classList.toggle
const changeColorButton = document.querySelector('#toggleButtonColor');

changeColorButton.addEventListener('click', () => {
    changeColorButton.classList.toggle('button__red');
});