//dark and light
const darkMode = document.getElementById('dark-mode');
const lightMode = document.getElementById('light-mode');
      
darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark_mode')
  darkMode.classList.toggle('hide')
  lightMode.classList.remove('hide')

})

lightMode.addEventListener('click', () => {
  document.body.classList.remove('dark_mode')
  lightMode.classList.toggle('hide')
  darkMode.classList.remove('hide')
})


// munkarray filip
const donuts = [
  {
    name: 'Chokladmunk med strössel',
    price: 20,
    rating: 4,
    amount: 0,
    image1: './images/chocolate-sprinkle-1.jpg',
    image2: './images/chocolate-sprinkle-2.jpg',
    category: 'Choklad',
  },
  {
    name: 'Glaserad munk',
    price: 12,
    rating: 4,
    amount: 0,
    image1: './images/glazed-donut-1.jpg',
    image2: './images/glazed-donut-2.jpg',
    category: 'Övriga',
  },
  {
    name: 'Chokladmunk',
    price: 15,
    rating: 5,
    amount: 0,
    image1: './images/chocolate-1.jpg',
    image2: './images/chocolate-2.jpg',
    category: 'Choklad',
  },
  {
    name: 'Vaniljmunk',
    price: 15,
    rating: 5,
    amount: 0,
    image1: './images/vanilla-1.jpg',
    image2: './images/vanilla-2.jpg',
    category: 'Vanilj',
  },
  {
    name: 'Jordgubbsmunk',
    price: 15,
    rating: 4,
    amount: 0,
    image1: './images/strawberry-1.jpg',
    image2: './images/strawberry-2.jpg',
    category: 'Bär och frukt',
  },
  {
    name: 'Äppelmunk',
    price: 17,
    rating: 4,
    amount: 0,
    image1: './images/apple-1.jpg',
    image2: './images/apple-2.jpg',
    category: 'Bär och frukt',
  },
  {
    name: 'Citronmunk',
    price: 17,
    rating: 2,
    amount: 0,
    image1: './images/lemon-1.jpg',
    image2: './images/lemon-2.jpg',
    category: 'Bär och frukt',
  },
  {
    name: 'Hallonmunk',
    price: 18,
    rating: 5,
    amount: 0,
    image1: './images/raspberry-1.jpg',
    image2: './images/raspberry-2.jpg',
    category: 'Bär och frukt'
  },
  {
    name: 'Trippel chokladmunk',
    price: 20,
    rating: 4,
    amount: 0,
    image1: './images/triple-chocolate-1.jpg',
    image2: './images/triple-chocolate-2.jpg',
    category: 'Choklad'
  },
  {
    name: 'Nougatmunk',
    price: 22,
    rating: 3,
    amount: 0,
    image1: './images/nougat-1.jpg',
    image2: './images/nougat-2.jpg',
    category: 'Choklad'
  },
];

// sortera munkar mostapha?



// munk render filip
const donutContainer = document.querySelector('#allDonuts');
const basketDonuts = document.querySelector('#basketDonuts') 
const totalPriceBasket = document.querySelector('#totalAmountBasket');

function renderDonuts() {
  donutContainer.innerHTML = '';
  
  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `
        <article class="donut">
          <h2>${donuts[i].name}</h2><br>
          <section class="donutCardContainer">
<div class="donutCardImgContainer">
<div class="controlsImgSlideshow" id="controlsImgSlideshow">
         
      <div class="myImages">
            <img src="${donuts[i].image1}" width="300" height="300" alt="" class="donutImage1" id="donutImage1">
            <img src="${donuts[i].image2}" width="300" height="300" alt="" class="donutImage2" id="donutImage2">                                 
    </div>
      <div class="controls">
            <button class="left" id="prevImg">
             <span class="material-symbols-outlined"><</span>
            </button>
            <button class="right" id="nextImg">
              <span class="material-symbols-outlined">></span>
            </button>
    </div>
    </div>
      <div class="donutContainerPrice">
          <span class="price">Styckpris: ${donuts[i].price} kr</span><br>
          <span class="amount">Antal köpta:  ${donuts[i].amount} st</span><br>
          <span class="amount">Pris:  ${donuts[i].price * donuts[i].amount} kr</span><br>
           <span class="rating">Betyg: ${donuts[i].rating}/5</span> 

    </div>
    </div>
      <div class="donutContainerInput">
          <button class="remove" data-id="${i}" >-</button>
          
          <button class="add" data-id="${i}">+</button>
     </div>
          </section>
        </article>
    `};
// // // // // // // // // INPUT i - donutContainerInput - (om den ska användas)  <input class="CustomInput" type="number" value="0" data-id="${i}"> 
    const prevImageBtn = document.querySelectorAll('#prevImg');       
    const nextImageBtn = document.querySelectorAll('#nextImg');

    for (let i = 0; i < prevImageBtn.length; i++){                     
      prevImageBtn[i].addEventListener('click', swapImages)           
      nextImageBtn[i].addEventListener('click', swapImages)           
  }
  function swapImages(e){
    const donutcardImg1Slideshow = e.currentTarget.parentElement.parentElement.querySelector('#donutImage1');         
    const donutCardImg2Slideshow = e.currentTarget.parentElement.parentElement.querySelector('#donutImage2');         

    const firstDonut = donutcardImg1Slideshow.getAttribute('src');                  
    const secondDonut = donutCardImg2Slideshow.getAttribute('src');                 

    donutcardImg1Slideshow.setAttribute('src', secondDonut);                        
    donutCardImg2Slideshow.setAttribute('src', firstDonut);                         
};

    document.querySelectorAll('.add').forEach((btn) => {
      btn.addEventListener('click', updateDonutAmount);
    });
    document.querySelectorAll('.CustomInput').forEach((input) => {
      input.addEventListener('text', customDonutAmount);
    });
    document.querySelectorAll('.remove').forEach((btn) => {
      btn.addEventListener('click', removeDonutAmount);
    });
  

  
  // Summan av alla munkar (Denna behöver ändras när vi ska lägga till extra kostnader)
    const sum = donuts.reduce(
    (previousValue, donut) => {
      return (donut.amount * donut.price) + previousValue;
    },
  
    0
  
    );
    printOrdredDonuts();             
  
    document.querySelector('.cartTotal').innerHTML = sum;
    document.querySelector('.totalAmount').innerHTML = sum;
  }

  // Utskrift i Varukorg
  function printOrdredDonuts() {
    document.querySelector('.cartName').innerHTML = '';
  
    for(let i = 0; i < donuts.length; i++) {
      if (donuts[i].amount > 0) {
        document.querySelector('.cartName').innerHTML += `<p>Produkt: ${donuts[i].name} Antal: ${donuts[i].amount} Kostnad: ${donuts[i].amount * donuts[i].price}</p>`;
        
      }
    }
  }
  
  



   // Lägger till antal på munk - custom  -- FUNKAR EJ (än)
   function customDonutAmount(e) {
   const donutClicked = e.currentTarget.dataset.id;
    donuts[donutClicked].click;
  
  
  renderDonuts();
   }
  
  
  
  // Lägger till antal på munk
  function updateDonutAmount(e) {
    const donutClicked = e.currentTarget.dataset.id;
    donuts[donutClicked].amount += 1;
  
  
  renderDonuts();
  }
  
  
  // Tar bort antal på munk
  function removeDonutAmount(e){
    const donutClicked = e.currentTarget.dataset.id;
  
    if(donuts[donutClicked].amount > 0){
        donuts[donutClicked].amount -= 1; 
     
    }
        renderDonuts(); 
  }
  
  renderDonuts();
    


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
          document.getElementById("errorfname").style.color = "red";  ////////////////////////////////////// Hur gör man för att lägga till alla enkelt?
          document.getElementById("errorfname").style.border = "solid red";
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
