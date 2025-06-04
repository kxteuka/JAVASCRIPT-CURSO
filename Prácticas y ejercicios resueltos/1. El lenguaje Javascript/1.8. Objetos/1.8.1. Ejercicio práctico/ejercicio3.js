function Triangulo(_lado1, _lado2, _lado3) {
  this.lado1 = _lado1;
  this.lado2 = _lado2;
  this.lado3 = _lado3;

  this.esEquilatero = function () {
    if (this.lado1 == this.lado2 && this.lado1 == this.lado3) {
      return true;
    } else {
      return false;
    }
  };
  this.esIsosceles = function () {
    if (
      (this.lado1 == this.lado2 && this.lado1 != this.lado3) ||
      (this.lado1 == this.lado3 && this.lado1 != this.lado2) ||
      (this.lado2 == this.lado3 && this.lado2 != this.lado1)
    ) {
      return true;
    } else {
      return false;
    }
  };
  this.esEscaleno = function () {
    if (
      this.lado1 != this.lado2 &&
      this.lado1 != this.lado3 &&
      this.lado2 != this.lado3
    ) {
      return true;
    } else {
      return false;
    }
  };
}

var triangulos = new Triangulo(
  prompt("Introduce el lado 1 del triangulo"),
  prompt("Introduce el lado 2 del triangulo"),
  prompt("Introduce el lado 3 del triangulo")
);

while (
  triangulos.lado1 == "" ||
  triangulos.lado2 == "" ||
  triangulos.lado3 == ""
) {
  alert("Los lados no pueden estar vacios.");
  triangulos = new Triangulo(
    prompt("Introduce el lado 1 del triangulo"),
    prompt("Introduce el lado 2 del triangulo"),
    prompt("Introduce el lado 3 del triangulo")
  );
}

if (triangulos.esEquilatero()) {
  alert("El triangulo es equilatero.");
} else if (triangulos.esIsosceles()) {
  alert("El triangulo es isosceles.");
} else if (triangulos.esEscaleno()) {
  alert("El triangulo es escaleno.");
} else {
  alert("No es un triangulo.");
}
