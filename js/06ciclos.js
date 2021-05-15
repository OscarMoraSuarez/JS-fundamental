/*======================================================
 CICLO FOR  
======================================================*/
for (var i = 0; i <= 5; i++) {


    console.log("i", i);



}

/*======================================================
   CICLO WHILE
======================================================*/
var n = 1;
while (n <= 5) {
    /* asigno la consola antes de que ocurra el incrmento */
    console.log("n", n)
    n++;



}


/*======================================================
   CICLO DO WHILE
======================================================*/
var p = 1;
do {

    console.log("p", p);
    p++

}
while (p <= 5);

/*======================================================
   CICLO PARA ALTERAR CAJAS
======================================================*/
var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);



for (var i = 0; i <= cajas.length; i++) {

    cajas[i].style.height = "50px";
    cajas[i].style.width = "50px";
    cajas[i].style.background = "green";
    cajas[i].style.marginTop = "5px";
    cajas[i].style.marginLeft = "3px";
    /* cajas[i].style.float = "left", "5px"; */
    /* las posiciones flotantes no hacen parte del flujo de nodos, estos 
        elementos podríasn quedar sobrepuestos para evitarlo es mejor usar display inline */
    cajas[i].style.display = "inline-block";

    /* En javascript cunado quiero usar propiedades css separadas por guiones margint-top 
        debo usar camelcase*/


}