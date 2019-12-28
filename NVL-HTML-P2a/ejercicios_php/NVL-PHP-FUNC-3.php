<?php
$entrada = print("Contador de letras 'A'. Ingrese aquí lo que desee contar :");
$vocales = ["a","A","e","E","i","I","o","O","u","U"];
$total = 0;

function contador(is_string $entrada,  $vocales) {
    foreach ($entrada  as $vocales) {
        if ($entrada === $vocales) {
            print("Están incluídas las 5 vocales");
        } else {
            print("No están incluídas todas las vocales");
        }
    };
}

contador()
?>