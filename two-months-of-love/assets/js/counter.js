
/* ==============================
   COUNTER - OUR TIME
================================ */

// ALTERE PARA A DATA REAL DO NAMORO
// Formato: ANO, MÊS - 1, DIA, HORA, MINUTO

const relationshipDate = new Date(
    2026, 8, 8, 1, 0, 0
);

function updateCounter() {

    const now = new Date();

    const difference = now - relationshipDate;

    if (difference < 0) {
        return;
    }

    // Calcular meses completos
    let months =
        (now.getFullYear() - relationshipDate.getFullYear()) * 12 +
        (now.getMonth() - relationshipDate.getMonth());

    const anniversary = new Date(relationshipDate);
    anniversary.setMonth(
        relationshipDate.getMonth() + months
    );

    if (anniversary > now) {
        months--;
    }

    // Último aniversário mensal
    const lastAnniversary = new Date(relationshipDate);
    lastAnniversary.setMonth(
        relationshipDate.getMonth() + months
    );

    const differenceAfterMonths = now - lastAnniversary;

    const days = Math.floor(
        differenceAfterMonths / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (differenceAfterMonths / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (differenceAfterMonths / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (differenceAfterMonths / 1000) % 60
    );

    // Atualizar HTML
    document.getElementById("months").textContent =
        String(months).padStart(2, "0");

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

// Executar imediatamente
updateCounter();

// Atualizar a cada segundo
setInterval(updateCounter, 1000);
