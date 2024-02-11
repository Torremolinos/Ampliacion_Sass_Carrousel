/**
 * @author Adrian Iglesias (Estudiante)
 * @github https://github.com/Torremolinos/BaldursResponsiveGate
*/

const telefono = document.querySelector("#telefono");
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
const enviar = document.querySelector("#enviar");
const errores = document.querySelector("#errores");

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");



let mensajesErrores = [];

const validar = (e) => {
  e.preventDefault();
  mensajesErrores = [];
  !/^[A-Z][a-zA-Z0-9]*$/.test(nombre.value.trim()) && mensajesErrores.push("El nombre debe tener la primera letra mayuscula");
  nombre.value.trim().length === 0 &&
  mensajesErrores.push("El nombre es un campo obligatorio");
  apellido.value.trim().length === 0 &&
  mensajesErrores.push("El apellido es un campo obligatorio");
  !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(correo.value.trim())
  ? mensajesErrores.push("El correo electrónico no es válido")
  : null;
  !/^[679][0-9]{8}$/.test(telefono.value.trim()) &&
  mensajesErrores.push(
    "El teléfono no es válido, debe contener 8 dígitos y empezar por 6, 7 u 9"
    );
    mensaje.value.trim().length < 10 &&
    mensajesErrores.push("Mensaje demasiado corto");
    !/^[a-zA-Z0-9]*$/.test(nombre.value.trim()) &&
    mensajesErrores.push("El nombre no tiene caracteres válidos");
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      correo.value.trim()
      ) &&
      mensajesErrores.push(
        "Introduce una dirección de correo electrónico válida"
        );
        
        if (
          mensajesErrores.length === 0 &&
          confirm("¿Estás seguro de enviar el formulario?")
          ) {
            formulario.submit();
          } else if (mensajesErrores.length > 0) {
            errores.textContent = "";
        console.log(mensajesErrores);
        mensajesErrores.forEach(function (mensaje) {
          const lili = document.createElement("li");
          lili.textContent = mensaje;
          errores.appendChild(lili);
        });
      }
      
    };

    formulario.addEventListener("submit", validar);
    
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    })
    
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    })
    
    