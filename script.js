// 1. Menu Mobile (Hamburger)
function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

// 2. Efeito Acordeão no FAQ
document.addEventListener('DOMContentLoaded', () => {
    const perguntas = document.querySelectorAll('.faq-pergunta');

    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const item = pergunta.parentElement;
            
            // Fecha os outros abertos
            document.querySelectorAll('.faq-item').forEach(outroItem => {
                if (outroItem !== item) {
                    outroItem.classList.remove('ativo');
                }
            });
            
            // Abre/Fecha o clicado
            item.classList.toggle('ativo');
        });
    });
});

// 3. Animação Fade-in ao Rolar a Página
const elementos = document.querySelectorAll('.fade-in');

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
        }
    });
}, { threshold: 0.1 });

elementos.forEach(elemento => {
    observador.observe(elemento);
});