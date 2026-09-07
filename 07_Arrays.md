---
tags:
 - study
 - javascript
---
# Einführung Arrays

Bis jetzt wurde in einer Variablen genau ein Wert gespeichert. Ein **Array** ist eine geordnete Liste von Werten in einer einzigen Variablen. Jeder Wert hat einen **Index**, der bei `0` beginnt. Ein Array kann beliebige Werte enthalten – Zahlen, Strings, auch andere Arrays (`const matrix = [[1, 2], [3, 4]]`, Zugriff dann mit `matrix[0][1]`). Seine Größe kann sich jederzeit ändern.

## Array erstellen und Zugriff

```js
const farben = ["rot", "grün", "blau"];

console.log(farben[0]);      // "rot"
console.log(farben[2]);      // "blau"
console.log(farben.length);  // 3   (Anzahl der Elemente)

farben[1] = "gelb";          // Element ändern  ->  ["rot", "gelb", "blau"]

const leer = [];             // leeres Array
```

> **Merke:** `const` verhindert nur, dass der Variablen eine *neue* Liste zugewiesen wird. Der Inhalt der Liste (Elemente hinzufügen, ändern, entfernen) kann sich trotzdem ändern.

> **Merke:** Sollen die Werte einen *Namen* statt einer Nummer haben (`augenfarbe: "braun"`), verwendet man ein **Objekt** `{ }` statt eines Arrays. Objekte sind ein eigenes Thema.

## Elemente hinzufügen & entfernen

### push() / pop() – am Ende

```js
const zahlen = [1, 2, 3];
zahlen.push(4);                 // [1, 2, 3, 4]
const letztes = zahlen.pop();   // letztes = 4, zahlen = [1, 2, 3]
```

### unshift() / shift() – am Anfang

```js
zahlen.unshift(0);              // [0, 1, 2, 3]
const erstes = zahlen.shift();  // erstes = 0, zahlen = [1, 2, 3]
```

### splice() – an beliebiger Stelle einfügen oder löschen

`array.splice(start, anzahl, ...neueElemente)`

* **start** – Index, ab dem geändert wird
* **anzahl** – wie viele Elemente ab `start` gelöscht werden (`0` = nichts löschen)
* **neueElemente** – was ab `start` eingefügt wird (optional)

```js
const buchstaben = ["a", "b", "c", "d"];

buchstaben.splice(1, 2);            // löschen  ->  ["a", "d"]
buchstaben.splice(1, 0, "X", "Y");  // einfügen ->  ["a", "X", "Y", "d"]
buchstaben.splice(1, 2, "NEU");     // ersetzen ->  ["a", "NEU", "d"]
```

## Über Arrays iterieren

```js
const städte = ["Berlin", "Wien", "Zürich"];

// klassische for-Schleife – man hat den Index i
for (let i = 0; i < städte.length; i++) {
  console.log(i, städte[i]);
}

// for...of – man bekommt direkt den Wert (empfohlen)
for (const stadt of städte) {
  console.log(stadt);
}

// forEach – Wert und Index
städte.forEach((stadt, index) => {
  console.log(`${index}: ${stadt}`);
});
```

### Kurzschreibweise für Funktionen: `=>`

`stadt => console.log(stadt)` ist eine kurze Schreibweise für eine Funktion: links vom `=>` steht der Parameter, rechts davon, was die Funktion tut. Diese Schreibweise wird bei `forEach`, `map`, `filter` usw. verwendet.

## Array mit Zufallszahlen füllen

`Math.random()` liefert eine Zufallszahl zwischen 0 und 1, `Math.floor()` rundet ab.

```js
const zahlen = [];
for (let i = 0; i < 10; i++) {
  zahlen.push(Math.floor(Math.random() * 10) + 1);  // Zahl von 1 bis 10
}
```

## Wichtige Array-Methoden

| Methode | Beschreibung |
| --- | --- |
| `map()` | neues Array, in dem jedes Element umgeformt wurde |
| `filter()` | neues Array nur mit Elementen, die eine Bedingung erfüllen |
| `find()` | das erste Element, das eine Bedingung erfüllt |
| `includes()` | `true` / `false` – ist ein Wert enthalten? |
| `join()` | fügt alle Elemente zu einem String zusammen |
| `sort()` | sortiert das Array (verändert das Original) |
| `reduce()` | fasst das Array zu einem einzigen Wert zusammen |

```js
const nummern = [1, 2, 3, 4, 5, 6];

const doppelt  = nummern.map(n => n * 2);          // [2, 4, 6, 8, 10, 12]
const gerade   = nummern.filter(n => n % 2 === 0); // [2, 4, 6]
const gefunden = nummern.find(n => n > 3);         // 4
nummern.includes(3);                               // true
nummern.join(", ");                                // "1, 2, 3, 4, 5, 6"

const summe = nummern.reduce((summe, n) => summe + n, 0);  // 21
```

## sort() im Detail

Ohne Vergleichsfunktion wandelt `sort()` alle Elemente in Strings um und vergleicht deren Zeichencodes – bei Zahlen führt das zu falschen Ergebnissen.

```js
["Zara", "Anna", "Mike"].sort();   // ["Anna", "Mike", "Zara"]   ✓
[10, 9, 2, 100].sort();            // [10, 100, 2, 9]            ✗
```

Mit einer **Vergleichsfunktion** `(a, b)` legt man die Reihenfolge fest:

* Rückgabewert < 0 → `a` kommt vor `b`
* Rückgabewert > 0 → `b` kommt vor `a`
* Rückgabewert = 0 → Reihenfolge bleibt

```js
[10, 9, 2, 100].sort((a, b) => a - b);   // aufsteigend:  [2, 9, 10, 100]
[10, 9, 2, 100].sort((a, b) => b - a);   // absteigend:   [100, 10, 9, 2]

["Banane", "Kiwi", "Apfel"].sort((a, b) => a.length - b.length);
// nach Länge:  ["Kiwi", "Apfel", "Banane"]
```

## Übungen

1. Erstelle ein Array `früchte` mit 3 Einträgen. Füge `"Mango"` am Ende hinzu.
2. Erstelle ein Array `zahlen` mit 7 zufälligen Zahlen von 1 bis 50.
3. Ersetze das zweite Element in `früchte` mit `"Ananas"` (`splice()`).
4. Gib alle Zahlen > 10 aus `zahlen` zurück – einmal mit einer Schleife, einmal mit `filter()`.
5. Berechne die Summe (und das Produkt) aller Elemente in `zahlen` mit einer Schleife.
6. Sortiere `früchte` alphabetisch – einmal mit einer Schleife, einmal mit `sort()`.
7. Berechne die Ableitung eines Polynoms (Koeffizienten-Array) mit `forEach()`.
   *Hintergrund:* Ein Polynom `f(x) = aₙxⁿ + … + a₁x + a₀` wird als Array gespeichert, Index `i` entspricht dem Grad `i`. Ableitungsregel: Koeffizient × Grad, dann Grad − 1. Beispiel: `[5, 0, -2, 3]` (also `3x³ − 2x² + 5`) → `[0, -4, 9]` (also `9x² − 4x`). Verwende zuerst ein festes, dann ein zufällig erzeugtes Polynom.
8. Löse Übung 7 so, dass das Polynom vom Benutzer eingegeben werden kann.

[Weiterführend: MDN Web Docs – Array](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
