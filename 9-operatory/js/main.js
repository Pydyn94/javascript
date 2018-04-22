'use strict';

//przyrowniania

//modulo - reszta z dzielenia
var liczba1 = 13;
var liczba2 = 5;

var wynik;
wynik = liczba1 % liczba2;
console.log(wynik);


wynik = wynik + 3; //wynik+=3
console.log(wynik);


if (wynik = 6) {
    console.log("PRAWDA");
} else {
    console.log("FAŁSZ");
}


if (wynik == 6) {
    console.log("PRAWDA");
} else {
    console.log("FAŁSZ");
}

//nie ten sam typ i wartosc danych
if ("2" === 2) {
    console.log("PRAWDA");
} else {
    console.log("FAŁSZ");
}


if (!("2" !== 2) && (8 < 4)) {
    document.write("<br> prawda");
} else {
    document.write("<br> fałsz");
}


(3 > 2) ? console.log("prawda"): console.log("fałsz");
