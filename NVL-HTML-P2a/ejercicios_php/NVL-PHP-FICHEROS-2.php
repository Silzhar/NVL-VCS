<?php
$quijote = fopen('quijote.txt','r');
$imperial_quijote = fopen('imperial_quijote.txt', 'x+');
$protagonista = 'Quijote';
$new_protagonista = 'Lord Vader';

function nuevo_quijote($quijote, $imperial_quijote, $protagonista, $new_protagonista) {
    while (($texto = fgets($quijote)) !== false) {
        if ($texto === $protagonista) {
            fwrite($imperial_quijote, $new_protagonista);
        };
    };
};

new_quijote();

fclose($quijote);
fclose($imperial_quijote);

?>
