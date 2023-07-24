// seleccionar elementos html

// querySelector

const heading = document.querySelector('.header__texto h2')//selecciona el elemento html 
heading.textContent ='Victor Cupa';// modifica el elemento html
console.log(heading);
//querySelectorAll
const enlaces= document.querySelectorAll('.navegacion a')// selecciona todos los elementos de navegacion con etiqueta a
enlaces[2].textContent='Encuentranos';
console.log(enlaces);

// crear un nuevo enlace dentro de la pagina
const nuevoEnlace= document.createElement('A')
//agregar el href
nuevoEnlace.href ='https://www.youtube.com/watch?v=vHymDXI8CTk&list=RDvHymDXI8CTk&start_radio=1&ab_channel=LuisMihajlow1';
// agregar el texto
nuevoEnlace.textContent= 'YOUTUBE';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')
//agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

// EVENTOS
// console.log(1)
// window.addEventListener('load', function(){// load espera a que el js y el html esten listos
// console.log(2)
// });
// window.onload = function(){
//     console.log(3)
// }
// document.addEventListener('DOMContentLoaded', function(){//solo espera a que carge html sin esperar imagens o css
//     console.log(4)
// });
// console.log(5);

// seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener ('click', function(e){
    console.log(evento);
    // e.preventDefault();
    console.log('formulario enviado');
});

//Eventos de los inputt y textarea

const inputName =document.querySelector('#nombre');
inputName.addEventListener('input', function(e){
    console.log(e)
});
