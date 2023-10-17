//alert("Hola este es mi Javascript");
//let nombre = "Jesus Alberto Coca"
//console.log(nombre)


// let contenidoTitulo = "Nombre";

// let titulo = document.querySelector(".contenedor #encabezado .tituloprincipal");
// titulo.innerHTML = contenidoTitulo;

// let textoTitulo = titulo.innerText;
// console.log(textoTitulo);

// if (textoTitulo == "Nombre") {
//     titulo.innerText = "Nuevo título";
// } else {
//     console.log("No se cumple la condicion")
// }


// let nombre = "Jesus";
// let ciudad = "Manizales";
// let gustos = "Ajedrez";

// let parrafo = document.querySelector(".contenedor #seccion-principal .seccion-1 .acerca-de .parrafo-2");
// console.log(parrafo)

// function cambiarTexto(nombre, ciudad, gustos){
//     let contenido = `Mi nombre es ${nombre}, vivo en la ciudad de ${ciudad}.
//     Una de las cosas que más me gusta en este mundo es el ${gustos}`;

//     return contenido;
// }

// parrafo.innerText = cambiarTexto(nombre, ciudad, gustos);
let menu_responsive = document.querySelector(".contenedor #encabezado .checkbtn");

menu_responsive.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}




