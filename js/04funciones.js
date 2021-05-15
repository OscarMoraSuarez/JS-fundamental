/*======================================================
   variable global
======================================================*/
/* esta es una variable global dado que esta por fuera de las funciones declaradas en este docuemnto 
puede ser usada por cualquiera de las funciones*/

var globales = 10;
console.log("globales", globales);




/*======================================================
   Funciones sin parametro
======================================================*/

function saludo() {

    alert("Hola Mundo");
    /* console.log("Hola mundo") */
}
/* saludo();  esta es la forma de ejecutar la funcion si no laejecuto con un boton*/


/*======================================================
   Funciones con parametros
======================================================*/
function sumar(numero1, numero2) {

    var resultado = numero1 + numero2;
    globales = resultado;
    console.log("globales_sumar", globales)

    alert(resultado);

}
sumar(4, 7);

/*======================================================
 funciones con retorno sin parametros 
======================================================*/



function retorno1() {

    /* cuando declaramos variables dentro de una funcion se conoce como variable local 
    y solo la conoce la funcion*/
    var numero = 5;
    return numero;


}

console.log(retorno1());

/*======================================================
   funcniones con retorno y parametros
======================================================*/

function retorno2(numero) {

    return numero;


}

console.log(retorno2("pedro"));
console.log(retorno2(20));
console.log(retorno2(30));