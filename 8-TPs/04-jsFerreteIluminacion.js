/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {


    let vLamp;
    let vDesc;
    let vPrecio = 35;
    let vPrecioDesc;
    let vFinal;
    let vFinalIB;
    vLamp = document.getElementById("txtIdCantidad").value;
    parseInt(vLamp);
    vMarca = document.getElementById("Marca").value;

    switch (vLamp) {
       
        case '3':
            if (vMarca == "ArgentinaLuz") {
                vDesc = 0.85;
            } else if (vMarca == "FelipeLamparas") {
                vDesc = 0.90;
            }
            else {
                vDesc = 0.95;
            }
            break;
        case '4':
            if ((vMarca == "ArgentinaLuz") || (vMarca == "FelipeLamparas")) {
                vDesc = 0.75;
            }
            else {
                vDesc = 0.80;
            }
            break;
        case '5':
            if (vMarca == "ArgentinaLuz") {
                vDesc = 0.60
            }
            else if (vLamp == 5 && vMarca != "ArgentinaLuz") {
                vDesc = 0.70;
            }
            break;
        default:
            vDesc = 0.50;

    }
    if (vLamp == 1 || vLamp == 2) {
        document.getElementById("txtIdprecioDescuento").value = vLamp * vPrecio
    } else {
        vPrecioDesc = (vLamp * vPrecio) * vDesc;
        document.getElementById("txtIdprecioDescuento").value = vPrecioDesc
        if (vPrecioDesc >= 120) {
            vFinal = vPrecioDesc;
            vFinal = vFinal * 0.10;
            vFinalIB = vFinal + vPrecioDesc;
            alert("IIBB Usted pagó " + vFinal + "\n Precio Final " + vFinalIB)
            document.getElementById("txtIdprecioDescuento").value = vFinalIB.toFixed(2);
        }

    }
}
