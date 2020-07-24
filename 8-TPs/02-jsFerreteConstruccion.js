/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let vLargo;
    let vAncho;
    let vTotal;

    vLargo = parseFloat(document.getElementById("txtIdLargo").value);
    vAncho = parseFloat(document.getElementById("txtIdAncho").value);
    vTotal = ((vLargo + vAncho)*2)*3;
    alert("El total de alambre a comprar es: "+vTotal);

}
function Circulo () 
{
    let vRadio;
    let vCirculo;
    vRadio = parseFloat(document.getElementById("txtIdRadio").value);
    vCirculo = (vRadio*(Math.PI*2))*3;
    alert("El material total a comprar es: " +vCirculo.toFixed(4));
}
function Materiales () 
{
    let vLargo;
    let vAncho;
    let vArea;
    let vMateriales;
    vLargo = parseFloat(document.getElementById("txtIdLargo").value);
    vAncho = parseFloat(document.getElementById("txtIdAncho").value);
    vArea = (vLargo*vAncho);
    alert("Usted necesitará "+(vArea*2)+ " bolsas de cemento y " + (vArea*3)+ " bolsas de cal para su terreno")

    
}