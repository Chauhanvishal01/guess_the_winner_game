const opponentOne = document.getElementById("opponent_1");
const opponentTwo = document.getElementById("opponent_2");
const nextBtn = document.getElementById("next-level-btn");

const strong = [
  "../assets/strong/strong1.jpg",
  "../assets/strong/strong2.jpg",
  "../assets/strong/strong3.jpg",
  "../assets/strong/strong4.jpg",
  "../assets/strong/strong5.jpg",
];
const weak = [
  "../assets/weak/weak1.jpg",
  "../assets/weak/weak2.jpg",
  "../assets/weak/weak3.jpg",
  "../assets/weak/weak4.jpg",
  "../assets/weak/weak5.jpg",
];
let count = 0;

opponentOne.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * strong.length);
  opponentOne.src = strong[randomIndex];
  const randomIndex2 = Math.floor(Math.random() * weak.length);
  opponentTwo.src = weak[randomIndex2];
  count += 1;
});
opponentTwo.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * strong.length);
  opponentTwo.src = strong[randomIndex];
  const randomIndex2 = Math.floor(Math.random() * weak.length);
  opponentOne.src = weak[randomIndex2];
  count += 1;
});
console.log(count);
