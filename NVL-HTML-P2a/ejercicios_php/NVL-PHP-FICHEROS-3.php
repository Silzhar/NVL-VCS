<?php
    $fecha = getdate();

    function hora_actual($fecha, $fichero_1) {
        if ($comprueba_fichero = fstat($fichero_1 === '')) {
            $fichero_1 = fopen('fichero_1.txt', 'x+');
            fwrite($fecha);
            fclose($fichero_1);
        } else {
            $new_file = fopen('fichero_1_modificado.txt', 'x+');
        };
    };

    hora_actual()
?>