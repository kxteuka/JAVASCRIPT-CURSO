function Usuario(_usuario, _clave) {
  this.usuario = _usuario;
  this.clave = _clave;
  this.comprobarUsuario = function (_usu, _cla) {
    if (this.usuario == _usu && this.clave == _cla) {
      return true;
    } else {
      return false;
    }
  };
}

var usuarios = new Array();
usuarios[1] = new Usuario("roger", "1234");

if (
  usuarios[1].comprobarUsuario(
    prompt("Introduce el usuario."),
    prompt("Introduce la clave.")
  )
) {
  alert("Bienvenido " + usuarios[1].usuario);
} else {
  alert("Usuario o clave incorrectos.");
  while (
    !usuarios[1].comprobarUsuario(
      prompt("Introduce el usuario."),
      prompt("Introduce la clave.")
    )
  ) {
    alert("Usuario o clave incorrectos.");
  }
  alert("Bienvenido " + usuarios[1].usuario);
}
