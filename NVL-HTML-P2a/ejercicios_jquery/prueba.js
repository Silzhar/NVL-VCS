//<script src="https://code.jquery.com/jquery-3.3.1.js"></script> Arrancar jquery desde remoto. 
// Insertar en index.html.


$( document ).ready(function() {
    $( "a" ).click(function( event ) {
        alert( "Hola Mundo" );
        event.preventDefault();
    });
 });