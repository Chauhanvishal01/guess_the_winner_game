
const opponentOne = document.getElementById("opponent_1");
const opponentTwo = document.getElementById("opponent_2");

const images = [
  "../assets/strong/strong1.jpg",
  "../assets/strong/strong2.jpg",
  "../assets/strong/strong3.jpg",
  "../assets/strong/strong4.jpg",
  "../assets/strong/strong5.jpg",
];
const weaks = [
  "../assets/weak/weak1.jpg",
  "../assets/weak/weak2.jpg",
  "../assets/weak/weak3.jpg",
  "../assets/weak/weak4.jpg",
  "../assets/weak/weak5.jpg",
];

opponentOne.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  opponentOne.src = images[randomIndex];
  const randomIndex2 = Math.floor(Math.random() * weaks.length);
  opponentTwo.src = weaks[randomIndex2];
});
opponentTwo.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  opponentTwo.src = images[randomIndex];
  const randomIndex2 = Math.floor(Math.random() * weaks.length);
  opponentOne.src = weaks[randomIndex2];
});
