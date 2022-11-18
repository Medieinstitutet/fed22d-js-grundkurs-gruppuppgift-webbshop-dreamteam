     // Reset form
      // // // // Fixa:::::: Ta bort "error" meddelandet
      function clearForm() {
        document.getElementById("contactForm").reset();
        //-- document.getElementsByClassName("error").reset();
      }

      // Personnummer show/hide
      function showDiv() {
        document.getElementById("personNummer").style.display = "block";
      }
      function hideDiv() {
        document.getElementById("personNummer").style.display = "none";
      }
      //

      // Sparar input information
      const form = document.getElementById("contactForm");
      const firstName = document.getElementById("fname");
      const secondName = document.getElementById("lname");
      const personNr = document.getElementById("peronNr");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const street = document.getElementById("street");
      const zip = document.getElementById("zip");
      const city = document.getElementById("city");
      const portCode = document.getElementById("portcode");

      // Validerar form
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        validateInputs();
      });

      // Lägger till "error-message"
      const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
        errorDisplay.innerText = message;
        inputControl.classList.add("error");
        inputControl.classList.remove("success");
      };
      // Tar bort "error-message"
      const setSuccess = (element) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector(".error");
        errorDisplay.innerText = "";
        inputControl.classList.add("success");
        inputControl.classList.remove("error");
      };

      // Tar bort överbliven text/mellanslag
      const validateInputs = () => {
        const fnameValue = firstName.value.trim();
        const lnameValue = secondName.value.trim();
        const idValue = personNr.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const streetValue = street.value.trim();
        const zipValue = zip.value.trim();
        const cityValue = city.value.trim();

        //Förnamn
        if (fnameValue === "") {
          setError(fname, "First name is required");
        } else {
          setSuccess(fname);
        }
        //Efternamn
        if (lnameValue === "") {
          setError(lname, "Last name is required");
        } else {
          setSuccess(lname);
        }
        //Personnummer
        if (idValue === "") {
          setError(peronNr, "Personnummer is required");
        } else {
          setSuccess(peronNr);
        }
        //Email --- Göra så man måste skriva ".com"?
        if (emailValue === "") {
          setError(email, "Email is required");
        } else {
          setSuccess(email);
        }
        // Telefon
        if (phoneValue === "") {
          setError(phone, "Telefonnummer is required");
        } else {
          setSuccess(phone);
        }
        //Address
        if (streetValue === "") {
          setError(street, "Address is required");
        } else {
          setSuccess(street);
        }
        //Postnummer
        if (zipValue === "") {
          setError(zip, "Postnummer is required");
        } else {
          setSuccess(zip);
        }
        //Postort
        if (cityValue === "") {
          setError(city, "Postnummer is required");
        } else {
          setSuccess(city);
        }
      };
      //********************************************
      //********************************************
      //********************************************

