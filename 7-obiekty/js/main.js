'use strict';

//obiekty
var kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe: function () {
        console.log("Ten obiekt ma na imię: " + this.imie);
    }
}

var krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function () {
        console.log("Ten obiekt ma na imię: " + this.imie);
    }
}
kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);

console.log(kaja);


//klasy

class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    wyswietlInfo() {
        console.log("Nazywam się: " + this.name + " " + this.lastName);
    }
}

var agata = new Person("Agata", "Biesaga");

console.log(agata);
console.log(agata.name);
console.log(agata.lastName);

var marcin = new Person("Marcin", "Kwiatkowski");

console.log(marcin);


agata.wyswietlInfo();
