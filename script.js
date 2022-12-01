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
    price: 23,
    rating: 4,
    amount: 0,
    image1: './images/chocolate-sprinkle-1.jpg',
    image2: './images/chocolate-sprinkle-2.jpg',
    category: 'Choklad',
  },
  {
    name: 'Glaserad munk',
    price: 15,
    rating: 4,
    amount: 0,
    image1: './images/glazed-donut-1.jpg',
    image2: './images/glazed-donut-2.jpg',
    category: 'Övriga',
  },
  {
    name: 'Chokladmunk',
    price: 19,
    rating: 2,
    amount: 0,
    image1: './images/chocolate-1.jpg',
    image2: './images/chocolate-2.jpg',
    category: 'Choklad',
  },
  {
    name: 'Vaniljmunk',
    price: 18,
    rating: 1,
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
    price: 25,
    rating: 4,
    amount: 0,
    image1: './images/apple-1.jpg',
    image2: './images/apple-2.jpg',
    category: 'Bär och frukt',
  },
  {
    name: 'Citronmunk',
    price: 22,
    rating: 2,
    amount: 0,
    image1: './images/lemon-1.jpg',
    image2: './images/lemon-2.jpg',
    category: 'Bär och frukt',
  },
  {
    name: 'Hallonmunk',
    price: 20,
    rating: 5,
    amount: 0,
    image1: './images/raspberry-1.jpg',
    image2: './images/raspberry-2.jpg',
    category: 'Bär och frukt'
  },
  {
    name: 'Trippel chokladmunk',
    price: 30,
    rating: 4,
    amount: 0,
    image1: './images/triple-chocolate-1.jpg',
    image2: './images/triple-chocolate-2.jpg',
    category: 'Choklad'
  },
  {
    name: 'Nougatmunk',
    price: 35,
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
            <img src="${donuts[i].image1}" width="290" height="290" alt="" class="donutImage1" id="donutImage1">
            <img src="${donuts[i].image2}" width="290" height="290" alt="" class="donutImage2" id="donutImage2">                                 
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
          <span class="price">Styckpris: ${donuts[i].price} kr</span><br>
          <span class="amount">Antal: ${donuts[i].amount} st</span><br>
          <span class="priceDefault">Pris: ${donuts[i].price * donuts[i].amount} kr</span><br>
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
    `};
// // // // // // // // // INPUT i - donutContainerInput - (om den ska användas)  <input class="CustomInput" type="number" value="0" data-id="${i}"> 
    const prevImageBtn = document.querySelectorAll('#prevImg');       
    const nextImageBtn = document.querySelectorAll('#nextImg');

    for (let i = 0; i < prevImageBtn.length; i++){                     
      prevImageBtn[i].addEventListener('click', swapImages);           
      nextImageBtn[i].addEventListener('click', swapImages);           
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
    // document.querySelectorAll('.CustomInput').forEach((input) => {
    //   input.addEventListener('text', customDonutAmount);
    // });
    document.querySelectorAll('.remove').forEach((btn) => {
      btn.addEventListener('click', removeDonutAmount);
    });
  

  
  


    donutsOrderPrice();
    printOrdredDonuts();             
  
  }  // // // // // // // // // //

      categoryBtn = document.querySelector('#sortCategory');
      categoryBtn.addEventListener('click', categoryOrder);

      function categoryOrder() {

        donuts.sort((a, b) => {

        if (a.category < b.category ) { return -1; }

        if (a.category  > b.category ) { return 1; }

        return 0;

      });

      renderDonuts();

      }


    // sortering efter namn pris och rating
    const nameBtn = document.querySelector("#sortName");
    nameBtn.addEventListener('click', nameOrder);

    function nameOrder() {
    
      donuts.sort((a, b) => {
    
      if (a.name < b.name) { return -1; }
    
      if (a.name > b.name) { return 1; }
    
      return 0;
    
    });
    
    renderDonuts();
    
    }
    
    const ratingBtn = document.querySelector("#sortRating");
    ratingBtn.addEventListener("click", sortRating);
    
    function sortRating() {
      donuts.sort((donut1, donut2) => donut1.rating - donut2.rating);
  
      renderDonuts();
    };
    

    const priceBtn = document.querySelector("#sortPrice");
    priceBtn.addEventListener("click", sortPrice);

    function sortPrice() {
      donuts.sort((donut1, donut2) => donut1.price - donut2.price);

      renderDonuts();
    };
    
    // prisrange slider
    const filteredDonutsInPriceRange = [...donuts];
    const priceRangeSlider = document.querySelector("#priceRange");
    const currentRangeValue = document.querySelector("#currentRangeValue");
  
    priceRangeSlider.addEventListener("input", changePriceRange);
  
     function changePriceRange() {
     const currentPrice = priceRangeSlider.value;
     currentRangeValue.innerHTML = currentPrice;
  
      filteredDonutsInPriceRange = donuts.filter(
     (donuts) => donuts.price <= currentPrice);
  
  
   renderDonuts();
  };

                                                          // Summan av alla munkar + totalsumman + händelser
  function donutsOrderPrice(){
    let donutTotalPrice =0; // Totalsumma för donuts (fyller ingen funktion här)
    const discountAlert = document.querySelector('.discountAlert'); // 
    const newDate = new Date();
    const startDate = new Date(newDate.getFullYear(), 0, 1);
    const days = Math.floor((newDate - startDate) / (24 * 60 * 60 * 1000));
    const weekNum = Math.ceil(days / 7);

const donutValue = donuts.reduce(
  (previousValue, donut) => {
    return (donut.amount * donut.price) + previousValue;
  }, 0 );

 if (newDate.getDay() === 1 && newDate.getHours() < 10){
  
  discountAlert.innerHTML = `<span> Måndagsrabatt! 10% på hela beställningen!</span>`
 donutTotalPrice = Math.round(donutValue * 0.9);
} 
else if ((newDate.getDay() === 5 && newDate.getHours() > 15) || newDate.getDay() === 6 || newDate.getDay() === 0 || (newDate.getDay() === 1 && newDate.getHours() < 3)){
  
 donutTotalPrice = Math.round(donutValue * 1.15); ///////////////////////////////utan priset ska bara vara högre i "utskriften" av munkarna.
  
   
 }  else if (weekNum % 2 === 0 && newDate.getDay()=== 2 && donutValue>25){
  discountAlert.innerHTML = `<span> 25 kronor rabatt om du handlar för mer än 25 kronor!</span>`
  donutTotalPrice = Math.round(donutValue - 25);
} 
 else {
   donutTotalPrice = Math.round(donutValue + 0);
}

////////////////////////

///////////////////////

 /////////////////////////////////////// utskrift av pris
  const cartTotal = document.querySelector('.cartTotal');
  cartTotal.innerHTML = donutTotalPrice;
  
  }



   // Utskrift av order
  function printOrdredDonuts() {
    document.querySelector('.cartName').innerHTML = '';
    document.querySelector('#receiptOrderDonut').innerHTML = '';
    for(let i = 0; i < donuts.length; i++) {
      if (donuts[i].amount > 0) {
        document.querySelector('.cartName').innerHTML += `<div> <span class="cartNameProduct">Produkt: ${donuts[i].name}<br></span> <span class="cartNameQuantity">Antal: ${donuts[i].amount}</span> <span class="cartNamePrice">Pris: ${donuts[i].amount * donuts[i].price}<br><hr></span></div>`;
        document.querySelector('#receiptOrderDonut').innerHTML += `<span>Produkt:  ${donuts[i].name} Antal: ${donuts[i].amount} Pris: ${donuts[i].amount * donuts[i].price}<br></span>`;
        
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
    
////////////////// Luciamunk///////////////////////////////////// 

const newDate = new Date();                                                  
    if(newDate.getMonth() === 11 && newDate.getDate() === 13 )                   
    {
      document.querySelector('.cartName').innerHTML += `<div> <span class="cartNameProduct">Produkt: Luciamunk <br></span> <span class="cartNameQuantity">Antal: 1</span> <span class="cartNamePrice">Pris: 0<br><hr></span></div>`;                                    
                                                           
    }

///////////////// Jultema////////////////////// 
if(newDate.getMonth() === 11 && newDate.getDate() === 24){
  const themeH1 = document.querySelector('h1');
  themeH1.style.color = 'red';
}

// ***********************************
// Sparar input information

      const submitButton = document.getElementById("submit");
      const contactForm = document.getElementById("contactForm");
      const userInputPayment = contactForm.elements['betalning'];
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
      const gdpr = document.getElementById('gdpr');
      const userForm = document.getElementById('userForm');
      const shop = document.getElementById('shop');
      const CheckOutButton = document.getElementById('CheckOutButton');
      const CheckOutButtonBack = document.getElementById('CheckOutButtonBack');
      const cartTotal = document.getElementById('cartTotal');
      const allDonuts = document.getElementById('allDonuts');
      const clearCart = document.getElementById('clearCart');
      const deliveryTime = document.getElementById('deliveryTime');
      const receiptOrder = document.getElementById('receiptOrder');
      const receiptOrderName = document.querySelector("#receiptOrderName");
      const receiptOrderContactInformation = document.getElementById("receiptOrderContactInformation");
      const resetForm = document.getElementById("resetForm");
      
      // Tömmer formulär
      resetForm.addEventListener('click', resetFormButton);
      function resetFormButton(){
        document.getElementById('contactForm').reset();
        
       }
       setInterval(orderTimeOut, 900000);
       function orderTimeOut() {
       resetFormButton();
         alert('Du är för långsam, kontaktformuläret har återställts!');
       }

      // Tömmer varukorgen

      clearCart.addEventListener('click', clearCartButton);
      function clearCartButton(e){

        for (let i = 0; i < donuts.length; i++){
          donuts[i].amount=0;
        }
        renderDonuts();
      }


        // Gå vidare till kundinformation

        CheckOutButton.addEventListener("click", continueToPayment);
        function continueToPayment() {
                    
          userForm.style.display = 'block';
          shop.style.display = 'none';
          allDonuts.style.display = 'none';
          
      }

        // Gå tillbaka till varukorgen

        CheckOutButtonBack.addEventListener("click", backToCheckout);
        function backToCheckout () {
          
          userForm.style.display = 'none';
          shop.style.display = 'block';
          allDonuts.style.display = '';
        }




      ///beställningsknappen///////////
// Submit-button + kvitto

submitButton.addEventListener("click", orderCompilation);

 function orderCompilation(e){
  e.preventDefault();
  receiptOrder.style.display = "block";
  userForm.style.display = 'none';
  

// Leveranstid

const newDate = new Date();

// Leverans på lördag och söndag
 if (newDate.getDay()===7 || newDate.getDay()===0){ 
  deliveryTime.innerHTML = 'Ordern levereras om 1,5 timme!';   
} else if (newDate.getDay() === 5 && newDate.getHours() >= 11 && newDate.getHours() <= 13){
  deliveryTime.innerHTML = 'Ordern levereras klockan 15:00!';      
} else if(newDate.getHours() >= 22 || newDate.getHours() <= 5) {
  deliveryTime.innerHTML = 'Ordern levereras om 45 minuter!';  
} else {
  deliveryTime.innerHTML = 'Ordern levereras om 30 minuter!';       
}


// Skriver ut innehåll från formuläret "receiptOrder". Array istället?

 receiptOrderName.innerHTML = `Tack för beställningen ${fname.value} ${lname.value}!`;
 receiptOrderContactInformation.innerHTML = 
 `Kontaktuppgifter: <br>  
 Namn: ${fname.value} ${lname.value} <br> 
 E-mail: ${email.value} <br> 
 Telefon: ${phone.value} <br>
 Adress: ${street.value} <br> 
 Postnummer: ${zip.value} <br> 
 Postort: ${city.value} <br>
 Portkod: ${portCode.value} <br>
 Betalning: ${userInputPayment.value} <br>`;
}

    
      // Förnamn
      firstName.addEventListener("change", checkfName);
      let checkfNameInput = false;

      function checkfName() {
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}");
        const errorMessage = document.getElementById("errorfname");

        if (exp.test(firstName.value)) {
          errorMessage.setAttribute("hidden", "");
          document.getElementById("fname").style=null;
          checkfNameInput = true;
        } else {
          errorMessage.innerHTML = "Skriv ditt förnamn med bokstäver";
          document.getElementById("fname").style.color = "red";  
          document.getElementById("fname").style.border = "dotted red";
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
          document.getElementById("lname").style=null;
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
        const exp = new RegExp(
          "^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$"
        );
        const errorMessage = document.getElementById("erroremail");

        if (exp.test(email.value)) {
          errorMessage.setAttribute("hidden", "");
          document.getElementById("email").style=null;
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
          document.getElementById("phone").style=null;
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
        const exp = new RegExp("^[0-9A-Za-zÅÄÖåäö\-]");
        const errorMessage = document.getElementById("erroradress");

        if (exp.test(street.value)) {
          errorMessage.setAttribute("hidden", "");
          document.getElementById("street").style=null;
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
          document.getElementById("zip").style=null;
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
        const exp = new RegExp("^[A-Za-zÅÄÖåäö\-]{1,}$");
        const errorMessage = document.getElementById("errorcity");

        if (exp.test(city.value)) {
          errorMessage.setAttribute("hidden", "");
          document.getElementById("city").style=null;
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
          document.getElementById("personNr").style=null;
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
        const exp = new RegExp("^[-0-9]{10}$");
        const errorMessage = document.getElementById("errorkortnr");

        if (exp.test(cardNr.value)) {
          errorMessage.setAttribute("hidden", "");
          checkcardNrInput = true;
        } else {
          errorMessage.innerHTML = "Skriv med siffor, 16 stycken";
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

      // checkGdprInput = gdpr.checked;  
      






        //GDPR
        gdpr.addEventListener('click', checkGdpr);
        let checkGdprInput = false;                                                  

        function checkGdpr(){
          if (checkGdprInput = gdpr.checked){
             checkGdprInput=true;

         } else {
          checkGdprInput = false; 
         }
         activatesubmitButton();
        }


      // Personnummer show/hide + rensar                              ---- Göra till en div och bara köra en rad?
      
      radioinvoice.addEventListener('click', radioinvoiceClick);
      function radioinvoiceClick() {
        document.getElementById("persondiv").style.display = "block";
        document.getElementById("kortdiv").style.display = "none";
        document.getElementById("cardNr").value = "";
        document.getElementById("dateNr").value = "";
        document.getElementById("cvcNr").value = "";
      }

      
      radiocard.addEventListener('click', radiocardClick);
      function radiocardClick() {
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
          checkGdprInput &&
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
