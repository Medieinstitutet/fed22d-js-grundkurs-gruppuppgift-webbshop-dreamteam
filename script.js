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
