var sihombre, amimeestangrabando, _123numeros, respuesta, Respuesta;

amimeestangrabando = 11;
_123numeros = 11;
sihombre = amimeestangrabando + _123numeros;

alert ( "El primer numero es " + sihombre + "." );
alert ( "El segundo numero es " + _123numeros + "." )
alert ( "Recuerda: Si aceptas, se sumará el primero con el segundo. Si cancelas, se restará el primero al segundo." )

respuesta = confirm( "Está usted seguro?" );

if ( respuesta == true ) {
    _123numeros += sihombre; // _123numeros = _123numeros + sihombre
    alert( "Operación realizada." );
} else {
    _123numeros = sihombre - _123numeros; // no vale "_123numeros -= sihombre" porque haría _123numeros = _123numeros - sihombre.
    alert( "Operación realizada." );
}

Respuesta = prompt( "Dime el número correcto:", "");
Respuesta = Number( Respuesta );

if ( Respuesta == _123numeros ) {
    document.write( "Eso es, era "+ _123numeros + ". <br />Muy bien." );
} else {
    document.write( "¡Casi! El valor era " + _123numeros + ". <br />Intentalo de nuevo." );
}