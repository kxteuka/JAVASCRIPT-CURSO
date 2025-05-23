for( var x = 0; x < 20; x++) {
    if ( x == 5 ) continue; //Se salta el valor 5
    if ( x == 12 ) break; //Acaba el bucle en cuanto llega al valor 12 (y no lo imprime ya que esta antes)
    document.write( x + "<br >"); 
}