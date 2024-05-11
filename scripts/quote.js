var quotes = [
  "Hello World!",
  "This is a sentence.",
  "Programming is very interesting.",
  "JavaScript is powerful.",
  "I am running the desired code."
];


var randomIndex = Math.floor(Math.random() * sentences.length);
document.getElementById("text").innerHTML = quotes[randomIndex];
