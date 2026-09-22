/* ============ DATOS ============ */
const motivos = [
    {
        icono: "😂",
        titulo: "Tu risa",
        texto: "La que se me quedó grabada y que aún puedo escuchar cuando cierro los ojos."
    },
    {
        icono: "✨",
        titulo: "Tu manera de ser",
        texto: "Auténtica, sin filtros, sin máscaras. Así como eres."
    },
    {
        icono: "💛",
        titulo: "Tu empatía",
        texto: "La forma en que sientes a los demás, incluso cuando nadie te lo pide."
    },
    {
        icono: "🌻",
        titulo: "Lo que harías por amor",
        texto: "Esa entrega que no cualquiera tiene y que te hace única."
    },
    {
        icono: "🌸",
        titulo: "Tu ser",
        texto: "Todo lo que eres, incluso lo que tú misma no ves."
    }
];

const mensajesFlores = [
    "Gracias por haber sido mi persona en el momento exacto en que necesitaba a alguien.",
    "Nunca olvidaré las cosas que vivimos juntos, buenas y no tan buenas.",
    "Ojalá la vida te trate bonito, porque te lo mereces.",
    "Donde sea que estés, siempre te voy a recordar con cariño.",
    "Fuiste, eres y serás una de las personas más importantes de mi historia."
];

/* ============ CONTROL DE PANTALLAS ============ */
function nextScreen(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen' + num);
    if (target) {
        target.classList.add('active');
        target.scrollTop = 0;
    }

    // Inicializar elementos según pantalla
    if (num === 3) inicializarMotivos();
    if (num === 4) inicializarFlores();
}

/* ============ TARJETAS DE MOTIVOS ============ */
let motivosVolteados = 0;

function inicializarMotivos() {
    const grid = document.getElementById('cardsGrid');
    if (!grid || grid.children.length > 0) return;

    motivos.forEach((m, index) => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">${m.icono}</div>
                <div class="flip-card-back">${m.texto}</div>
            </div>
        `;

        card.addEventListener('click', () => {
            if (card.classList.contains('flipped')) return;
            card.classList.add('flipped');
            motivosVolteados++;

            if (motivosVolteados === motivos.length) {
                document.getElementById('btnMotivos').disabled = false;
            }
        });

        grid.appendChild(card);
    });
}

/* ============ FLORES INTERACTIVAS ============ */
let floresUsadas = 0;

function inicializarFlores() {
    const grid = document.getElementById('flowersGrid');
    if (!grid || grid.children.length > 0) return;

    const flores = ['🌻', '🌼', '🌻', '🌼', '🌻'];

    flores.forEach((flor, index) => {
        const flowerEl = document.createElement('div');
        flowerEl.className = 'flower-option';
        flowerEl.textContent = flor;

        flowerEl.addEventListener('click', () => {
            if (flowerEl.classList.contains('used')) return;

            flowerEl.classList.add('selected', 'used');
            floresUsadas++;

            const msg = document.getElementById('flowerMessage');
            msg.textContent = mensajesFlores[index];
            msg.classList.add('show');

            if (floresUsadas === flores.length) {
                document.getElementById('btnFlores').disabled = false;
            }
        });

        grid.appendChild(flowerEl);
    });
}

/* ============ SOBRE SORPRESA ============ */
function openEnvelope() {
    const env = document.getElementById('envelope');
    const surprise = document.getElementById('finalSurprise');

    if (env.classList.contains('open')) return;

    env.classList.add('open');

    setTimeout(() => {
        surprise.classList.add('show');
        // Lluvia intensa de flores al abrir
        for (let i = 0; i < 30; i++) {
            setTimeout(() => crearPetalo(), i * 100);
        }
    }, 500);
}

/* ============ PÉTALOS CAYENDO ============ */
function crearPetalo() {
    const container = document.getElementById('petals');
    const petal = document.createElement('div');
    petal.className = 'petal';

    const flores = ['🌼', '🌻', '💛', '🌼', '🌻'];
    petal.textContent = flores[Math.floor(Math.random() * flores.length)];

    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
    petal.style.fontSize = (Math.random() * 1 + 1) + 'rem';

    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);
}

/* Iniciar lluvia de pétalos constante */
setInterval(() => {
    crearPetalo();
}, 800);

/* Crear algunos al inicio */
for (let i = 0; i < 5; i++) {
    setTimeout(crearPetalo, i * 400);
}