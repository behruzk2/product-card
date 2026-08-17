// Пункт 3. Создал объект на основе своих данных

const userProfile = {
  firstName: "Bekhruz",
  lastName: "Kakharov",
  age: 23,
  address: { country: "USA", city: "Orlando", zipCode: 32822 },
  email: "behruzk2018@gmail.com",
  citizenship: "Kazakhstan",
  nationality: "Uzbek",
  job: "Naz's halal food company",
  jobTitle: "Crew member",
  relationship: "Married",
};

// Пункт 4. Создал объект ,который хранит данные об автомобиле и добавил отдельной строкой владельца из объекта с пункта 3

const carDetails = {
  brand: "BMW",
  model: "M8 Grand Coupe",
  year: 2025,
  color: "#22CE83",
  transmission: "8AT M Steptronic",
};

carDetails.carOwner = userProfile;

// Пункт 5. Написал функцию, которая добавляет maxSpeed к объекту из пункта 4, если его нет
const addMaxSpeed = (carDetails) => {
  if (!carDetails.hasOwnProperty("maxSpeed")) {
    carDetails.maxSpeed = 250 + " km/h";
  }
};

// Пункт 6.Написал функцию, которое выводит значение свойство объекта

const showObjectKey = (obj, key) => {
  console.log(obj[key]);
};

//Пункт 7. Создал массив, который содержит названия продуктов

const productsName = ["Apple", "Strawberry", "Banana", "Blueberry", "Mango"];

//Пункт 8. Создал массив из объектов книг и отдельной строкой добавил еще один объект книгу

const books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    coverColor: "#FF0000",
    genre: "Fantasy",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    coverColor: "#0f0f0f",
    genre: "Dystopian Fiction",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    coverColor: "#0f0f0f",
    genre: "Fantasy",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    coverColor: "#FFA500",
    genre: "Science Fiction",
  },
];

books.push({
  title: "Fight Club",
  author: "Chuck Palahniuk",
  year: 1996,
  coverColor: "#0f0f0f",
  genre: "Psychological Fiction",
});

// Пункт 9. Создал еще один массив, из объектов книг, с определенной вселенной и объеденил с массивом из пункта 8

const harryPotterBooks = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    year: 1998,
    coverColor: "#006400",
    genre: "Fantasy",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 1999,
    coverColor: "#1E90FF",
    genre: "Fantasy",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    year: 2000,
    coverColor: "#FFD700",
    genre: "Fantasy",
  },
];

const allBooks = [...books, ...harryPotterBooks];

// Пункт 10. Написал функцию,которая добавляет в массив из пункта 9 новое свойство "isRare" и его значение в каждый объект

const booksWithRarity = allBooks.map((book) => {
  if (book.year > 2000) {
    book.isRare = true;
  } else {
    book.isRare = false;
  }
  return book;
});
