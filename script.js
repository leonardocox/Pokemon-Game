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

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }
  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: -450,
    y: -425,
  },
  image: image,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
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

  if (keys.w.pressed && lastKey === "w") background.position.y += 3;
  else if (keys.a.pressed && lastKey === "a") background.position.x += 3;
  else if (keys.s.pressed && lastKey === "s") background.position.y -= 3;
  else if (keys.d.pressed && lastKey === "d") background.position.x -= 3;
}
animate();

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;

    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;

    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;

    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;

    case "a":
      keys.a.pressed = false;
      break;

    case "s":
      keys.s.pressed = false;
      break;

    case "d":
      keys.d.pressed = false;
      break;
  }
});
