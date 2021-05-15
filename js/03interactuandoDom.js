/* variables Dom 
Dom e sla estrutura de objetos del navegador que se genera cuando carga un documento
Se puede alterar dinamicamente con javascript cambiando aspecto y contenido*/

var caja = document.querySelector("#caja"); /* selecciono solo una caja quetiene el id */
caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "green";
console.log(caja);

var cajas = document.querySelectorAll(".cajas"); /* selecciono un conjunto de cajas que tienen una clase */

console.log(cajas);