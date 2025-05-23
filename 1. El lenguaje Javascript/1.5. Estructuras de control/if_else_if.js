var pollococinado, tiempodecoccion, tiemporestante;

pollococinado = prompt( "¿Qué temperatura tiene el pollo? ");
pollococinado = parseFloat( pollococinado ); // Numero de coma flotante (temperatura en este caso).
tiempodecoccion = prompt( "¿Cuanto tiempo has cocinado el pollo? (Introduce el valor en horas) ");
tiempodecoccion = parseFloat( tiempodecoccion );
tiemporestante = tiempodecoccion - 1.0;

if ( pollococinado >= 250.0 && tiempodecoccion >= 1.0 ) {

    document.write( "El pollo está cocinado." );

} else if ( pollococinado < 250.0 && pollococinado > 100.0 && tiempodecoccion < 1.0 ) { 

    document.write( "Al pollo le faltan " + tiemporestante + "horas para acabar.");

} else {

    document.write( "El pollo aún está frio. Vuelve a intentarlo cuando esté sobre 100.0 grados." )

}