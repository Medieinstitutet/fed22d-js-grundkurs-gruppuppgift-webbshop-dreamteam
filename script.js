// funktion för minus plus munkar 

const minus = document.querySelector('#subtract');
const plus = document.querySelector('#add');
const currentCount = document.querySelector ('#currentCount');

minus.addEventListener('click', subtract);
plus.addEventListener('click', add);

function subtract() {
    currentCount.value -= 1;
}

function add() {
    currentCount.value = Number(currentCount.value) + 1;
}

// slideshow

// ****************************************************************************************************
// -------------------------------------------------- DECLARE VARIABLES -------------------------------
// ****************************************************************************************************
const images = [
  {
    url: 'images/chocolate-sprinkle-1.jpg',
    alt: 'Pile of differently colored donuts',
  },
  {
    url: 'assets/birgith-roosipuu-eCmSe8-KHOw-unsplash.jpg',
    alt: 'Half-eaten donut on yellow background',
  },
  {
    url: 'assets/fahim-mohammed-EumgKI11Hns-unsplash.jpg',
    alt: 'Pink-glazed sprinkles donut on pink background',
  },
  {
    url: 'assets/najlacam-F71ZHHBYs3w-unsplash.jpg',
    alt: 'Four glazed donuts in a horizontal row',
  },
];

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

const nextBtn = document.querySelector('#nextImage');
const prevBtn = document.querySelector('#prevImage');

let currentImageIndex = 0;

let indicatorDots;

let moveForwardTimer = null;

// faderelated variables
let opacityTimer = null;
let opacity = 100;
let firstImageOnTop = true;
const fadeTimeInSec = 2;


// ****************************************************************************************************
// -------------------------------------------------- DECLARE FUNCTIONS -------------------------------
// ****************************************************************************************************
function highlightDot() {
  indicatorDots.forEach((dot, index) => {
    if (index == currentImageIndex) {
      dot.classList.add('selected');
    } else {
      dot.classList.remove('selected');
    }
  });
}

function changeOpacity() {
  opacity -= 10;

  if (opacity <= -10) {
    clearInterval(opacityTimer);
    firstImageOnTop = !firstImageOnTop;
    opacity = 100;
  } else if(firstImageOnTop) {
    img1.style.opacity = `${opacity}%`;
    img2.style.opacity = `${100 - opacity}%`;
  } else {
    img1.style.opacity = `${opacity}%`;
    img1.style.opacity = `${100 - opacity}%`;
  }


}

function swapImages(fadeOut, fadeIn) {
  const img1X = firstImageOnTop ? img1 : img2;
  const img2X = firstImageOnTop ? img2 : img1;

  img1X.setAttribute('src', images[fadeOut].url);
  img2X.setAttribute('src', images[fadeIn].url);

  opacityTimer = setInterval(changeOpacity, (fadeTimeInSec * 1000) / 10);
}

function nextImage() {
 if (currentImageIndex + 1 > images.length - 1) {
  //restart from beginning
  currentImageIndex = 0;
  swapImages(images.length - 1, currentImageIndex);
} else {
  currentImageIndex += 1;
  swapImages(currentImageIndex - 1, currentImageIndex);
}
 
 highlightDot();
}

function prevImage() {
  if (currentImageIndex - 1 < 0) {
    currentImageIndex = images.length - 1;
    swapImages(0, currentImageIndex);
  } else {
    currentImageIndex -= 1;
    swapImages(currentImageIndex + 1, currentImageIndex); 
  }

  img1.setAttribute('src', images[currentImageIndex].url);
  img1.setAttribute('alt', images[currentImageIndex].alt);

  highlightDot();
}


function createDots() {
  const dotsContainer = document.querySelector('#indicatorDots');
  for (let i = 0; i < images.length; i++) {
    dotsContainer.innerHTML += '<span class="dot"></span>';
  }
  indicatorDots = document.querySelectorAll('.dot');

  highlightDot();
}


function autoPlay() {
  moveForwardTimer = setInterval(nextImage, 1000);
}

function init() {
  img1.setAttribute('src', images[0].url);
  img2.setAttribute('src', images[1].url);
}

// ****************************************************************************************************
// -------------------------------------------------- PROGRAM LOGIC -----------------------------------
// ****************************************************************************************************

/* 
x Event listener för previous och next button (klick)
x Funktion för att gå till nästa bild
x Funktion för att gå till föregående bild
x En variabel för aktuellt bild index
x Hantera när vi är på sista bilden alt. första bilden
x Funktion för att skapa pluppar för antal bilder
*/

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

createDots();
// nextImage();
init();
// autoPlay();