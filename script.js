//1
const fruits = ["apple", " banana", "pure"];

function randomFruit(fruits) {
  const randN = Math.floor(Math.random() * fruits.length);
  return fruits[randN];
}
console.log(randomFruit(fruits));

//2

// const weather = prompt("how is the weather today");

function weatherScore(weather) {
  let score;

  if (weather === " rainy") {
    score = 1;
  } else if (weather === "sunny") {
    score = -1;
  } else {
    score = 0;
  }
  return score;
}
console.log(weatherScore());

//3

// const weather1 = prompt("how is weathers today");



function weatherScore(weather,weather1) {
  let score;

  if (weather === "rainy" && weather1==='overcast') {
    score = 2;
  } else if (weather === "sunny") {
    score = -1;
  } else {
    score = 0;
  }
  return score;
}
console.log(weatherScore('rainy','overcast'));

