var edad;

edad = prompt( "¿Cuantos años tienes?" )
edad = parseInt( edad ); // Numero integer.

if ( edad >= 18 ) {

    alert( "Eres mayor de edad." ) 

} else {

    alert( "Eres menor de edad." )

}

var mensaje = ( edad >= 18 ) ? "¡Es mayor de edad!" : "¡Es menor de edad!"
document.write( mensaje );