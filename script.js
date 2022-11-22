
// munk slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

const donuts = [
  {
    name: 'Chokladmunk med strössel',
    price: 20,
    rating: 4,
    amount: 0,
    image1: '/images/chocolate-sprinkle-1.jpg',
    image2: '/images/chocolate-sprinkle-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Glaserad munk',
    price: 12,
    rating: 4,
    amount: 0,
    image1: '/images/glazed-donut-1.jpg',
    image2: '/images/glazed-donut-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Chokladmunk',
    price: 15,
    rating: 5,
    amount: 0,
    image1: '/images/chocolate-1.jpg',
    image2: '/images/chocolate-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Vaniljmunk',
    price: 15,
    rating: 5,
    amount: 0,
    image1: '/images/vanilla-1.jpg',
    image2: '/images/vanilla-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Jordgubbsmunk',
    price: 15,
    rating: 4,
    amount: 0,
    image1: '/images/strawberry-1.jpg',
    image2: '/images/strawberry-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Äppelmunk',
    price: 17,
    rating: 4,
    amount: 0,
    image1: '/images/apple-1.jpg',
    image2: '/images/apple-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Citronmunk',
    price: 17,
    rating: 2,
    amount: 0,
    image1: '/images/lemon-1.jpg',
    image2: '/images/lemon-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Hallonmunk',
    price: 18,
    rating: 5,
    amount: 0,
    image1: '/images/raspberry-1.jpg',
    image2: '/images/raspberry-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Trippel chokladmunk',
    price: 20,
    rating: 4,
    amount: 0,
    image1: '/images/triple-chocolate-1.jpg',
    image2: '/images/triple-chocolate-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
  {
    name: 'Nougatmunk',
    price: 22,
    rating: 3,
    amount: 0,
    image1: '/images/nougat-1.jpg',
    image2: '/images/nougat-2.jpg',
    button1: 'prev',
    button2: 'next',
  },
];

const donutContainer = document.querySelector('#allDonuts');

function renderDonuts() {
  donutContainer.innerHTML = '';

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `
        <article class="donut">
          <img class="mySlides" width="200" height="300">${donuts[i].image1}>
          <img class="mySlides" width="200" height="300">${donuts[i].image2}>
          <button class="prev" onclick="plusDivs(-1)"><</button>
          <button class="next" onclick="plusDivs(1)">></button>
          <h2>${donuts[i].name}</h2>
          <span class="price">${donuts[i].price} kr</span>
          Antal köpta: <span class="amount">${donuts[i].amount}</span>
          <button class="remove" data-id="${i}">-</button>
          <button class="add" data-id="${i}">+</button>
          
        </article>
    `;
  }
  
  document.querySelectorAll('.add').forEach((btn) => {
    btn.addEventListener('click', addDonut);
  });
  document.querySelectorAll('.remove').forEach((btn) => {
    btn.addEventListener('click', removeDonut);
  });
  renderCart();
}

// Funktion lägga till munkar
function addDonut(e) {
  const clickedDonut = e.currentTarget.dataset.id;
  donuts[clickedDonut].amount += 1;
  renderDonuts();
}

// Funktion ta bort munkar
function removeDonut(e) {
  const clickedDonut = e.currentTarget.dataset.id;
  if (donuts[clickedDonut].amount > 0) {
    donuts[clickedDonut].amount -= 1;
  }
  renderDonuts();
}


const sum = donuts.reduce(
  (previousValue, donut) => {
    return (donut.amount * donut.price) + previousValue;
  },
  0
  );

  printOrderedDonuts();

  document.querySelector('#cartSum').innerHTML = sum;


function printOrderedDonuts() {
  document.querySelector('#cart').innerHTML = '';

  for(let i = 0; i < donuts.length; i++) {
    if (donuts[i].amount > 0) {
      document.querySelector('#cart').innerHTML += `<p>${donuts[i].name}</p>`;
    }
  }
}

function updateDonutAmount(e) {
  const donutJagKlickadePa = e.currentTarget.dataset.id;
  donuts[donutJagKlickadePa].amount += 1;

  console.log(donuts);
  renderDonuts();
}

renderDonuts();

 