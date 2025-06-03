nombre = prompt("Inserte su nombre.");

if (nombre == null || nombre == "") {
  document.write("Usuario anonimo.");
} else {
  document.write("Encantado de conocerte, " + nombre + ".");
}
