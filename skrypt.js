var tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];

document.write("Zadanie 1<br>");

document.write("5 komorka: " + tab1[4] + "<br>");

tab1[6] = 12;

var tab2 = new Array();
var tab3 = new Array();

for (var i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[i];
    tab3[i] = tab1[i] + tab2[i];
}

document.write("Tablica 1: ");
for (var i = 0; i < tab1.length; i++) {
    document.write(tab1[i] + " ");
}

document.write("<br>Tablica 2: ");
for (var i = 0; i < tab2.length; i++) {
    document.write(tab2[i] + " ");
}

document.write("<br>Tablica 3: ");
for (var i = 0; i < tab3.length; i++) {
    document.write(tab3[i] + " ");
}

for (var i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[9 - i];
}

document.write("<br>Tablica 2 odwrotnie: ");
for (var i = 0; i < tab2.length; i++) {
    document.write(tab2[i] + " ");
}

document.write("<hr>");


// ZADANIE 2

var n = Number(prompt("Podaj rozmiar tablicy:"));
var tablica = new Array();
var suma = 0;
var min, max;
var parzyste = 0;
var nieparzyste = 0;
var podzielne3 = 0;
var trojki = 0;

for (var i = 0; i < n; i++) {
    tablica[i] = Number(prompt("Podaj liczbe:"));
}

min = tablica[0];
max = tablica[0];

for (var i = 0; i < n; i++) {
    suma += tablica[i];

    if (tablica[i] < min) {
        min = tablica[i];
    }

    if (tablica[i] > max) {
        max = tablica[i];
    }

    if (tablica[i] % 2 == 0) {
        parzyste++;
    } else {
        nieparzyste++;
    }

    if (tablica[i] % 3 == 0) {
        podzielne3++;
    }

    var liczba = Math.abs(tablica[i]);

    while (liczba > 0) {
        if (liczba % 10 == 3) {
            trojki++;
        }
        liczba = Math.floor(liczba / 10);
    }
}

document.write("<br>Zadanie 2<br>");
document.write("Minimum: " + min + "<br>");
document.write("Maksimum: " + max + "<br>");
document.write("Srednia: " + suma / n + "<br>");
document.write("Wystapienia cyfry 3: " + trojki + "<br>");
document.write("Parzyste: " + parzyste + "<br>");
document.write("Nieparzyste: " + nieparzyste + "<br>");
document.write("Podzielne przez 3: " + podzielne3 + "<br>");

// Sortowanie rosnace
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1; j++) {
        if (tablica[j] > tablica[j + 1]) {
            var pomoc = tablica[j];
            tablica[j] = tablica[j + 1];
            tablica[j + 1] = pomoc;
        }
    }
}

document.write("Rosnaco: ");
for (var i = 0; i < n; i++) {
    document.write(tablica[i] + " ");
}

var mediana;

if (n % 2 == 1) {
    mediana = tablica[Math.floor(n / 2)];
} else {
    mediana = (tablica[n / 2 - 1] + tablica[n / 2]) / 2;
}

document.write("<br>Mediana: " + mediana + "<br>");

document.write("3 najmniejsze: ");
for (var i = 0; i < n && i < 3; i++) {
    document.write(tablica[i] + " ");
}

document.write("<br>3 najwieksze: ");
for (var i = n - 3; i < n; i++) {
    if (i >= 0) {
        document.write(tablica[i] + " ");
    }
}

document.write("<br>Kwadraty: ");
for (var i = 0; i < n; i++) {
    tablica[i] = tablica[i] * tablica[i];
    document.write(tablica[i] + " ");
}

document.write("<hr>");


// ZADANIE 3

var litery = new Array();

for (var i = 0; i < 10; i++) {
    litery[i] = prompt("Podaj litere:");
}

document.write("Zadanie 3<br>");
document.write("Litery: ");

for (var i = 0; i < 10; i++) {
    document.write(litery[i] + " ");
}

var wyraz = prompt("Podaj wyraz 10-literowy:");

if (wyraz.length == 10) {
    for (var i = 0; i < 10; i++) {
        litery[i] = wyraz[i];
    }

    for (var i = 0; i < 10; i++) {
        if (litery[i] == litery[i].toUpperCase()) {
            litery[i] = litery[i].toLowerCase();
        } else {
            litery[i] = litery[i].toUpperCase();
        }
    }

    document.write("<br>Po zamianie: ");
    for (var i = 0; i < 10; i++) {
        document.write(litery[i]);
    }

    for (var i = 0; i < 10; i++) {
        var los = Math.floor(Math.random() * 10);
        var pomoc = litery[i];
        litery[i] = litery[los];
        litery[los] = pomoc;
    }

    document.write("<br>Losowa kolejnosc: ");
    for (var i = 0; i < 10; i++) {
        document.write(litery[i]);
    }
} else {
    document.write("<br>Wyraz musi miec 10 znakow.");
}

document.write("<hr>");


// ZADANIE 4

var tablica = new Array();
var max = 0;

for (var i = 0; i < 100; i++) {
    var a = Math.random();
    a *= 100;
    a = Math.round(a);
    tablica[i] = a;
}

document.write("Zadanie 4<br>");
document.write("Tablica: ");

for (var i = 0; i < tablica.length; i++) {
    document.write(tablica[i] + " ");
}

max = tablica[0];

for (var i = 0; i < tablica.length; i++) {
    if (tablica[i] > max) {
        max = tablica[i];
    }
}

var ile = 0;

for (var i = 0; i < tablica.length; i++) {
    if (tablica[i] == max) {
        ile++;
    }
}

document.write("<br>Najwieksza wartosc: " + max);
document.write("<br>Liczba wystapien: " + ile);

document.write("<br>Liczby nieparzyste: ");
for (var i = 0; i < tablica.length; i++) {
    if (tablica[i] % 2 != 0) {
        document.write(tablica[i] + " ");
    }
}

document.write("<br>Nieparzyste indeksy: ");
for (var i = 1; i < tablica.length; i += 2) {
    document.write(tablica[i] + " ");
}

var ilePrzedzial = 0;

document.write("<br>Liczby od 5 do 14: ");
for (var i = 0; i < tablica.length; i++) {
    if (tablica[i] >= 5 && tablica[i] < 15) {
        document.write(tablica[i] + " ");
        ilePrzedzial++;
    }
}

document.write("<br>Liczba elementow w przedziale: " + ilePrzedzial);

var a = Number(prompt("Podaj liczbe a:"));
var najblizszy = tablica[0];

for (var i = 1; i < tablica.length; i++) {
    if (Math.abs(tablica[i] - a) < Math.abs(najblizszy - a)) {
        najblizszy = tablica[i];
    }
}

document.write("<br>Najblizsza liczba do a: " + najblizszy);

var indeksMin = 0;

for (var i = 1; i < tablica.length; i++) {
    if (tablica[i] < tablica[indeksMin]) {
        indeksMin = i;
    }
}

document.write("<br>Minimum: " + tablica[indeksMin]);

if (indeksMin > 0) {
    document.write("<br>Poprzednik: " + tablica[indeksMin - 1]);
}

if (indeksMin < 99) {
    document.write("<br>Nastepnik: " + tablica[indeksMin + 1]);
}

var nowa = new Array();
var k = 0;

for (var i = 0; i < tablica.length; i++) {
    if (tablica[i] > 10) {
        nowa[k] = tablica[i];
        k++;
    }
}

document.write("<br>Elementy wieksze od 10: ");
for (var i = 0; i < nowa.length; i++) {
    document.write(nowa[i] + " ");
}

var B = new Array();
B[0] = tablica[0];

for (var i = 1; i < 100; i++) {
    B[i] = B[i - 1] + tablica[i];
}

document.write("<br>Sumy kolejnych elementow: ");
for (var i = 0; i < 100; i++) {
    document.write(B[i] + " ");
}

// Sortowanie malejaco
for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 99; j++) {
        if (tablica[j] < tablica[j + 1]) {
            var pomoc = tablica[j];
            tablica[j] = tablica[j + 1];
            tablica[j + 1] = pomoc;
        }
    }
}

document.write("<br>Sortowanie malejaco: ");
for (var i = 0; i < 100; i++) {
    document.write(tablica[i] + " ");
}

document.write("<br>Liczby wystepujace przynajmniej 3 razy: ");

for (var i = 0; i < 100; i++) {
    var licznik = 0;

    for (var j = 0; j < 100; j++) {
        if (tablica[i] == tablica[j]) {
            licznik++;
        }
    }

    var bylo = false;

    for (var j = 0; j < i; j++) {
        if (tablica[i] == tablica[j]) {
            bylo = true;
        }
    }

    if (licznik >= 3 && bylo == false) {
        document.write(tablica[i] + " ");
    }
}

document.write("<hr>");


// ZADANIE 5. FIBONACCI

var fib = new Array();

fib[0] = 0;
fib[1] = 1;

for (var i = 2; i < 100; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

document.write("Fibonacci:<br>");
for (var i = 0; i < 100; i++) {
    document.write(fib[i] + " ");
}

document.write("<hr>");


// ZADANIE 6. POTEGI LICZBY 2

var potegi = new Array();
potegi[0] = 1;

for (var i = 1; i < 100; i++) {
    potegi[i] = potegi[i - 1] * 2;
}

document.write("Potegi liczby 2:<br>");
for (var i = 0; i < 100; i++) {
    document.write(potegi[i] + " ");
}

document.write("<hr>");


// ZADANIE 7. CIAG 3, 6, 9, 12...

var tab3 = new Array();

for (var i = 0; i < 100; i++) {
    tab3[i] = (i + 1) * 3;
}

document.write("Wielokrotnosci liczby 3:<br>");
for (var i = 0; i < 100; i++) {
    document.write(tab3[i] + " ");
}

document.write("<hr>");


// ZADANIE 8. CIAG 2, 4, 8, 16, 32...

var tab4 = new Array();
tab4[0] = 2;