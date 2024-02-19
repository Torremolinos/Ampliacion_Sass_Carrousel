const btn = document.querySelector(".btn-toggle"); // Devuelve el primer elemento que coincida con el selector especificado.

const currentTheme = localStorage.getItem("theme"); // Devuelve el valor asociado con la clave especificada.
if (currentTheme == "dark") { 
  document.body.classList.add("dark-theme"); // Agrega una o más clases a cada elemento del conjunto de elementos coincidentes.
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme"); // Agrega o elimina una clase de un elemento con JavaScript.

  let theme = "light"; // Si el tema es oscuro, se establece la variable theme en "dark".
  if (document.body.classList.contains("dark-theme")) {  
    theme = "dark"; // Si el tema es claro, se establece la variable theme en "light".
  }
  localStorage.setItem("theme", theme); // Establece el valor asociado con la clave especificada. 
});
