
/* ==============================
   100 REASONS WHY I LOVE YOU
================================ */

const reasons = [

    "Seu sorriso ilumina meus dias.",

    "O jeito que você me faz rir.",

    "Sua voz é uma das minhas coisas favoritas.",

    "A maneira como você demonstra carinho. (Me agredindo, as vezes, no caso)",

    "Seu jeitinho único de ser.(pistola com tudo)",

    "Até suas pequenas manias.",

    "A paz que sinto quando estou com você.(Eita paz boa, to todo vermelho do tanto que eu sou agredido, e olha que eu nao te deixo com raiva)",

    "O jeito que você consegue melhorar meu dia.",

    "Cada conversa que temos.",

    "Porque simplesmente é você. ♡"

];

const reasonsGrid = document.getElementById("reasonsGrid");

reasons.forEach((reason, index) => {

    const card = document.createElement("div");

    card.classList.add("reason-card");

    card.innerHTML = `
        <span class="reason-icon">♡</span>

        <p>Motivo ${index + 1}</p>
    `;

    card.addEventListener("click", function () {

        card.innerHTML = `
            <span class="reason-icon">♥</span>

            <p>${reason}</p>
        `;

        card.classList.add("revealed");

        card.style.background = "#fff0f3";

    });

    reasonsGrid.appendChild(card);

});
