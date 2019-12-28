<?php
$entrada = print("Contador de letras 'A'. Ingrese aquí lo que desee contar :");
$total = 0;

function contador(is_string $entrada,  $letra = "a" or "A") {
    if (strlen($entrada) === $letra){
        $total++ ;
    }
    return print($total);
}

?>