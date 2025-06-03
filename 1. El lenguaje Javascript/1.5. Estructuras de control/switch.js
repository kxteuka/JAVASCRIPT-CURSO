var dia;

dia = prompt("Indicar el día de la semana.");
dia = parseInt(dia); // Numero integer.

switch (dia) {
  case 1:
    {
      document.write("Lunes.");
    }
    break;
  case 2:
    {
      document.write("Martes.");
    }
    break;
  case 3:
    {
      document.write("Miercoles.");
    }
    break;
  case 4:
    {
      document.write("Jueves.");
    }
    break;
  case 5:
    {
      document.write("Viernes.");
    }
    break;
  case 6:
    {
      document.write("Sabado.");
    }
    break;
  case 7:
    {
      document.write("Domingo.");
    }
    break;
  default: {
    document.write("Eso no es un numero de dia de la semana.");
  }
}
