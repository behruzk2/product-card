// POINT 1-3 & 5

import { productCards } from "./products-data.js";

const productCardTemplate = document.querySelector("#productCard-template");
const productCardsList = document.querySelector("#productCards__list");

function getUserCount() {
  while (true) {
    const howManyProductCards = prompt(
      "Сколько карточек отобразить? От 1 до 5",
    );
    const count = Number(howManyProductCards);

    if (count >= 1 && count <= 5 && !isNaN(count)) {
      return count;
    }

    alert("Ошибка! Введи число от 1 до 5.");
  }
}

function renderProductCards(products, count) {
  productCardsList.innerHTML = "";

  const productsToRender = products.slice(0, count);

  productsToRender.forEach(
    ({ image, skinType, name, description, ingredients, price, currency }) => {
      const productCardClone = productCardTemplate.content.cloneNode(true);

      productCardClone.querySelector(".product__image").src =
        `/images/${image}.png`;
      productCardClone.querySelector(".product__image").alt = name;
      productCardClone.querySelector(".product__skin-type").textContent =
        skinType;
      productCardClone.querySelector(".product__name").textContent = name;
      productCardClone.querySelector(".product__description").textContent =
        description;
      productCardClone.querySelector(".product__price-value").textContent =
        `${price} ${currency}`;

      const ingredientsList = productCardClone.querySelector(
        ".product__ingredients",
      );
      ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.className = "product__ingredient";
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      productCardsList.appendChild(productCardClone);
    },
  );
}

const count = getUserCount();
renderProductCards(productCards, count);

// POINT 4

const getDescriptionOfProduct = (products) => {
  return products.reduce((acc, { name, description }) => {
    acc.push({ [name]: description });
    return acc;
  }, []);
};
const result = getDescriptionOfProduct(productCards);
console.log(result);
