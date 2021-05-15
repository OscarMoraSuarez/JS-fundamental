var numeroaleatoreo = document.querySelector("#numeroAleatoreo");
var numeroaleatoreo1 = document.querySelector("#numeroAleatoreo1");
var numero = 0;
/*======================================================
   para utilizar numeros aleatoreos utilizo el objeto math de JS
   permite realizar tareas matematicas en los numeros
   Math.random devuelve un numeor aleatoreo entre 0 (inclusivo) y 1 (exclusivo)
======================================================*/
numero = Math.random(); /* Math floor redondea al numeor antes del decimal */
numero2 = Math.floor(Math.random()); /* siempreaparecera cero */
numero3 = Math.floor(Math.random() * 10);
numeroAleatoreo1.innerHTML = numero;
numeroAleatoreo2.innerHTML = numero2;
numeroAleatoreo3.innerHTML = numero3;
console.log("numero", numero);
/* me arrojara un numero aleatoreo entre el 0 y el 1
pero sin incluir el 1 */
/*======================================================
   Math Ceil redondea al numero mayor del decimal
======================================================*/
numero4 = Math.ceil(Math.random() * 10);
numeroAleatoreo4.innerHTML = numero4;


/*======================================================
   Math Round rendodea un irracional  asu numero entero mas proximo 
======================================================*/
numero4 = Math.round(4.6);
alert(numero4);