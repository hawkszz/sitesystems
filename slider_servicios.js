// Selecciona el slider de servicios
const sliderServicios = document.querySelector('.slider-servicios');

// Selecciona las diapositivas del slider
const slidesServicios = sliderServicios.querySelectorAll('.slide-servicios');

// Selecciona las flechas del slider
const prevServicios = sliderServicios.querySelector('.prev');
const nextServicios = sliderServicios.querySelector('.next');

// Inicializa el índice de la diapositiva actual
let slideIndexServicios = 0;

// Función para mostrar la diapositiva actual
function showSlideServicios() {
  // Calcula el desplazamiento horizontal
  const offset = -slideIndexServicios * 100;

  // Desplaza las diapositivas horizontalmente
  sliderServicios.querySelector('.slides-servicios').style.transform = `translateX(${offset}%)`;

  // Muestra la diapositiva actual
  slidesServicios.forEach((slide, index) => {
    if (index === slideIndexServicios) {
      slide.classList.add('mostrar');
    } else {
      slide.classList.remove('mostrar');
    }
  });
}

// Función para cambiar a la diapositiva anterior
function prevSlideServicios() {
  // Disminuye el índice de la diapositiva actual
  slideIndexServicios--;

  // Si el índice es menor que 0, lo establece en la última diapositiva
  if (slideIndexServicios < 0) {
    slideIndexServicios = slidesServicios.length - 1;
  }

  // Muestra la diapositiva actual
  showSlideServicios();
}

// Función para cambiar a la diapositiva siguiente
function nextSlideServicios() {
    // Aumenta el índice de la diapositiva actual
    slideIndexServicios++;
  
    // Si el índice es mayor que la cantidad de diapositivas, lo establece en la primera diapositiva
    if (slideIndexServicios >= slidesServicios.length) {
      slideIndexServicios = 0;
      // Muestra la primera diapositiva inmediatamente
      sliderServicios.querySelector('.slides-servicios').style.transform = `translateX(0%)`;
      // Agrega un pequeño retraso para asegurarse de que la transición se complete
      setTimeout(() => {
        showSlideServicios();
      }, 500); // ajusta el tiempo de retraso según sea necesario
    } else {
      // Muestra la diapositiva actual
      showSlideServicios();
    }
  }

// Agrega eventos de clic a las flechas
prevServicios.addEventListener('click', prevSlideServicios);
nextServicios.addEventListener('click', nextSlideServicios);

// Muestra la primera diapositiva
showSlideServicios();

// Configura el cambio automático cada 5 segundos
setInterval(nextSlideServicios, 5000);