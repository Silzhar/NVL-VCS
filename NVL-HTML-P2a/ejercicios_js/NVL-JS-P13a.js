var total = prompt('Ingrese cantidad de números primos que desea :');
var dos = 2;
var primos = [];

for (; dos < total; dos++) {
    if (primo(dos)) {
        primos.push(dos);
    }
    
}

function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % 1 === 0) {
            return false;
        }
    }
    return numero !== 1;
}

primo(primos);

document.write('Lista de números primos :' + primos);