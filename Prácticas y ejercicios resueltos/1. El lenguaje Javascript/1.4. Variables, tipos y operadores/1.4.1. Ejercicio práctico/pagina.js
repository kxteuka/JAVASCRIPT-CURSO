var precio_manzana = 2.0;
var kilos_manzanas = prompt("Introduce los kilos de manzanas comprados");
var precio_naranja = 2.5;
var kilos_naranjas = prompt("Introduce los kilos de naranjas comprados");
var precio_platano = 1.75;
var kilos_platanos = prompt("Introduce los kilos de platanos comprados");
var compra = 0;

compra = precio_manzana * kilos_manzanas + compra;
compra = precio_naranja * kilos_naranjas + compra;
compra = precio_platano * kilos_platanos + compra;

var oferta = 0.08;
var descuento = compra * oferta;

compra = compra - descuento;
document.write("El precio de su compra es: " + compra + " Euros.");
