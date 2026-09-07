---
tags:
 - study
 - javascript
---
# Einführung JavaScript

JavaScript ist eine Programmiersprache, die **direkt im Browser** läuft – ein Server wird nicht benötigt. Mit JavaScript wird eine Webseite *dynamisch*: Sie kann auf Eingaben reagieren, Inhalte verändern, rechnen und vieles mehr.

HTML legt die Struktur fest, CSS die Darstellung – JavaScript ergänzt das **Verhalten**.

## JavaScript einbinden

JavaScript-Code steht in einem `<script>`-Tag. Man schreibt ihn meist ans **Ende des `<body>`**, damit die HTML-Elemente schon existieren, wenn der Code ausgeführt wird.

```html
<body>
  <h1>Meine Seite</h1>

  <script>
    // hier steht der JavaScript-Code
  </script>
</body>
```

Bei mehr Code lagert man ihn in eine eigene Datei `script.js` aus und bindet sie ein:

```html
<script src="script.js"></script>
```

### Ausgabe zum Ausprobieren

Zum Testen gibt es zwei einfache Ausgaben:

* `console.log(...)` schreibt in die **Konsole** der Entwicklerwerkzeuge (im Browser mit `F12` zu öffnen).
* `alert(...)` zeigt ein kleines Hinweisfenster.

```js
console.log("Hello World!");   // erscheint in der Konsole
alert("Hello World!");         // erscheint als Popup
```

Wie JavaScript den *sichtbaren* Inhalt der Seite ändert und auf Klicks reagiert, steht in [Events und EventListener](06_EventListener.md).

> **Merke:** Jede Anweisung wird mit einem Semikolon `;` abgeschlossen. Kommentare stehen hinter `//` oder zwischen `/*` und `*/`.

## Variablen

Eine Variable ist ein benannter Behälter für einen Wert. Sie wird mit `let` oder `const` angelegt, der Wert wird mit `=` zugewiesen.

```js
let name = "Anna";
const pi = 3.14159;
```

* `const` – für Werte, die sich **nicht** ändern.
* `let` – für Werte, die sich ändern können.

```js
let punkte = 0;
punkte = punkte + 10;   // punkte ist jetzt 10
```

### Texte zusammensetzen

Strings werden mit `+` verbunden:

```js
let name = "Anna";
let gruss = "Hallo, " + name + "!";   // "Hallo, Anna!"
```

Übersichtlicher geht das mit **Backticks** `` ` `` und `${...}`:

```js
let gruss = `Hallo, ${name}!`;        // "Hallo, Anna!"
```

## Typen von Variablen

Eine Variable kann Werte unterschiedlichen Typs enthalten:

| Typ | Beschreibung | Beispiele |
| --- | --- | --- |
| `boolean` | Wahrheitswert | `true`, `false` |
| `number` | Zahl (ganz oder mit Punkt statt Komma) | `1`, `-2`, `3.14` |
| `string` | Text, in Anführungszeichen oder Backticks | `"Hallo"`, `'Hallo'`, `` `Hallo` `` |
| `undefined` | Variable ohne zugewiesenen Wert | |
| `null` | bewusst „kein Wert" | |

Zusammengesetzte Typen (`array`, `object`) fassen mehrere Werte zusammen – dazu mehr in einem späteren Kapitel.

Den Typ eines Werts liefert `typeof`:

```js
typeof "Hallo"   // "string"
typeof 42        // "number"
```

### Typen umwandeln

Manchmal muss ein Text in eine Zahl umgewandelt werden (mit dem Text `"42"` kann man nicht rechnen, mit der Zahl `42` schon):

```js
let text = "42";
let zahl = Number(text);      // aus "42" wird 42
let ergebnis = zahl + 8;      // 50
```

Umgekehrt macht `String(...)` aus einer Zahl einen Text.

> **Merke:** JavaScript wandelt Typen oft automatisch um – nicht immer wie erwartet: `"3" + 4` ergibt `"34"` (Text), `"3" * 4` ergibt `12` (Zahl).

## Operatoren

| Gruppe | Operatoren |
| --- | --- |
| Arithmetik | `+` `-` `*` `/` `%` (Rest der Division) |
| Zuweisung | `=`, `+=` (`x += 5` bedeutet `x = x + 5`), `++` (um 1 erhöhen) |
| Vergleich | `===` gleich, `!==` ungleich, `<` `>` `<=` `>=` |
| Logik | `&&` und, `||` oder, `!` nicht |

> **Merke:** Das `=` in `let x = 5` ist eine **Zuweisung**, keine Gleichung: der Wert rechts wird in die Variable links geschrieben. Zum *Vergleichen* nimmt man `===`.

> **Merke:** Nutze `===` und `!==` – sie prüfen Wert **und** Typ. `==` und `!=` sind fehleranfällig, weil sie die Typen vorher umwandeln (`0 == ""` ergibt `true`).

## if – Verzweigung

Mit `if` wird eine Anweisung nur ausgeführt, wenn eine **Bedingung** (in runden Klammern) `true` ergibt. Die Anweisung steht in geschweiften Klammern `{ }`.

```js
let a = 5;
let b = 7;

if (a > b) {
  console.log(`${a} ist größer als ${b}`);
} else if (a === b) {
  console.log(`${a} und ${b} sind gleich`);
} else {
  console.log(`${a} ist kleiner als ${b}`);
}
```

`else if` und `else` sind optional.

Bedingungen lassen sich mit `&&` / `||` kombinieren und verschachteln:

```js
if (typeof a === "number" && typeof b === "number") {
  if (a > b) {
    // ...
  }
}
```

## for – Schleife

Eine Schleife wiederholt Anweisungen. Die `for`-Schleife hat drei Ausdrücke in den runden Klammern:

```js
for (Start; Bedingung; Schritt) {
  // wird wiederholt, solange die Bedingung true ist
}
```

Beispiel – die Zahlen 1 bis 10 ausgeben:

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Mit `break` kann die Schleife vorzeitig verlassen werden. Für Wiederholungen ohne festen Zähler gibt es die `while`-Schleife: `while (Bedingung) { ... }`.

> **Merke:** Die Bedingung muss irgendwann `false` werden, sonst läuft die Schleife endlos und der Browser reagiert nicht mehr.

## Übungen

1. Binde ein `<script>` ein und gib mit `console.log` eine Begrüßung aus. Öffne die Konsole (`F12`) und finde die Ausgabe.
2. Lege Variablen für deinen Namen und dein Alter an. Gib mit einem Template Literal den Satz „Ich heiße … und bin … Jahre alt." aus.
3. Nimm zwei Zahlen-Variablen und gib Summe, Differenz, Produkt und den Rest der Division (`%`) aus.
4. Frage mit `if`/`else` etwas ab – ist eine Zahl gerade? ist das Alter ≥ 18? – und gib passenden Text aus.
5. Gib mit einer `for`-Schleife die Zahlen von 1 bis 20 aus. Für Vielfache von 3 gib stattdessen „fizz" aus, für Vielfache von 5 „buzz", für beides „fizzbuzz".
6. **Frei:** Denk dir eine kleine Rechnung oder Entscheidung zu deinem Thema aus – ein Punktestand, ein Preis mit Rabatt, eine grobe Schätzung „Tage bis …".
