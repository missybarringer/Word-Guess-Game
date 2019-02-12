var farmAnimals = ["donkey","horse","alpaca","chicken","goat"];
pictures();
function pictures() {
pictures[0] = "assets/images/donkey.jpg";
pictures[1] = "assets/picturess/horse.jpg";
pictures[2] = "assets/picturess/alpaca.jpg";
pictures[3] = "assets/picturess/chicken.jpg";
pictures[4] = "assets/images/goat.jpg";
}
var currentWord = farmAnimals[Math.floor(Math.random() * farmAnimals.length)].toUpperCase();
console.log(pictures.indexOf(currentWord));