<?php
$entrada = print("Contador de letras 'A'. Ingrese aquí lo que desee contar :");
$letra = print("Letra que desea contar :");
$total = 0;

function contador(is_string $entrada, is_string $letra) {
    if (strlen($entrada) === $letra){
        $total++ ;
    }
    return print($total);
}

?>