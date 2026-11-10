
/* ==============================
   FINAL SURPRISE
================================ */

const surpriseButton = document.getElementById("surpriseButton");

const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.remove("hidden");

    surpriseButton.textContent = "Você é meu presente favorito ♡";

    surpriseButton.disabled = true;

    // Mostrar a mensagem na tela
    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});
