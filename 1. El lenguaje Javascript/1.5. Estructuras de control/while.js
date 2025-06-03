var contraseña = "GHI";
var clave;

clave = prompt("Introduce la contraseña", "");

while (clave != contraseña) {
  alert("Error. Clave incorrecta");
  clave = prompt("Introduce la contraseña", ""); //Si se introduce mal la contraseña el bucle se sigue reproduciendo
}

if (clave == contraseña) {
  document.write(" Contraseña correcta. ");
}
