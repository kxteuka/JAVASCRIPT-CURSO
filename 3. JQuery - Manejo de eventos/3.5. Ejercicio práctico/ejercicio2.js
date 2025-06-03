$().ready(function () {
  function MoverArriba() {
    $("#imagen").css("top", "-=1px");
  }
  function MoverAbajo() {
    $("#imagen").css("top", "+=1px");
  }
  function MoverIzquierda() {
    $("#imagen").css("left", "-=1px");
  }
  function MoverDerecha() {
    $("#imagen").css("left", "+=1px");
  }
  $("#arriba").click(function () {
    MoverArriba();
  });
  $("#abajo").click(function () {
    MoverAbajo();
  });
  $("#izquierda").click(function () {
    MoverIzquierda();
  });
  $("#derecha").click(function () {
    MoverDerecha();
  });
});
