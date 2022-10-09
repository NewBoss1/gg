const Image = ["0.jpeg", "1.png", "2.png", "3.png", "4.png", "5.png"];

const todaysImg = Image[Math.floor(Math.random() * Image.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${todaysImg}`;

document.body.appendChild(bgImg);
