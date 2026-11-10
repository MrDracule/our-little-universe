
const backgroundMusic = document.getElementById("backgroundMusic");
const audio = document.getElementById("audioPlayer");

const playButton = document.getElementById("playButton");
const vinyl = document.getElementById("vinyl");
const musicStatus = document.getElementById("musicStatus");

// Volume da música ambiente
backgroundMusic.volume = 0.12;

// Volume da trilha sonora
audio.volume = 0.8;

// Retoma a música ambiente
async function resumeBackgroundMusic() {
    try {
        await backgroundMusic.play();
    } catch (error) {
        console.log("Não foi possível retomar a música ambiente:", error);
    }
}

// Botão de reprodução da trilha sonora
playButton.addEventListener("click", async () => {

    if (audio.paused) {

        // Pausa a música ambiente
        backgroundMusic.pause();

        try {
            // Começa a trilha sonora
            await audio.play();

            vinyl.classList.add("playing");
            musicStatus.textContent = "Tocando nossa música... ♡";
            playButton.textContent = "Pause";

        } catch (error) {
            console.log("Erro ao reproduzir a trilha sonora:", error);

            musicStatus.textContent = "Não foi possível reproduzir a música.";

            // Se não conseguir tocar a trilha, retoma o fundo
            resumeBackgroundMusic();
        }

    } else {

        // Pausa a trilha sonora
        audio.pause();

        vinyl.classList.remove("playing");
        musicStatus.textContent = "Nossa música está pausada ♡";
        playButton.textContent = "Play";

        // Volta a música ambiente
        resumeBackgroundMusic();
    }
});

// Quando a trilha sonora terminar
audio.addEventListener("ended", () => {

    vinyl.classList.remove("playing");
    musicStatus.textContent = "Nossa música terminou... ♡";
    playButton.textContent = "Play";

    // Retoma a música ambiente
    resumeBackgroundMusic();
});

// Atualiza a interface se a trilha for pausada
audio.addEventListener("pause", () => {
    vinyl.classList.remove("playing");
});

// Atualiza a interface quando a trilha começa
audio.addEventListener("play", () => {
    vinyl.classList.add("playing");
    playButton.textContent = "Pause";
});
