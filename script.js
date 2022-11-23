
const donuts = [
  {
    name: 'Chokladmunk med strössel',
    price: 20,
    rating: 4,
    amount: 0,
    image1: 'images/chocolate-sprinkle-1.jpg',
    image2: 'images/chocolate-sprinkle-2.jpg',
  },
  {
    name: 'Glaserad munk',
    price: 12,
    rating: 4,
    amount: 0,
    image1: 'images/glazed-donut-1.jpg',
    image2: 'images/glazed-donut-2.jpg',
  },
  {
    name: 'Chokladmunk',
    price: 15,
    rating: 5,
    amount: 0,
    image1: 'images/chocolate-1.jpg',
    image2: 'images/chocolate-2.jpg',
  },
  {
    name: 'Vaniljmunk',
    price: 15,
    rating: 5,
    amount: 0,
    image1: 'images/vanilla-1.jpg',
    image2: 'images/vanilla-2.jpg',
  },
  {
    name: 'Jordgubbsmunk',
    price: 15,
    rating: 4,
    amount: 0,
    image1: 'images/strawberry-1.jpg',
    image2: 'images/strawberry-2.jpg',
  },
  {
    name: 'Äppelmunk',
    price: 17,
    rating: 4,
    amount: 0,
    image1: 'images/apple-1.jpg',
    image2: 'images/apple-2.jpg',
  },
  {
    name: 'Citronmunk',
    price: 17,
    rating: 2,
    amount: 0,
    image1: 'images/lemon-1.jpg',
    image2: 'images/lemon-2.jpg',
  },
  {
    name: 'Hallonmunk',
    price: 18,
    rating: 5,
    amount: 0,
    image1: 'images/raspberry-1.jpg',
    image2: 'images/raspberry-2.jpg',
  },
  {
    name: 'Trippel chokladmunk',
    price: 20,
    rating: 4,
    amount: 0,
    image1: 'images/triple-chocolate-1.jpg',
    image2: 'images/triple-chocolate-2.jpg',
  },
  {
    name: 'Nougatmunk',
    price: 22,
    rating: 3,
    amount: 0,
    image1: 'images/nougat-1.jpg',
    image2: 'images/nougat-2.jpg',
  },
];

const donutContainer = document.querySelector('#allDonuts');

function renderDonuts() {
  donutContainer.innerHTML = '';

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `
        <article class="donut">
          <h2>${donuts[i].name}</h2><br>
          <div class="donutImgs">
            <img src="${donuts[i].image1}" width="300" height="300" alt="" id="donutImage1">
            <img src="${donuts[i].image2}" width="300" height="300" alt="" id="donutImage2">                                 
          </div>
          <div class="controls">
            <button class="left" id="prevImg">
             <span class="material-symbols-outlined"><</span>
            </button>
            <button class="right" id="nextImg">
              <span class="material-symbols-outlined">></span>
            </button>
          </div>
          <span class="price">${donuts[i].price} kr</span><br>
          Antal köpta: <span class="amount">${donuts[i].amount}</span><br>
          <button class="remove" data-id="${i}">-</button>
          <button class="add" data-id="${i}">+</button>
          
        </article>
    `;
  }
  document.querySelectorAll('.add').forEach((btn) => {
    btn.addEventListener('click', updateDonutAmount);
  });
  document.querySelectorAll('.remove').forEach((btn) => {
    btn.addEventListener('click', updateDonutAmount);
  });

  const sum = donuts.reduce(
  (previousValue, donut) => {
    return (donut.amount * donut.price) + previousValue;
  },

  0

  );
  printOrdredDonuts();

  document.querySelector('#cartSum').innerHTML = sum;
}

function printOrdredDonuts() {
  document.querySelector('#cart').innerHTML = '';

  for(let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      document.querySelector('#cart').innerHTML += `<p>${donuts[i].name}</p>`;
    }
  }
}

function updateDonutAmount(e) {
  const donutClicked = e.currentTarget.dataset.id;
  donuts[donutClicked].amount += 1;

  renderDonuts();
}

renderDonuts();



// munk slideshow
var donutImgsIndex = 1;
showDivs(ImgsIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("donutImgs");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
