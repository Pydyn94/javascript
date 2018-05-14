'use strict';

function aktualnyRok() {
    console.log("2018");
}

//wywoływanie funkcji
aktualnyRok();
aktualnyRok();
aktualnyRok();
aktualnyRok();


//funkcja anonimowa

var actuallyMonth = function () {
    console.log("April");
}

console.log(actuallyMonth);

actuallyMonth();
actuallyMonth();


//funkcja z parametrami
function dodajLiczby(liczba1, liczba2) {
    var wynik = liczba1 + liczba2;

    console.log(wynik);
}

dodajLiczby(4, 7);


//funkcje zwracające wartość
function dodajLiczby(liczba1, liczba2) {
    var wynik = liczba1 + liczba2;
    console.log(wynik);
    return wynik;
}

dodajLiczby(4, 7);
