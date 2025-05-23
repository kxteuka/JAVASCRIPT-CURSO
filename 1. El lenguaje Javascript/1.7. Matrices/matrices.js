var dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

for (var indx = 0; indx < dias.length; indx++) {
  document.write("En posicion " + indx + "->" + dias[indx] + "<br>"); //Muestra los valores en orden
}

document.write("<br>"); //Muestra un salto de linea

var dias2 = [
  "Martes",
  "Jueves",
  "Lunes",
  "Miercoles",
  "Viernes",
  "Domingo",
  "Sabado",
];

var indice;
for (indice in dias2) {
  document.write("valor es:" + indice + "=>" + dias2[indice] + "<br >"); //Devuelve los indices y muesta los valores en el orden en el que estén en la matriz
}

document.write("<br>"); //Muestra un salto de linea

for (valor of dias2) {
  document.write("valor es:" + valor + "<br/>");
} //Devuelve los valores de la matriz en el orden en el que estén

document.write("<br>"); //Muestra un salto de linea

var extensiones = new Array();
extensiones["españa"] = "es";
extensiones["usa"] = "us";
extensiones["inglaterra"] = "uk"; //Se declaran las extensiones de los paises

document.write(extensiones["españa"] + "<br>");
document.write(extensiones["usa"] + "<br>");
document.write(extensiones["inglaterra"] + "<br>"); //Muestra los valores de la matriz

document.write("<br>"); //Muestra un salto de linea

if ("inglaterra" in extensiones) {
  document.write("existe");
} else {
  document.write("no existe");
} //Verifica si existe la propiedad en el objeto

document.write("<br>"); //Muestra un salto de linea

for (clave in extensiones) {
  document.write(clave + "<br>");
} //Muestra las claves de la matriz

document.write("<br>"); //Muestra un salto de linea

for (clave in extensiones) {
  document.write(clave + " - " + extensiones[clave] + "<br />");
} //Muestra las claves y los valores de la matriz

document.write("<br>"); //Muestra un salto de linea

//Ejercicio 1
// Vector de días de la semana
var dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

var num_dia = parseInt(prompt("Indica el numero de dia", ""));
if (num_dia >= 1 && num_dia <= 7) {
  document.write("El dia indicado es: " + dias[num_dia - 1]);
} else {
  document.write("Dia no válido");
}

document.write("<br>"); //Muestra un salto de linea

//Ejercicio 2
//Crea una página que solicite al usuario un número y muestre la tabla de multiplicar de ese número.
var num = parseInt(prompt("Indica el numero para la tabla de multiplicar", ""));
var tabla = new Array();
for (var i = 1; i <= 10; i++) {
  tabla[i] = num * i;
}
document.write("Tabla de multiplicar del " + num + "<br>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " * " + i + " = " + tabla[i] + "<br>");
}