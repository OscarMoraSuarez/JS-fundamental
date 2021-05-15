/*======================================================
    EVENTOS DESDE EL DOM
======================================================*/

function saludar() {

    alert("Hola Mundo");

}

var recuadro = document.querySelector("#recuadro");

function cambiarColor() {

    recuadro.style.background = "green";

}

/*======================================================
   EVENTOS DESDE JAVASCRIPT
======================================================*/
var boton = document.querySelector("#boton");

boton.addEventListener("click", moverCaja)

function moverCaja() {

    /* recuadro.style.marginLeft = "100px"; */
    recuadro.style.width = "500px";
    recuadro.style.transition = "1s width ease";

}