
/* ==============================
   LOVE LETTER
================================ */

const envelope = document.getElementById("envelope");

const openLetterButton = document.getElementById("openLetter");

const letterContent = document.getElementById("letterContent");

let letterOpened = false;

openLetterButton.addEventListener("click", function () {

    if (!letterOpened) {

        envelope.classList.add("open");

        openLetterButton.textContent = "Fechar cartinha ♡";

        letterContent.classList.remove("hidden");

        letterOpened = true;

    } else {

        envelope.classList.remove("open");

        letterContent.classList.add("hidden");

        openLetterButton.textContent = "Abrir minha cartinha ♡";

        letterOpened = false;

    }

});
