<?php
$entrada = print("Inserte el número del día que quiere saber :");

$semana = array(
    1 => "lunes",
    2 => "martes",
    3 => "miércoles",
    4 => "jueves",
    5 => "viernes",
    6 => "sábado",
    7 => "domingo",
);

foreach( $semana as $clave => $valor) {
    if ($clave === $entrada) {
        print("el dlia que corresponde al número es :" + $valor);
        } else{
            print("El número a introducir ha de ser entre 1 y 7 ");
        };
?>
