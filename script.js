const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

// Making sure the sprite and map are loading in properly and at the right time
const image = new Image();
image.src = "./img/Tomo Valley Map Zoom.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

image.onload = () => {
  context.drawImage(image, -450, -425);
  context.drawImage(
    playerImage,
    // Cropping the player Image
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    // Actual width and height
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
};
