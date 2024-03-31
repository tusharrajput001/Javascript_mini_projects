const audio1 = new Audio("./sounds/s1.mp3");
const audio2 = new Audio("./sounds/s2.mp3");
const audio3 = new Audio("./sounds/s3.mp3");
const audio4 = new Audio("./sounds/s4.mp3");
const audio5 = new Audio("./sounds/s5.mp3");
const audio6 = new Audio("./sounds/s6.mp3");

const ins1 = new Audio("./sounds/bass.wav");
const ins2 = new Audio("./sounds/bassh.wav");
const ins3 = new Audio("./sounds/elec.wav");
const ins4 = new Audio("./sounds/metal.wav");
const ins5 = new Audio("./sounds/pop.wav");
const ins6 = new Audio("./sounds/flute.wav");
const ins7 = new Audio("./sounds/tabla.wav");




const bt1 = document.querySelectorAll("#btn1");

bt1.forEach((button) => {
  button.addEventListener("click", () => {
    audio1.play();
  });
});

const bt2 = document.querySelectorAll("#btn2");

bt2.forEach((button) => {
  button.addEventListener("click", () => {
    audio2.play();
  });
});

const bt3 = document.querySelectorAll("#btn3");

bt3.forEach((button) => {
  button.addEventListener("click", () => {
    audio3.play();
  });
});

const bt4 = document.querySelectorAll("#btn4");

bt4.forEach((button) => {
  button.addEventListener("click", () => {
    audio4.play();
  });
});

const bt5 = document.querySelectorAll("#btn5");

bt5.forEach((button) => {
  button.addEventListener("click", () => {
    audio5.play();
  });
});

const bt6 = document.querySelectorAll("#btn6");

bt6.forEach((button) => {
  button.addEventListener("click", () => {
    audio6.play();
  });
});


const bt7 = document.querySelectorAll("#in1");

bt7.forEach((button) => {
  button.addEventListener("click", () => {
    ins1.play();
  });
});


const bt8 = document.querySelectorAll("#in2");

bt8.forEach((button) => {
  button.addEventListener("click", () => {
    ins2.play();
  });
});



const bt9 = document.querySelectorAll("#in3");

bt9.forEach((button) => {
  button.addEventListener("click", () => {
    ins3.play();
  });
});




const bt10 = document.querySelectorAll("#in4");

bt10.forEach((button) => {
  button.addEventListener("click", () => {
    ins4.play();
  });
});




const bt11 = document.querySelectorAll("#in4");

bt11.forEach((button) => {
  button.addEventListener("click", () => {
    ins4.play();
  });
});






const bt12 = document.querySelectorAll("#in5");

bt12.forEach((button) => {
  button.addEventListener("click", () => {
    ins5.play();
  });
});



const bt13 = document.querySelectorAll("#in6");

bt13.forEach((button) => {
  button.addEventListener("click", () => {
    ins6.play();
  });
});




const bt14 = document.querySelectorAll("#in7");

bt14.forEach((button) => {
  button.addEventListener("click", () => {
    ins7.play();
  });
});


