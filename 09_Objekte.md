---
tags:
 - study
 - javascript
---
# Einführung Objekte

Bei Arrays werden mehrere Werte über einen **Index** (`0`, `1`, `2` …) angesprochen. Ein **Objekt** bündelt mehrere Werte, die jeweils einen **Namen** haben – und kann zusätzlich Funktionen enthalten, die mit diesen Werten arbeiten.

Diese Idee, zusammengehörige Daten und Funktionen zu einem „Ding" zusammenzufassen, nennt man **objektorientierte Programmierung**.

## Ein Objekt

Ein Objekt wird mit geschweiften Klammern `{ }` geschrieben. Darin stehen **Eigenschaften** in der Form `name: wert`, durch Kommas getrennt.

```js
const person = {
  name: "Anna",
  alter: 17,
  hobby: "Klettern"
};
```

Auf eine Eigenschaft wird mit einem Punkt zugegriffen:

```js
console.log(person.name);    // "Anna"
person.alter = 18;           // ändern
person.stadt = "Remseck";    // neue Eigenschaft hinzufügen
```

## Methoden

Eine Eigenschaft kann auch eine **Funktion** sein – dann heißt sie **Methode**. Mit `this` greift die Methode auf die anderen Eigenschaften desselben Objekts zu.

```js
const person = {
  name: "Anna",
  alter: 17,
  vorstellen() {
    return `Hallo, ich bin ${this.name} und ${this.alter} Jahre alt.`;
  }
};

console.log(person.vorstellen());   // "Hallo, ich bin Anna und 17 Jahre alt."
```

> **Merke:** `this` bedeutet „dieses Objekt hier". `this.name` ist also die Eigenschaft `name` des Objekts, zu dem die Methode gehört.

Methoden hast du längst benutzt: `zahlen.push(4)` ruft die Methode `push` des Arrays auf, `text.length` liest eine Eigenschaft. Arrays und Strings sind auch Objekte.

## Klassen – eine Vorlage für viele Objekte

Braucht man viele ähnliche Objekte (viele Personen, viele Würfel, viele Konten), schreibt man eine **Klasse**. Sie ist die **Vorlage**, aus der einzelne Objekte erzeugt werden.

```js
class Wuerfel {
  constructor(seiten = 6) {   // wird bei "new" aufgerufen
    this.seiten = seiten;     // eine Eigenschaft des Objekts festlegen
  }

  wuerfeln() {                // eine Methode
    return Math.floor(Math.random() * this.seiten) + 1;
  }
}
```

* Der `constructor` wird beim Erzeugen aufgerufen und legt die Anfangs-Eigenschaften fest.
* Methoden stehen direkt in der Klasse (ohne `function`).

Ein Objekt aus der Klasse erzeugt man mit `new`:

```js
const w1 = new Wuerfel();      // normaler 6-seitiger Würfel
const w2 = new Wuerfel(20);    // 20-seitiger Würfel

console.log(w1.wuerfeln());    // z.B. 4
console.log(w2.wuerfeln());    // z.B. 17
console.log(w2.seiten);        // 20
```

`w1` und `w2` sind zwei eigenständige Objekte derselben Klasse – jedes hat seine eigenen Eigenschaften.

## Zusammengefasst

| Begriff | Bedeutung |
| --- | --- |
| **Objekt** | ein „Ding" mit benannten Eigenschaften (und Methoden) |
| **Eigenschaft** | ein benannter Wert im Objekt (`person.name`) |
| **Methode** | eine Funktion im Objekt (`person.vorstellen()`) |
| **`this`** | „dieses Objekt" – der Zugriff auf die eigenen Eigenschaften |
| **Klasse** | eine Vorlage, aus der Objekte erzeugt werden |
| **`new`** | erzeugt aus einer Klasse ein neues Objekt |

## Übungen

1. Erstelle ein Objekt `buch` mit den Eigenschaften `titel`, `autor` und `seiten`. Gib den Titel in der Konsole aus und ändere danach die Seitenzahl.
2. Ergänze `buch` um eine Methode `beschreibung()`, die mit `this` aus den Eigenschaften einen Satz zusammensetzt und zurückgibt, z.B. „‚Der Hobbit' von Tolkien, 310 Seiten."
3. Schreibe eine Klasse `Hund` mit `constructor(name, rasse)`. Erzeuge drei Hund-Objekte mit `new` und gib ihre Namen aus.
4. Gib der Klasse `Hund` eine Methode `steckbrief()`, die Name und Rasse als Satz zurückgibt (z.B. „Rex ist ein Dackel.") – ähnlich wie die `beschreibung()`-Methode in Aufgabe 2, nur eben in einer Klasse statt in einem einzelnen Objekt.
5. Baue die Klasse `Wuerfel` aus dem Kapitel nach. Würfle in einer Schleife 10-mal und speichere die Ergebnisse in einem Array (siehe [Einführung Arrays](07_Arrays.md)).
6. **Frei:** Überlege dir ein „Ding" aus deinem Projekt-Thema, das man als Klasse beschreiben könnte (ein Auto, ein Rezept, ein Song, ein Spielcharakter …). Welche Eigenschaften hat es, welche Methode wäre sinnvoll? Schreibe die Klasse und erzeuge zwei Objekte daraus.
