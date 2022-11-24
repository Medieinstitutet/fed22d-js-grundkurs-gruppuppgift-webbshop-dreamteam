
// Sparar input information
      const submitButton = document.getElementById("submit");
      const form = document.getElementById("contactForm");
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
      const radioinvoice = document.getElementById("radiofaktura");
      const radiocard = document.getElementById("radiokort");
      const portCode = document.getElementById("portcode");

      ///beställningsknappen///////////

      // Förnamn
      firstName.addEventListener("change", checkfName);
      let checkfNameInput = false;

      function checkfName() {
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}");
        const errorMessage = document.getElementById("errorfname");

        if (exp.test(firstName.value)) {
          errorMessage.setAttribute("hidden", "");
          checkfNameInput = true;
        } else {
          errorMessage.innerHTML = "Skriv ditt förnamn med bokstäver";
          errorMessage.removeAttribute("hidden");
          checkfNameInput = false;
        }
        activatesubmitButton();
      }
      // Efternamn
      secondName.addEventListener("change", checklName);
      let checklNameInput = false;

      function checklName() {
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}$");
        const errorMessage = document.getElementById("errorlname");

        if (exp.test(secondName.value)) {
          errorMessage.setAttribute("hidden", "");
          checklNameInput = true;
        } else {
          errorMessage.innerHTML = "Skriv ditt efternamn med bokstäver";
          errorMessage.removeAttribute("hidden");
          checklNameInput = false;
        }
        activatesubmitButton();
      }
      // E-mail
      email.addEventListener("change", checkemail);
      let checkemailInput = false;

      function checkemail() {
        const exp = new RegExp(
          "^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$"
        );
        const errorMessage = document.getElementById("erroremail");

        if (exp.test(email.value)) {
          errorMessage.setAttribute("hidden", "");
          checkemailInput = true;
        } else {
          errorMessage.innerHTML = "Skriv e-postadress";
          errorMessage.removeAttribute("hidden");
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
          checkphoneInput = true;
        } else {
          errorMessage.innerHTML = "Skriv med hjälp av siffor och bindestreck";
          errorMessage.removeAttribute("hidden");
          checkphoneInput = false;
        }
        activatesubmitButton();
      }
      // Adress
      street.addEventListener("change", checkstreet);
      let checkstreetInput = false;

      function checkstreet() {
        const exp = new RegExp("^[0-9A-Za-zÅÄÖåäö\-]");
        const errorMessage = document.getElementById("erroradress");

        if (exp.test(street.value)) {
          errorMessage.setAttribute("hidden", "");
          checkstreetInput = true;
        } else {
          errorMessage.innerHTML = "Skriv din address";
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
          checkzipInput = true;
        } else {
          errorMessage.innerHTML = "Skriv ditt postnummer med hjälp av siffror";
          errorMessage.removeAttribute("hidden");
          checkzipInput = false;
        }
        activatesubmitButton();
      }
      // Postort
      city.addEventListener("change", checkcity);
      let checkcityInput = false;

      function checkcity() {
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}$");
        const errorMessage = document.getElementById("errorcity");

        if (exp.test(city.value)) {
          errorMessage.setAttribute("hidden", "");
          checkcityInput = true;
        } else {
          errorMessage.innerHTML = "Skriv din postort";
          errorMessage.removeAttribute("hidden");
          checkcityInput = false;
        }
        activatesubmitButton();
      }
      // Personnummer
      personNr.addEventListener("change", checkpersonNr);
      let checkpersonNrInput = false;

      function checkpersonNr() {
        const exp = new RegExp("^[-0-9]");
        const errorMessage = document.getElementById("errorpersonnr");

        if (exp.test(personNr.value)) {
          errorMessage.setAttribute("hidden", "");
          checkpersonNrInput = true;
        } else {
          errorMessage.innerHTML = "Skriv med siffor och bindestreck";
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

      // Personnummer show/hide + rensar
      function showfaktura() {
        document.getElementById("persondiv").style.display = "block";
        document.getElementById("kortdiv").style.display = "none";
        document.getElementById("cardNr").value = "";
        document.getElementById("dateNr").value = "";
        document.getElementById("cvcNr").value = "";
      }
      function showcard() {
        document.getElementById("persondiv").style.display = "none";
        document.getElementById("kortdiv").style.display = "block";
        document.getElementById("personNr").value = "";
      }
      //

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
          ((checkcardNrInput &&
            checkdateNrInput &&
            checkcvcNrInput &&
            radiocard.checked) ||
            (checkpersonNrInput && radioinvoice.checked))
        ) {
          submitButton.removeAttribute("disabled");
        } else {
          // Lägger till disable på submit. "" gör att den uppdateras(?)
          submitButton.setAttribute("disabled", "");
        }
      }
=======
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
// ***************Simon********************
// Sparar input information
      const submitButton = document.getElementById("submit");
      const form = document.getElementById("contactForm");
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
      const radioinvoice = document.getElementById("radiofaktura");
      const radiocard = document.getElementById("radiokort");
      const portCode = document.getElementById("portcode");

      ///beställningsknappen///////////

      // Förnamn
      firstName.addEventListener("change", checkfName);
      let checkfNameInput = false;

      function checkfName() {
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}");
        const errorMessage = document.getElementById("errorfname");

        if (exp.test(firstName.value)) {
          errorMessage.setAttribute("hidden", "");
          checkfNameInput = true;
        } else {
          errorMessage.innerHTML = "Skriv ditt förnamn med bokstäver";
          errorMessage.removeAttribute("hidden");
          checkfNameInput = false;
        }
        activatesubmitButton();
      }
      // Efternamn
      secondName.addEventListener("change", checklName);
      let checklNameInput = false;

      function checklName() {
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}$");
        const errorMessage = document.getElementById("errorlname");

        if (exp.test(secondName.value)) {
          errorMessage.setAttribute("hidden", "");
          checklNameInput = true;
        } else {
          errorMessage.innerHTML = "Skriv ditt efternamn med bokstäver";
          errorMessage.removeAttribute("hidden");
          checklNameInput = false;
        }
        activatesubmitButton();
      }
      // E-mail
      email.addEventListener("change", checkemail);
      let checkemailInput = false;

      function checkemail() {
        const exp = new RegExp(
          "^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$"
        );
        const errorMessage = document.getElementById("erroremail");

        if (exp.test(email.value)) {
          errorMessage.setAttribute("hidden", "");
          checkemailInput = true;
        } else {
          errorMessage.innerHTML = "Skriv e-postadress";
          errorMessage.removeAttribute("hidden");
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
          checkphoneInput = true;
        } else {
          errorMessage.innerHTML = "Skriv med hjälp av siffor och bindestreck";
          errorMessage.removeAttribute("hidden");
          checkphoneInput = false;
        }
        activatesubmitButton();
      }
      // Adress
      street.addEventListener("change", checkstreet);
      let checkstreetInput = false;

      function checkstreet() {
        const exp = new RegExp("^[0-9A-Za-zÅÄÖåäö\-]");
        const errorMessage = document.getElementById("erroradress");

        if (exp.test(street.value)) {
          errorMessage.setAttribute("hidden", "");
          checkstreetInput = true;
        } else {
          errorMessage.innerHTML = "Skriv din address";
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
          checkzipInput = true;
        } else {
          errorMessage.innerHTML = "Skriv ditt postnummer med hjälp av siffror";
          errorMessage.removeAttribute("hidden");
          checkzipInput = false;
        }
        activatesubmitButton();
      }
      // Postort
      city.addEventListener("change", checkcity);
      let checkcityInput = false;

      function checkcity() {
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}$");
        const errorMessage = document.getElementById("errorcity");

        if (exp.test(city.value)) {
          errorMessage.setAttribute("hidden", "");
          checkcityInput = true;
        } else {
          errorMessage.innerHTML = "Skriv din postort";
          errorMessage.removeAttribute("hidden");
          checkcityInput = false;
        }
        activatesubmitButton();
      }
      // Personnummer
      personNr.addEventListener("change", checkpersonNr);
      let checkpersonNrInput = false;

      function checkpersonNr() {
        const exp = new RegExp("^[-0-9]");
        const errorMessage = document.getElementById("errorpersonnr");

        if (exp.test(personNr.value)) {
          errorMessage.setAttribute("hidden", "");
          checkpersonNrInput = true;
        } else {
          errorMessage.innerHTML = "Skriv med siffor och bindestreck";
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

      // Personnummer show/hide + rensar
      function showfaktura() {
        document.getElementById("persondiv").style.display = "block";
        document.getElementById("kortdiv").style.display = "none";
        document.getElementById("cardNr").value = "";
        document.getElementById("dateNr").value = "";
        document.getElementById("cvcNr").value = "";
      }
      function showcard() {
        document.getElementById("persondiv").style.display = "none";
        document.getElementById("kortdiv").style.display = "block";
        document.getElementById("personNr").value = "";
      }
      //

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
          ((checkcardNrInput &&
            checkdateNrInput &&
            checkcvcNrInput &&
            radiocard.checked) ||
            (checkpersonNrInput && radioinvoice.checked))
        ) {
          submitButton.removeAttribute("disabled");
        } else {
          // Lägger till disable på submit. "" gör att den uppdateras(?)
          submitButton.setAttribute("disabled", "");
        }
      }

