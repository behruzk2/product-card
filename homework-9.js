import { comments } from "./comments.js";

//LVL 1. Point 2.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter((num) => num >= 5);

//LVL 1. Point 3.

const companionsProphetMuhammad = [
  "Абу Бакр ac-Сиддик",
  "Умар ибн аль-Хаттаб",
  "Усман ибн Аффан",
  "Али ибн Абу Талиб",
];

const isExist = companionsProphetMuhammad.includes("Абу Хурейра");

//LVL 1. Point 4.

const reverseArray = (arr) => {
  return arr.reverse();
};

ReverseArray(companionsProphetMuhammad);
ReverseArray(numbersFromFive);

///LVL 2. Point 6 & 7.

const commentsWithDotCom = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(commentsWithDotCom);

///LVL 2. Point 8.

const commentsWithUpdatedPostId = comments.map((comment) => {
  comment.postId = comment.id <= 5 ? 2 : 1;
  return comment;
});

///LVL 2. Point 9.

const commentsIdAndName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

///LVL 2. Point 10.

const commentsWithInvalidity = comments.map((comment) => {
  comment.isInvalid = comment.body.length > 180;
  return comment;
});

console.log(commentsWithInvalidity);

///LVL 3. Point 11.

const commentsEmailUsingReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const commentsEmailUsingMap = comments.map((comment) => {
  return comment.email;
});

///LVL 3. Point 12.

const commentsEmailUsingJoin = commentsEmailUsingReduce.join(" ,");

const commentsEmailUsingToString = commentsEmailUsingReduce.toString();
