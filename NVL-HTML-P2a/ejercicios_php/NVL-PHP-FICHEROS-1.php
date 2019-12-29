<?php
$quijote = fopen('quijote.txt','r');

while (($texto = fgets($quijote)) !== false) {
    $molino = ['molino', 'Molino', 'MOLINO'];
    $contador = 0;
    if ($texto === $molino) {
        $contador++;
    };
}
?>
