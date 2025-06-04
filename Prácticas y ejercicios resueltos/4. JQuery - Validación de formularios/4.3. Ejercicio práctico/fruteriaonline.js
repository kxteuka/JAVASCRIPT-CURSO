$(function () {
  function validarVacio() {
    var nombre = $("#comprador").val();
    if (nombre === "") {
      alert("El campo de nombre no puede estar vacío.");
      return false;
    }
    return true;
  }

  function validarValor() {
    var peso = parseFloat($("#peso").val());
    if (isNaN(peso) || peso <= 0.0 || peso > 10.0) {
      alert("El peso debe ser un número entre 1 y 10.");
      return false;
    }
    return true;
  }

  function validarSeleccion() {
    var frutaSeleccionada = $("#frutas").val();
    if (frutaSeleccionada === "") {
      alert("Debe seleccionar una fruta.");
      return false;
    }
    return true;
  }

  function calcular() {
    if (validarVacio() && validarValor() && validarSeleccion()) {
      var frutaSeleccionada = $("#frutas").val();
      var peso = parseFloat($("#peso").val());
      var formaPago = $("#pago").val();
      var precioPorKilo = {
        naranjas: 3.0,
        manzanas: 2.5,
        limones: 2.25,
        tomates: 4.25,
      };
      var descuento = 0;
      var total = peso * precioPorKilo[frutaSeleccionada] * (1 - descuento);

      if (peso > 5.0) {
        if (formaPago === "visa") {
          descuento = 0.04;
        } else if (formaPago === "mastercard") {
          descuento = 0.025;
        }
      }

      alert(
        "El total a pagar por " +
          peso +
          " kg de " +
          frutaSeleccionada +
          " es: " +
          total.toFixed(2) +
          " €"
      );
    }
  }

  $("form").submit(function (event) {
    event.preventDefault();
    calcular();
  });
});
