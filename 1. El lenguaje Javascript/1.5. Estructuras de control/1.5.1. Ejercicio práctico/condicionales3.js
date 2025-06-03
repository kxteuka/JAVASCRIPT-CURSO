nombre = prompt("Inserte su nombre.");

if (nombre == "Roger") {
  contrasena = prompt("Inserte su contraseña.");
} else {
  document.write("Usuario incorrecto.");
}

if (contrasena == "CIPSA") {
  document.write("Bienvenido.");
} else {
  document.write("Constraseña incorrecta.");
}
