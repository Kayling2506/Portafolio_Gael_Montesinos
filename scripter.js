
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlides(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index || i === index + 1) {
        slide.classList.add('active');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    if (currentIndex === slides.length - 1) currentIndex = slides.length - 2;
    showSlides(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    if (currentIndex >= slides.length - 1) currentIndex = 0;
    showSlides(currentIndex);
  });

  showSlides(currentIndex);

  //Función de carga de Elección de modelo de coche
function mostrarDescripcion(elemento) {
  const texto = elemento.querySelector(".descripcion");
  texto.style.display = texto.style.display === "block" ? "none" : "block";
}

//Funcion de carga de imagenes
