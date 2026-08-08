// ----- HAMBURGER MENU -----
document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const titleHeader = document.querySelector('.title-header');

    burgerButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        burgerButton.classList.toggle('open');
        titleHeader.classList.toggle('hidden');
    });

    // Cerrar menú al hacer clic en un enlace
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
            burgerButton.classList.remove('open');
            titleHeader.classList.remove('hidden');
        });
    });

    // ----- TARJETAS EXPANDIBLES -----
    const cards = document.querySelectorAll('.gallery-card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Si la tarjeta ya está expandida, la cerramos
            if (this.classList.contains('expanded')) {
                this.classList.remove('expanded');
                return;
            }

            // Cerrar cualquier otra tarjeta expandida
            cards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.remove('expanded');
                }
            });

            // Expandir la tarjeta clickeada
            this.classList.add('expanded');

            // Scroll suave hacia la tarjeta (opcional)
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
});