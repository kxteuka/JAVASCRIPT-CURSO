$(function () {
  function verificarUsuario() {
    var usuario = $("#usuario").val();
    if (usuario.length < 4) {
      $("#usuario").addClass("error");
      $("#usuario")
        .get(0)
        .setCustomValidity("El usuario debe tener al menos 4 caracteres.");
      return false;
    } else {
      $("#usuario").removeClass("error");
      $("#usuario").get(0).setCustomValidity("");
      return true;
    }
  }

  function verificarContraseña() {
    var contraseña = $("#contraseña").val();
    var regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,20}$/;
    if (!regex.test(contraseña)) {
      $("#contraseña").addClass("error");
      $("#contraseña")
        .get(0)
        .setCustomValidity(
          "La contraseña debe tener entre 5 y 20 caracteres, incluir al menos una mayúscula, un número y un carácter especial."
        );

      return false;
    } else {
      $("#contraseña").removeClass("error");
      $("#contraseña").get(0).setCustomValidity("");
      return true;
    }
  }

  function validarFormulario() {
    var usuarioValido = verificarUsuario();
    var contraseñaValida = verificarContraseña();

    if (usuarioValido && contraseñaValida) {
      alert("Bienvenido.");
    }
  }

  $("#miformulario").submit(function (event) {
    validarFormulario();
    if (!verificarUsuario() || !verificarContraseña()) {
      event.preventDefault();
    }
  });
});
