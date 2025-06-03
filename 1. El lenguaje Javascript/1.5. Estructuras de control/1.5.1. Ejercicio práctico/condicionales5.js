nombre1 = prompt("Inserte el nombre de la primera persona.");
edad1 = prompt("Inserte la edad de la primera persona.");
nombre2 = prompt("Inserte el nombre de la segunda persona.");
edad2 = prompt("Inserte la edad de la segunda persona.");

edad1 = parseInt(edad1);
edad2 = parseInt(edad2);

if (edad1 > edad2) {
  document.write("El mayor es " + nombre1 + ", que tiene " + edad1 + " años.");
} else {
  document.write("El mayor es " + nombre2 + ", que tiene " + edad2 + " años.");
}
