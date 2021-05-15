var tiempo = document.querySelector("#tiempo");
var segundos = 0;

/*======================================================
   SET INTERVAL (Intervalo de Tiempo)
   setInterval(fucntion, tiempo)
======================================================*/
var intervalo = setInterval(function() {

    segundos++;
    tiempo.innerHTML = segundos; /* si en lugar de ++ pongo el operador +=  no me remplaza sino que pone ams contenido html */
    /* console.log("segundos", segundos); */





}, 1000) /* escribimos los intervalos en milisegundos */

/*======================================================
   SET TIME OUT (Retardo de tiempo)
   setTimeout(funcion, tiempo)
======================================================*/

setTimeout(function() {

    //alert("Se cumplio el tiempo");
    clearInterval(intervalo);

}, 5000);