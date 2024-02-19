"use strict"; /* ayuda a escribir código más seguro y más limpio al detectar y prevenir errores que de otra manera podrían pasar desapercibidos. 
Se recomienda su uso en todos los nuevos desarrollos de JavaScript.*/

const sliders = document.querySelectorAll("[data-slider]");

const sliderInit = function (currentSlider) {
  const sliderContainer = currentSlider.querySelector(
    "[data-slider-container]" // Selecciona el primer elemento que coincida con el selector 
  );
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]"); 
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  const totalSliderVisibleItems = Number(
    getComputedStyle(currentSlider).getPropertyValue("--slider-items")   
  );

  const totalSliderItems =
    sliderContainer.childElementCount - totalSliderVisibleItems; // Devuelve el número de elementos secundarios que tiene un elemento.

  let currentSlidePos = 0; 

  /**
   * Slide siguiente
   */
  const slideNext = function () {
    currentSlidePos++;

    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`; // Devuelve el número de píxeles que el borde izquierdo del elemento está desplazado con respecto al borde izquierdo del offsetParent.

    if (currentSlidePos >= totalSliderItems)
      sliderNextBtn.setAttribute("disabled", ""); // Establece el atributo especificado en el elemento, si el atributo ya existe, el valor es actualizado.
    sliderPrevBtn.removeAttribute("disabled"); 
  };

  sliderNextBtn.addEventListener("click", slideNext); // Agrega un evento al objeto especificado.

  /**
   * Slide anterior
   */
  const slidePrev = function () {
    currentSlidePos--;

    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`; // Devuelve el número de píxeles que el borde izquierdo del elemento está desplazado con respecto al borde izquierdo del offsetParent.

    if (currentSlidePos <= 0) sliderPrevBtn.setAttribute("disabled", ""); // Establece el atributo especificado en el elemento, si el atributo ya existe, el valor es actualizado.
    sliderNextBtn.removeAttribute("disabled"); 
  };

  sliderPrevBtn.addEventListener("click", slidePrev); // Agrega un evento al objeto especificado.

  const dontHaveExtraItem = totalSliderItems <= 0; // Si el total de items es menor o igual a 0, no se puede avanzar o retroceder.
  if (dontHaveExtraItem) sliderNextBtn.setAttribute("disabled", ""); // Establece el atributo especificado en el elemento, si el atributo ya existe, el valor es actualizado.

  sliderPrevBtn.setAttribute("disabled", ""); 
};

for (let i = 0, len = sliders.length; i < len; i++) {  // El elemento sliders es un array, por lo que se recorre con un bucle for. 
  sliderInit(sliders[i]); 
}
