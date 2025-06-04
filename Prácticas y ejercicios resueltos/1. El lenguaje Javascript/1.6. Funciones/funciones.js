persona = "Mariano";
sitio = "Barakaldo";

var saludo = function () {
  var persona = prompt("Inserte su nombre.");
  lugar = prompt("Inserte un lugar.");
  alert("Te saludo, " + persona + ", procedente de " + lugar + ".");
  console.log("Dentro funcion: " + persona);
};

saludo();
console.log("Fuera funcion: " + persona + ", " + sitio + " y " + lugar + "."); // Error porque la variable solo está definida en la función.
