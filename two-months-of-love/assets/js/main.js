
/* ==============================
   MAIN - OUR LITTLE UNIVERSE
================================ */

const startButton = document.getElementById("startButton");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");
const floatingHearts = document.getElementById("floatingHearts");

// ENTRADA NO SITE
startButton.addEventListener("click", async function () {

    // Esconde a tela inicial
    welcome.classList.add("hidden");

    // Mostra o conteúdo principal
    mainContent.classList.remove("hidden");

    // Volta para o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Inicia os corações flutuantes
    startHeartAnimation();

    // Inicia a música ambiente
    const backgroundMusic = document.getElementById("backgroundMusic");

    try {
        await backgroundMusic.play();
    } catch (error) {
        console.log("Não foi possível iniciar a música ambiente:", error);
    }

});

// CORAÇÕES FLUTUANTES
function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    floatingHearts.appendChild(heart);

    // Remove depois da animação
    setTimeout(() => {
        heart.remove();
    }, 12000);

}

// INICIAR ANIMAÇÃO
function startHeartAnimation() {

    // Criar alguns corações iniciais
    for (let i = 0; i < 10; i++) {
        setTimeout(createHeart, i * 300);
    }

    // Continuar criando corações
    setInterval(createHeart, 1200);

}
