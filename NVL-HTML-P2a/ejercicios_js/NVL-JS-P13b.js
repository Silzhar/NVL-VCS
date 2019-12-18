
function texto() {
    var entrada = prompt('Escriba aquí su texto a comprobar :').toLowerCase();
    // Eliminar espacios . La "g" (global) es un modificador para que el replace se realice en todas las ocurrencias.
    entrada = entrada.replace(/ /g, '');

    for (var i = 0; i < entrada.length; i++) {
        if (entrada[i] != entrada[entrada.length-i-1]) {
            return false;
        }
    }
    return true
}

if(texto()) {
    alert('Es un palíndromo');
} else {
    alert('No es un palíndromo');
}
