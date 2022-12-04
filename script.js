const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");

darkMode.addEventListener("click", darkTeam);
lightMode.addEventListener("click", lightTeam);

function darkTeam() {
  document.body.style.backgroundColor = "gray ";
  document.body.style.transition = "ease-in-out 0.3s";
  darkMode.style.visibility = "hidden";
  lightMode.style.visibility = "visible";
}

function lightTeam() {
  document.body.style.backgroundColor = "white";
  lightMode.style.visibility = "hidden";
  darkMode.style.visibility = "visible";
}

// Skapar munkar i en array
const donuts = [
  {
    name: "Chokladmunk med strössel", // Namn på munk
    price: 23, // Pris
    rating: 4, // Betyg
    amount: 0, // Antal munkar vid start
    image1: "./Images/chocolate-sprinkle-1.jpg", // Bild 1
    image2: "./Images/chocolate-sprinkle-2.jpg", // Bild 2
    category: "Choklad", // Kategori för sortering
  },
  {
    name: "Glaserad munk",
    price: 15,
    rating: 4,
    amount: 0,
    image1: "./Images/glazed-donut-1.jpg",
    image2: "./Images/glazed-donut-2.jpg",
    category: "Övriga",
  },
  {
    name: "Chokladmunk",
    price: 19,
    rating: 2,
    amount: 0,
    image1: "./Images/chocolate-1.jpg",
    image2: "./Images/chocolate-2.jpg",
    category: "Choklad",
  },
  {
    name: "Vaniljmunk",
    price: 18,
    rating: 1,
    amount: 0,
    image1: "./Images/vanilla-1.jpg",
    image2: "./Images/vanilla-2.jpg",
    category: "Vanilj",
  },
  {
    name: "Jordgubbsmunk",
    price: 15,
    rating: 4,
    amount: 0,
    image1: "./Images/strawberry-1.jpg",
    image2: "./Images/strawberry-2.jpg",
    category: "Bär och frukt",
  },
  {
    name: "Äppelmunk",
    price: 25,
    rating: 4,
    amount: 0,
    image1: "./Images/apple-1.jpg",
    image2: "./Images/apple-2.jpg",
    category: "Bär och frukt",
  },
  {
    name: "Citronmunk",
    price: 22,
    rating: 2,
    amount: 0,
    image1: "./Images/lemon-1.jpg",
    image2: "./Images/lemon-2.jpg",
    category: "Bär och frukt",
  },
  {
    name: "Hallonmunk",
    price: 20,
    rating: 5,
    amount: 0,
    image1: "./Images/raspberry-1.jpg",
    image2: "./Images/raspberry-2.jpg",
    category: "Bär och frukt",
  },
  {
    name: "Trippel chokladmunk",
    price: 30,
    rating: 4,
    amount: 0,
    image1: "./Images/triple-chocolate-1.jpg",
    image2: "./Images/triple-chocolate-2.jpg",
    category: "Choklad",
  },
  {
    name: "Nougatmunk",
    price: 35,
    rating: 3,
    amount: 0,
    image1: "./Images/nougat-1.jpg",
    image2: "./Images/nougat-2.jpg",
    category: "Choklad",
  },
];
// Container från HTML
const donutContainer = document.querySelector("#allDonuts");
const basketDonuts = document.querySelector("#basketDonuts");
const totalPriceBasket = document.querySelector("#totalAmountBasket");

// Funktion för skapande av munkar
function renderDonuts() {
  donutContainer.innerHTML = "";
  // For-loop
  for (let i = 0; i < donuts.length; i++) {
    // Skriver ut innehåll
    donutContainer.innerHTML += `
        <article class="donut" id=myImages>
          <h2>${donuts[i].name}</h2><br>
          <section class="donutCardContainer">
<div class="donutCardImgContainer">
<div class="controlsImgSlideshow" id="controlsImgSlideshow">
         
      <div class="myImages">
            <img src="${
              donuts[i].image1
            }" width="290" height="290" alt="" class="donutImage1" id="donutImage1">
            <img src="${
              donuts[i].image2
            }" width="290" height="290" alt="" class="donutImage2" id="donutImage2">                                 
    </div>
      <div class="controls" id="controls">
            <button class="left" id="prevImg">
             <span class="material-symbols-outlined"><</span>
            </button>
            <button class="right" id="nextImg">
              <span class="material-symbols-outlined">></span>
            </button>
    </div>
    </div>
      <div class="donutContainerPrice">
          <span class="price">Styckpris:<span id="donutPriceTarget[i]"> ${
            donuts[i].price
          }</span> kr</span><br>
          <span class="amount">Antal: ${donuts[i].amount} st</span><br>
          <span class="priceDefault">Pris: ${
            donuts[i].price * donuts[i].amount
          } kr</span><br>
           <span class="rating">Betyg: ${donuts[i].rating}/5</span><br> 
           <span class="sortCategory">Kategori: ${donuts[i].category}</span>
    </div>
    </div>
      <div class="donutContainerInput">
          <button class="remove" data-id="${i}" >-</button>
          
          <button class="add" data-id="${i}">+</button>
     </div>
          </section>
    </div>
        </article>
    `;
  }
  // Container från HTML
  const prevImageBtn = document.querySelectorAll("#prevImg");
  const nextImageBtn = document.querySelectorAll("#nextImg");

  for (let i = 0; i < prevImageBtn.length; i++) {
    prevImageBtn[i].addEventListener("click", swapImages);
    nextImageBtn[i].addEventListener("click", swapImages);
  }

  function swapImages(e) {
    const donutcardImg1Slideshow =
      e.currentTarget.parentElement.parentElement.querySelector("#donutImage1");
    const donutCardImg2Slideshow =
      e.currentTarget.parentElement.parentElement.querySelector("#donutImage2");

    const firstDonut = donutcardImg1Slideshow.getAttribute("src");
    const secondDonut = donutCardImg2Slideshow.getAttribute("src");

    donutcardImg1Slideshow.setAttribute("src", secondDonut);
    donutCardImg2Slideshow.setAttribute("src", firstDonut);
  }

  document.querySelectorAll(".add").forEach((btn) => {
    btn.addEventListener("click", updateDonutAmount);
  });

  document.querySelectorAll(".remove").forEach((btn) => {
    btn.addEventListener("click", removeDonutAmount);
  });

  printOrdredDonuts();
} // // // // // // // // // //

categoryBtn = document.querySelector("#sortCategory");
categoryBtn.addEventListener("click", categoryOrder);

function categoryOrder() {
  donuts.sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    }

    if (a.category > b.category) {
      return 1;
    }

    return 0;
  });

  renderDonuts();
}

// sortering efter namn pris och rating
const nameBtn = document.querySelector("#sortName");
nameBtn.addEventListener("click", nameOrder);

function nameOrder() {
  donuts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });

  renderDonuts();
}

const ratingBtn = document.querySelector("#sortRating");
ratingBtn.addEventListener("click", sortRating);

function sortRating() {
  donuts.sort((donut1, donut2) => donut1.rating - donut2.rating);

  renderDonuts();
}

const priceBtn = document.querySelector("#sortPrice");
priceBtn.addEventListener("click", sortPrice);

function sortPrice() {
  donuts.sort((donut1, donut2) => donut1.price - donut2.price);

  renderDonuts();
}

// prisrange slider
const filteredDonutsInPriceRange = [...donuts];
const priceRangeSlider = document.querySelector("#priceRange");
const currentRangeValue = document.querySelector("#currentRangeValue");

priceRangeSlider.addEventListener("input", changePriceRange);

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredDonutsInPriceRange = donuts.filter(
    (donuts) => donuts.price <= currentPrice
  );

  renderDonuts();
}

function printOrdredDonuts() {
  document.querySelector(".cartName").innerHTML = "";
  document.querySelector("#receiptOrderDonut").innerHTML = "";
  const discountButton = document.getElementById("discountButton");
  // Sätter ett värde
  donutPriceRegular = 0;
  donutPriceTotal = 0;
  donutTotalAmount = 0;

  // Utskrift av order
  for (let i = 0; i < donuts.length; i++) {
    // Om 1-9 munkar av en sort är beställda
    if (donuts[i].amount > 0 && donuts[i].amount <= 9) {
      donutPriceRegular += donuts[i].amount * donuts[i].price;
      donutTotalAmount += donuts[i].amount;
      // Skriver ut
      document.querySelector(
        ".cartName"
      ).innerHTML += ` <span class="cartNameProduct">Produkt: ${
        donuts[i].name
      }<br></span> <span class="cartNameQuantity">Antal: ${
        donuts[i].amount
      }</span> <span class="cartNamePrice">Pris: ${
        donuts[i].amount * donuts[i].price
      }<br><hr></span>`;

      // Skriver ut summan för alla donuts
      document.querySelector(".cartPrice").innerHTML = donutPriceRegular;
      // Om 10+ munkar av en sort är beställda
    } else if (donuts[i].amount >= 10) {
      // Rabatt på munksort
      donutPriceRegular += donuts[i].amount * donuts[i].price * 0.9;
      donutTotalAmount += donuts[i].amount;
      // Utskrift
      document.querySelector(
        ".cartName"
      ).innerHTML += `<span class="cartNameProduct">Produkt: ${
        donuts[i].name
      }<br></span> <span class="cartNameQuantity">Antal: ${
        donuts[i].amount
      }</span> <span class="cartNamePrice">Pris: ${Math.round(
        donuts[i].amount * donuts[i].price * 0.9
      )}</span> <span class="discountAmount">10% rabatt! <br><hr></span>`;

      // Skriver ut summan för alla donuts
      document.querySelector(".cartPrice").innerHTML = donutPriceRegular;
    }

    //Datum
    const discountAlert = document.querySelector(".discountAlert");
    const newDate = new Date();
    const startDate = new Date(newDate.getFullYear(), 0, 1);
    const days = Math.floor((newDate - startDate) / (24 * 60 * 60 * 1000));
    const weekNum = Math.ceil(days / 7);

    // Rabatt beroende på dag

    if (newDate.getDay() === 1 && newDate.getHours() < 10) {
      // Skriver ut text
      discountAlert.innerHTML = `<span> Måndagsrabatt! 10% på hela beställningen!</span>`;
      // Nytt värde
      donutPriceTotal = Math.round(donutPriceRegular * 0.9);
    } else if (
      (newDate.getDay() === 5 && newDate.getHours() > 15) ||
      newDate.getDay() === 6 ||
      newDate.getDay() === 0 ||
      (newDate.getDay() === 1 && newDate.getHours() < 3)
    ) {
      donutPriceTotal = Math.round(donutPriceRegular * 1.15);
    } else if (
      weekNum % 2 === 0 &&
      newDate.getDay() === 2 &&
      donutPriceRegular > 25
    ) {
      // Skriver ut text
      discountAlert.innerHTML = `<span>Rabatt: 25 kronor!</span>`;
      // Nytt värde
      donutPriceTotal = Math.round(donutPriceRegular - 25);
    } else {
      // Behåller värdet
      donutPriceTotal = Math.round(donutPriceRegular + 0);
    }
  }

  //Frakt

  let shipping = 25; // Fraktkostnad
  let shippingTotal = 0; // Skapar fraktsumman
  if (donutTotalAmount < 16 && donutTotalAmount >= 1) {
    // Nytt värde
    shippingTotal += donutPriceRegular * 1.1 + shipping;
    // Skriver ut fraktkostnad
    document.querySelector(".shippingValue").innerHTML =
      Math.round(shippingTotal);
    donutPriceTotal = donutPriceTotal + shippingTotal;
  } else {
    // Skriver ut fraktkostnad
    document.querySelector(".shippingValue").innerHTML =
      Math.round(shippingTotal);
    // Behåller värdet
    donutPriceTotal = donutPriceTotal + shippingTotal;
  }

  // Rabattkod

  // Inaktivera faktura om kostnad överstiger 800 kr
  if (donutPriceTotal > 800) {
    document.getElementById("radioinvoice").disabled = true;
  } else {
    document.getElementById("radioinvoice").disabled = false;
  }

  // const discountInputCode = document.getElementById("discountInputCode");
  // discountInputCode.addEventListener("change", checkDiscountInputCode);

  // // Rabattkod
  // if (checkDiscountInputCode.value === "a") {
  //   donutPriceTotal = donutPriceTotal * 0;
  // } else {
  //   checkDiscountInputCode = false;
  // }

  // Skriver ut total summan
  const cartTotal = document.querySelector(".cartTotal");
  // Avrundar innan utskrift
  cartTotal.innerHTML = Math.round(donutPriceTotal);
  const cartTotalReceipt = document.querySelector("#receiptOrderDonut");
  cartTotalReceipt.innerHTML = Math.round(donutPriceTotal);
  // Skriver ut antal munkar i header
  const cartamount = document.querySelector(".cart");
  cartamount.innerHTML = Math.round(donutTotalAmount);
}
var colorChangeLogo = document.getElementById("headerCartLogo");
var colorChange = document.getElementById("cartTotal");
// Lägger in färger i en array
colors = ["darkorchid", "darkblue", "darkmagenta", "black"];
// Lägger till antal på munk
function updateDonutAmount(e) {
  const donutClicked = e.currentTarget.dataset.id;
  donuts[donutClicked].amount += 1;

  color = colors.shift();
  colors.push(color);
  colorChange.style.color = color;
  colorChangeLogo.style.color = color;

  renderDonuts();
}

// Tar bort antal på munk
function removeDonutAmount(e) {
  const donutClicked = e.currentTarget.dataset.id;

  if (donuts[donutClicked].amount > 0) {
    donuts[donutClicked].amount -= 1;

    color = colors.shift();
    colors.push(color);
    colorChange.style.color = color;
    colorChangeLogo.style.color = color;
  }
  renderDonuts();
}

renderDonuts();

////////////////// Luciamunk/////////////////////////////////////
// Hade varit enklast att lagt den i vanliga if-utskriften, där den max kan läggas till en gång

document.querySelector(".gift").innerHTML = "";
const newDate = new Date();

if (newDate.getMonth() === 11 && newDate.getDate() === 13) {
  let luciaDonutValue = 1;
  document.querySelector(
    ".gift"
  ).innerHTML += `<span class="cartNameProduct">Gåva: Luciamunk <br></span> <span class="cartNameQuantity">Antal: ${luciaDonutValue}</span> <span class="cartNamePrice">Pris: 0<br><hr></span>`; // ÄNDRA
}

///////////////// Jultema//////////////////////
if (newDate.getMonth() === 11 && newDate.getDate() === 24) {
  const santaPrice = document.querySelectorAll(".price");

  for (let i = 0; i < santaPrice.length; i++) {
    santaPrice[i].style.color = "red";
  }
  const filterBackground = document.querySelector(".filter");
  filterBackground.style.background = "#f68989";
  document.getElementById("sortAfterHeading").style.color = "black";
  document.getElementById("space").style.color = "black";
  document.getElementById("space").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("contact").style.background = "#f68989";
  document.body.style.backgroundImage =
    "linear-gradient(45deg, #9e001d 25%, #ffffff 25%, #ffffff 50%, #9e001d 50%, #9e001d 75%, #ffffff 75%, #ffffff 100%)";
  document.body.style.backgroundSize = "40.00px 40.00px";
}

// ***********************************
// Sparar input information

const submitButton = document.getElementById("submit");
const contactForm = document.getElementById("contactForm");
const userInputPayment = contactForm.elements["betalning"];
const firstName = document.getElementById("fname");
const secondName = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const street = document.getElementById("street");
const zip = document.getElementById("zip");
const city = document.getElementById("city");
const personNr = document.getElementById("personNr");
const cardNr = document.getElementById("cardNr");
const cardDate = document.getElementById("dateNr");
const cvcNr = document.getElementById("cvcNr");
const radioinvoice = document.getElementById("radioinvoice");
const radiocard = document.getElementById("radiocard");
const portCode = document.getElementById("portcode");
const gdpr = document.getElementById("gdpr");
const userForm = document.getElementById("userForm");
const filterHeading = document.getElementById("filter");
const shop = document.getElementById("shop");
const checkOutButton = document.getElementById("checkOutButton");
const checkOutButtonBack = document.getElementById("checkOutButtonBack");
const receiptOrderButton = document.getElementById("receiptOrderButton");
const cartTotal = document.getElementById("cartTotal");
const allDonuts = document.getElementById("allDonuts");
const clearCart = document.getElementById("clearCart");
const deliveryTime = document.getElementById("deliveryTime");
const receiptOrder = document.getElementById("receiptOrder");
const receiptOrderName = document.querySelector("#receiptOrderName");
const receiptOrderContactInformation = document.getElementById(
  "receiptOrderContactInformation"
);
const resetForm = document.getElementById("resetForm");

// Tömmer formulär
resetForm.addEventListener("click", resetFormButton);

function resetFormButton() {
  document.getElementById("contactForm").reset();
}
setInterval(orderTimeOut, 900000);

function orderTimeOut() {
  resetFormButton();
  alert("Du är för långsam, kontaktformuläret har återställts!");
}

// Tömmer varukorgen

clearCart.addEventListener("click", clearCartButton);

function clearCartButton(e) {
  for (let i = 0; i < donuts.length; i++) {
    donuts[i].amount = 0;
    document.querySelector(".cartPrice").innerHTML = "";
  }
  renderDonuts();
}

// Knapp för att gå vidare till kundinformation
checkOutButton.addEventListener("click", continueToPayment);

function continueToPayment() {
  // visar
  userForm.style.display = "block";
  // Döljer
  shop.style.display = "none";
  // Döljer
  allDonuts.style.display = "none";
  // Döljer
  filterHeading.style.display = "none";
}

// Click funktion för gå tillbaka till varukorgen
checkOutButtonBack.addEventListener("click", backToCheckout);

function backToCheckout() {
  // Döljer
  userForm.style.display = "none";
  // Visar
  shop.style.display = "block";
  // Visar munkar igen
  allDonuts.style.display = "";
  filterHeading.style.display = "block";
}

// Funktion för orderknapp, kvitto och leveranstid
submitButton.addEventListener("click", orderCompilation);
function orderCompilation(e) {
  // Event för att förhindra att knappen använder sina standardvärden
  e.preventDefault();
  // Visar nästa fönster efter man tryckt på knappen
  receiptOrder.style.display = "block";
  // Döljer förgående fönster
  userForm.style.display = "none";

  // Leveranstid av order
  const newDate = new Date();
  // Om beställningen läggs på lördag eller söndag, skrivs text ut
  if (newDate.getDay() === 7 || newDate.getDay() === 0) {
    deliveryTime.innerHTML = "Ordern levereras om 1,5 timme!";
  }
  // Om beställningen läggs på fredag mellan klockan 11 och 13
  else if (
    newDate.getDay() === 5 &&
    newDate.getHours() >= 11 &&
    newDate.getHours() <= 13
  ) {
    deliveryTime.innerHTML = "Ordern levereras klockan 15:00!";
  }
  // Om beställningen läggs mitt i natten
  else if (newDate.getHours() >= 22 || newDate.getHours() <= 5) {
    deliveryTime.innerHTML = "Ordern levereras om 45 minuter!";
  }
  // Om inget stämmer in
  else {
    deliveryTime.innerHTML = "Ordern levereras om 30 minuter!";
  }

  // Skriver ut värdet/inputen från kontaktformuläret, efter ordern är lagd
  receiptOrderName.innerHTML = `Tack för beställningen ${fname.value} ${lname.value}!`;
  receiptOrderContactInformation.innerHTML = `Ifyllda kontaktuppgifter: <br>  
 Namn: ${fname.value} ${lname.value} <br> 
 E-mail: ${email.value} <br> 
 Telefon: ${phone.value} <br>
 Adress: ${street.value} <br> 
 Postnummer: ${zip.value} <br> 
 Postort: ${city.value} <br>
 Portkod: ${portCode.value} <br>
 Vald betalning: ${userInputPayment.value} <br>`;
}

// Event för förnamn
firstName.addEventListener("change", checkfName);
// Variabeln har värdet falskt
let checkfNameInput = false;
// Skapar en funktion
function checkfName() {
  // Vilka tecken som godkänds och inte
  const exp = new RegExp("^[A-Za-zÅÄÖåäö-]{1,}");
  // Hämtar in vart felmeddelande ska skrivas
  const errorMessage = document.getElementById("errorfname");
  // Om input-värdet stämmer överens med dom godkända tecknen
  if (exp.test(firstName.value)) {
    // Tar bart felmeddelandet ifall användaren skrev fel innan
    errorMessage.setAttribute("hidden", "");
    // Tar bort den tidigare stylingen ifall användaren skrev fel innan
    document.getElementById("fname").style = null;
    // Ändrar värdet till sant
    checkfNameInput = true;
    // Vid fel
  } else {
    // Skriver ut meddelande
    errorMessage.innerHTML = "Skriv ditt förnamn med bokstäver";
    // Styling text och ram
    document.getElementById("fname").style.color = "red";
    document.getElementById("fname").style.border = "dotted red";
    // Meddelandet kan skrivas ut igen
    errorMessage.removeAttribute("hidden");
    // Värdet är falskt
    checkfNameInput = false;
  }
  // Synkar med aktivering av knapp
  activatesubmitButton();
}
// Efternamn
secondName.addEventListener("change", checklName);
let checklNameInput = false;

function checklName() {
  const exp = new RegExp("^[A-Za-zÅÄÖåäö-]{1,}$");
  const errorMessage = document.getElementById("errorlname");

  if (exp.test(secondName.value)) {
    errorMessage.setAttribute("hidden", "");
    document.getElementById("lname").style = null;
    checklNameInput = true;
  } else {
    errorMessage.innerHTML = "Skriv ditt efternamn med bokstäver";
    document.getElementById("lname").style.color = "red";
    document.getElementById("lname").style.border = "dotted red";
    errorMessage.removeAttribute("hidden");
    checklNameInput = false;
  }
  activatesubmitButton();
}
// E-mail
email.addEventListener("change", checkemail);
let checkemailInput = false;

function checkemail() {
  const exp = new RegExp("^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$");
  const errorMessage = document.getElementById("erroremail");

  if (exp.test(email.value)) {
    errorMessage.setAttribute("hidden", "");
    document.getElementById("email").style = null;
    checkemailInput = true;
  } else {
    errorMessage.innerHTML = "Skriv korrekt e-postadress";
    errorMessage.removeAttribute("hidden");
    document.getElementById("email").style.color = "red";
    document.getElementById("email").style.border = "dotted red";
    checkemailInput = false;
  }
  activatesubmitButton();
}
// Telefon
phone.addEventListener("change", checkphone);
let checkphoneInput = false;

function checkphone() {
  const exp = new RegExp("^[-0-9]");
  const errorMessage = document.getElementById("errorphone");

  if (exp.test(phone.value)) {
    errorMessage.setAttribute("hidden", "");
    document.getElementById("phone").style = null;
    checkphoneInput = true;
  } else {
    errorMessage.innerHTML = "Skriv med hjälp av siffor och bindestreck";
    document.getElementById("phone").style.color = "red";
    document.getElementById("phone").style.border = "dotted red";
    errorMessage.removeAttribute("hidden");
    checkphoneInput = false;
  }
  activatesubmitButton();
}
// Adress
street.addEventListener("change", checkstreet);
let checkstreetInput = false;

function checkstreet() {
  const exp = new RegExp("^[0-9A-Za-zÅÄÖåäö-]");
  const errorMessage = document.getElementById("erroradress");

  if (exp.test(street.value)) {
    errorMessage.setAttribute("hidden", "");
    document.getElementById("street").style = null;
    checkstreetInput = true;
  } else {
    errorMessage.innerHTML = "Skriv din address";
    document.getElementById("street").style.color = "red";
    document.getElementById("street").style.border = "dotted red";
    errorMessage.removeAttribute("hidden");
    checkstreetInput = false;
  }
  activatesubmitButton();
}
// Postnummer
zip.addEventListener("change", checkzip);
let checkzipInput = false;

function checkzip() {
  const exp = new RegExp("^[0-9]");
  const errorMessage = document.getElementById("errorzip");

  if (exp.test(zip.value)) {
    errorMessage.setAttribute("hidden", "");
    document.getElementById("zip").style = null;
    checkzipInput = true;
  } else {
    errorMessage.innerHTML = "Skriv ditt postnummer med hjälp av siffror";
    document.getElementById("zip").style.color = "red";
    document.getElementById("zip").style.border = "dotted red";
    errorMessage.removeAttribute("hidden");
    checkzipInput = false;
  }
  activatesubmitButton();
}
// Postort
city.addEventListener("change", checkcity);
let checkcityInput = false;
function checkcity() {
  const exp = new RegExp("^[A-Za-zÅÄÖåäö-]{1,}$");
  const errorMessage = document.getElementById("errorcity");

  if (exp.test(city.value)) {
    errorMessage.setAttribute("hidden", "");
    document.getElementById("city").style = null;
    checkcityInput = true;
  } else {
    errorMessage.innerHTML = "Skriv din postort";
    document.getElementById("city").style.color = "red";
    document.getElementById("city").style.border = "dotted red";
    errorMessage.removeAttribute("hidden");
    checkcityInput = false;
  }
  activatesubmitButton();
}
// Personnummer
personNr.addEventListener("change", checkpersonNr);
let checkpersonNrInput = false;
function checkpersonNr() {
  const exp = new RegExp("^[-0-9]{10}$");
  const errorMessage = document.getElementById("errorpersonnr");

  if (exp.test(personNr.value)) {
    errorMessage.setAttribute("hidden", "");
    document.getElementById("personNr").style = null;
    checkpersonNrInput = true;
  } else {
    errorMessage.innerHTML = "Skriv med siffor, 10 stycken";
    document.getElementById("personNr").style.color = "red";
    document.getElementById("personNr").style.border = "dotted red";
    errorMessage.removeAttribute("hidden");
    checkpersonNrInput = false;
  }
  activatesubmitButton();
}
// Kortnummer*
cardNr.addEventListener("change", checkcardNr);
let checkcardNrInput = false;
function checkcardNr() {
  const exp = new RegExp("^[-0-9]");
  const errorMessage = document.getElementById("errorkortnr");

  if (exp.test(cardNr.value)) {
    errorMessage.setAttribute("hidden", "");
    checkcardNrInput = true;
  } else {
    errorMessage.innerHTML = "Skriv med siffor";
    errorMessage.removeAttribute("hidden");
    checkcardNrInput = false;
  }
  activatesubmitButton();
}
// Datum för kort
dateNr.addEventListener("change", checkdateNr);
let checkdateNrInput = false;
function checkdateNr() {
  const exp = new RegExp("^[-0-9]");
  const errorMessage = document.getElementById("errordate");

  if (exp.test(dateNr.value)) {
    errorMessage.setAttribute("hidden", "");
    checkdateNrInput = true;
  } else {
    errorMessage.innerHTML = "Skriv med siffor";
    errorMessage.removeAttribute("hidden");
    checkdateNrInput = false;
  }
  activatesubmitButton();
}
// CVC
cvcNr.addEventListener("change", checkcvcNr);
let checkcvcNrInput = false;
function checkcvcNr() {
  const exp = new RegExp("^[0-9]");
  const errorMessage = document.getElementById("errorcvc");

  if (exp.test(cvcNr.value)) {
    errorMessage.setAttribute("hidden", "");
    checkcvcNrInput = true;
  } else {
    errorMessage.innerHTML = "Skriv med siffor";
    errorMessage.removeAttribute("hidden");
    checkcvcNrInput = false;
  }
  activatesubmitButton();
}

//GDPR
gdpr.addEventListener("click", checkGdpr);
let checkGdprInput = false;

function checkGdpr() {
  if ((checkGdprInput = gdpr.checked)) {
    checkGdprInput = true;
  } else {
    checkGdprInput = false;
  }
  activatesubmitButton();
}

// Personnummer
// Vid klick körs funktionen
radioinvoice.addEventListener("click", radioinvoiceClick);
function radioinvoiceClick() {
  // Innehåll visas
  document.getElementById("persondiv").style.display = "block";
  // Innehåll döljs
  document.getElementById("kortdiv").style.display = "none";
  // Om något värde har skrivits i input, rensas det
  document.getElementById("cardNr").value = "";
  document.getElementById("dateNr").value = "";
  document.getElementById("cvcNr").value = "";
}

radiocard.addEventListener("click", radiocardClick);

function radiocardClick() {
  // Innehåll döljs
  document.getElementById("persondiv").style.display = "none";
  // Innehåll visas
  document.getElementById("kortdiv").style.display = "block";
  // Om något värde har skrivits i input, rensas det
  document.getElementById("personNr").value = "";
}

// Aktivering av submit-button
function activatesubmitButton() {
  if (
    checkfNameInput &&
    checklNameInput &&
    checkemailInput &&
    checkphoneInput &&
    checkstreetInput &&
    checkzipInput &&
    checkcityInput &&
    checkGdprInput &&
    ((checkcardNrInput &&
      checkdateNrInput &&
      checkcvcNrInput &&
      radiocard.checked) ||
      (checkpersonNrInput && radioinvoice.checked))
  ) {
    // Sålänge alla 'if' är godkända, aktiveras submit knappen för order
    submitButton.removeAttribute("disabled");
  } else {
    // Om någon 'if' inte stämmer övererns, blir submit knappen inaktiv
    submitButton.setAttribute("disabled", "");
  }
}
// Funktion för knapp vid orderbekräftelse
receiptOrderButton.addEventListener("click", backToStartReceipt);

function backToStartReceipt() {
  // Laddar om sidan
  document.location.reload();
}
