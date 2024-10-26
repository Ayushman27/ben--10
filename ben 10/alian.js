var images = [
    "Alien X.avif",
    "Atomix.avif",
    "Diamondhead.avif",
    "Ampfibian.avif",
    "Clockwork.avif",
    "Gravattack.avif",
    "Feedback.avif",
    "Waybig.avif",
    "Ghostfreak.avif",
    "XLR8.avif",
    "Echo Echo.avif",
    "Chromastone.avif",
    "Humungousaur.avif",
    "Big Chill.avif"
];

// Generate a random index
var randomIndex = Math.floor(Math.random() * images.length);

// Get the random image name
var randomDiceImage = images[randomIndex];

// Construct the image source
var randomImageSource = "images/" + randomDiceImage;

// Update the first image's src
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Slice the last 5 characters to get the name without the extension
var slicedImageName = randomDiceImage.slice(0, -5); // Removes ".avif"

// Update the hero section
var hero = document.getElementById("hero");
hero.innerHTML = `<alt="${randomDiceImage}"><p>${slicedImageName}</p>`;
