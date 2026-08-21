//LVL 1. Point 2. Filter numbers from 1-10 to get values >= 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersFromFive = numbers.filter((num) => num >= 5);

//LVL 1. Point 3. Create array of strings and check if specific item exists

const ProphetMuhammadCompanions = [
  "Абу Бакр ac-Сиддик",
  "Умар ибн аль-Хаттаб",
  "Усман ибн Аффан",
  "Али ибн Абу Талиб",
];

const isExist = ProphetMuhammadCompanions.includes("Абу Хурейра");

//LVL 1. Point 4. Function to reverse array (mutates original)

const ReverseArray = (arr) => {
  return arr.reverse();
};

ReverseArray(ProphetMuhammadCompanions);
ReverseArray(numbersFromFive);

///LVL 2. Point 6 & 7. Import comments array from external file (exported in comments.js)

import { comments } from "./comments.js";

const commentsWithDotCom = comments.filter((comment) =>
  comment.email.includes(".com"),
);
console.log(commentsWithDotCom);

///LVL 2. Point 8. Update postId based on id condition: id <= 5 → postId: 2, id > 5 → postId: 1

const commentsWithUpdatedPostId = comments.map((comment) => {
  comment.postId = comment.id <= 5 ? 2 : 1;
  return comment;
});

///LVL 2. Point 9. Extract only id and name from each object (remove postId, email, body)

const commentsIdAndName = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

///LVL 2. Point 10. Add isInvalid property: true if body length > 180 characters

const commentsWithInvalidity = comments.map((comment) => {
  comment.isInvalid = comment.body.length > 180;
  return comment;
});

console.log(commentsWithInvalidity);

///LVL 3. Point 11. Get emails array using reduce and map

const commentsEmailUsingReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const commentsEmailUsingMap = comments.map((comment) => {
  return comment.email;
});

///LVL 3. Point 12. Convert emails array to string using join and toString

const commentsEmailUsingJoin = commentsEmailUsingReduce.join(" ,");

const commentsEmailUsingToString = commentsEmailUsingReduce.toString();
