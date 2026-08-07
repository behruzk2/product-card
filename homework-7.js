const weather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура – ${temperature} градусов по Цельсию`);
};


const SPEED_LIGHT = 299792458
function checkSpeed(speed){
  if (speed > SPEED_LIGHT){
    console.log("Сверхсветовая скорость")
  }
  else if (speed === SPEED_LIGHT){
    console.log("Скорость света")
  }
  else {
    console.log("Субсветовая скорость")
  }
};


const productName = "Iphone"
const productPrice = 850
const buyProduct = budget => {console.log(budget > productPrice 
      ? `${productName} приобретён. Спасибо за покупку!`
      : `Вам не хватает ${productPrice - budget}$, пополните баланс`)
    }

const lowBattert = 10
const chargeBattery = procent => {
  console.log(procent > lowBattert
    ? `Ваша зарядка ${procent}%, уровень хороший, можете продолжать пользоваться`
    : `Ваша зарядка ${procent} ,нужно срочно подзарядить устройство`
  )
}

let myAge = 21
let visitedPlace = "Paris"
let favoriteAthlete = "Jordan"