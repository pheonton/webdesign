---
tags:
 - study
 - javascript
---
# Einführung Funktionen

Eine **Funktion** ist ein benannter Block von Anweisungen, der bei Bedarf aufgerufen wird. Funktionen machen den Code übersichtlicher und ersparen es, denselben Ablauf mehrfach zu schreiben. Einige Funktionen sind schon bekannt: `console.log(...)`, `Math.floor(...)`, `document.getElementById(...)`.

## Funktion definieren und aufrufen

```js
function begruesse(name) {
  console.log("Hallo, " + name + "!");
}

begruesse("Anna");   // Ausgabe: Hallo, Anna!
begruesse("Ben");    // Ausgabe: Hallo, Ben!
```

* `function` leitet die Definition ein, danach folgt der **Name**.
* In den runden Klammern stehen die **Parameter** – Platzhalter für Werte, die beim Aufruf übergeben werden.
* In den geschweiften Klammern steht der **Funktionsrumpf**, der beim Aufruf ausgeführt wird.

## Parameter und Rückgabewert

Beim Aufruf werden die Werte (**Argumente**) der Reihe nach den Parametern zugeordnet – die **Reihenfolge** entscheidet, nicht der Name.

Mit `return` gibt eine Funktion einen Wert zurück. Nach `return` endet die Funktion sofort.

```js
function summe(a, b) {
  return a + b;
}

let ergebnis = summe(3, 4);   // ergebnis = 7
console.log(summe(10, 5));     // 15
```

> **Merke:** Ohne `return` liefert eine Funktion den Wert `undefined`.

### Standardwerte für Parameter

Ein Parameter kann einen Standardwert bekommen, der verwendet wird, wenn beim Aufruf kein Argument übergeben wird:

```js
function begruesse(name = "Gast") {
  console.log("Hallo, " + name + "!");
}

begruesse("Anna");   // Hallo, Anna!
begruesse();          // Hallo, Gast!
```

## Sichtbarkeit von Variablen (Scope)

Variablen, die mit `let` oder `const` **innerhalb** einer Funktion angelegt werden, existieren nur dort. Außerhalb sind sie nicht bekannt.

```js
function rechne() {
  const zwischenergebnis = 42;
}
console.log(zwischenergebnis);   // Fehler: hier nicht bekannt
```

Deshalb ist es egal, ob eine Variable außerhalb der Funktion denselben Namen hat wie ein Parameter.

## Pfeilfunktionen (`=>`)

Für kurze Funktionen gibt es eine knappere Schreibweise mit einem Pfeil `=>`. Die Funktion wird meist einer Variablen (`const`) zugewiesen.

```js
const doppelt = zahl => zahl * 2;
const summe = (a, b) => a + b;

doppelt(5);      // 10
summe(3, 4);     // 7
```

* Ein einzelner Parameter braucht keine Klammern, mehrere schon.
* Steht rechts vom `=>` nur **ein Ausdruck**, ist er automatisch der Rückgabewert (kein `return` nötig).
* Für mehrere Anweisungen braucht man `{ }` und `return`:

```js
const begruessung = name => {
  const text = "Hallo, " + name + "!";
  return text;
};
```

Pfeilfunktionen werden vor allem dort verwendet, wo eine Funktion als **Argument** übergeben wird – etwa bei `forEach` und `map` (siehe [Einführung Arrays](07_Arrays.md#über-arrays-iterieren)) oder bei `addEventListener` (siehe [Events und EventListener](06_EventListener.md)). Dort ist auch die längere Schreibweise `function(...) { ... }` üblich – beide bewirken dasselbe.

```js
[1, 2, 3].forEach(n => console.log(n));
```
