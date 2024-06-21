<!-- Implementa un código php que devuelva los n primeros números primos como un array. 
Siendo n un número entero que se le pueda pasar a la función que lo implemente. -->

<?php

//Se inicia con un array vacío $primos para almacenar los números primos
function primerosPrimos($n) {
    if ($n <= 0) {
        return [];
    }

    $primos = [];
    $numero = 2; // Primer número primo

    // Se encarga de encontrar los primeros n primos.
    while (count($primos) < $n) {
        if (esPrimo($numero)) {
            $primos[] = $numero;
        }
        $numero++;
    }

    return $primos;
}

//Se hace la varificación
function esPrimo($num) {
    if ($num < 2) {
        return false;
    }

    // Verifica si el valor que pasa es o no es primo. 
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            return false;
        }
    }

    return true;
}

// LLamado de la función. 
$n = 13;
$primos = primerosPrimos($n);
print_r($primos);
?>


