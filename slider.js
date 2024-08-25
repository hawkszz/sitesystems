const sliders = document.querySelectorAll('.slider'); // Selecciona todos los sliders en la página

// Mantenemos un índice de cada slider
const slideIndexes = Array.from({ length: sliders.length }, () => 0);

function showSlides(slider, index) {
    const slides = slider.querySelectorAll('.slide');
    if (slides.length > 0) {
        const offset = -index * 100;
        slider.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }
}

function plusSlides(n, slider, sliderIndex) {
    const slides = slider.querySelectorAll('.slide');
    slideIndexes[sliderIndex] = (slideIndexes[sliderIndex] + n + slides.length) % slides.length;
    showSlides(slider, slideIndexes[sliderIndex]);
}

// Configura el slider para cambiar automáticamente cada 5 segundos
function autoSlides(slider, sliderIndex) {
    const slides = slider.querySelectorAll('.slide');
    slideIndexes[sliderIndex] = (slideIndexes[sliderIndex] + 1) % slides.length;
    showSlides(slider, slideIndexes[sliderIndex]);
}

// Inicia la presentación automática y configura eventos de clic para las flechas
document.addEventListener('DOMContentLoaded', () => {
    sliders.forEach((slider, index) => {
        showSlides(slider, slideIndexes[index]); // Muestra la primera diapositiva

        // Configura el cambio automático cada 5 segundos
        setInterval(() => autoSlides(slider, index), 5000); 

        const prev = slider.querySelector('.prev');
        const next = slider.querySelector('.next');

        if (prev && next) {
            prev.addEventListener('click', () => plusSlides(-1, slider, index));
            next.addEventListener('click', () => plusSlides(1, slider, index));
        }
    });
});
// Maneja el cambio de estilo del encabezado al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const header = document.getElementById("mainHeader");
        console.log(window.scrollY); // Verifica el valor del scroll
        if (window.scrollY > 50) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });
});
document.getElementById("phoneLink").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que se abra el enlace
    const phoneNumber = this.innerText; // Obtener el texto del enlace (número de teléfono)

    navigator.clipboard.writeText(phoneNumber).then(function() {
        // Mostrar el mensaje de éxito
        const statusMessage = document.getElementById("status");
        statusMessage.style.display = "block"; // Mostrar el mensaje
        statusMessage.innerText = "Número copiado al portapapeles.";

        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            statusMessage.style.display = "none";
        }, 3000);
    }).catch(function(error) {
        // Manejar errores
        const statusMessage = document.getElementById("status");
        statusMessage.style.display = "block";
        statusMessage.innerText = "Error al copiar el número.";
        console.error("Error al copiar: ", error);

        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            statusMessage.style.display = "none";
        }, 3000);
    });
});
const labelMenu = document.querySelector('.label_menu');
const navbarUl = document.querySelector('.navbar ul');
const menuHamb = document.querySelector('.menu_hamb');

labelMenu.addEventListener('click', () => {
  navbarUl.classList.toggle('show');
  menuHamb.checked = !menuHamb.checked;
});