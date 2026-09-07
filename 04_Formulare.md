---
tags:
 - study
 - html
---
# Einführung Formulare mit HTML

Formulare dienen dazu, Eingaben der Benutzerin oder des Benutzers entgegenzunehmen – Text, Auswahlfelder, Ankreuzboxen usw. In diesem Kapitel geht es darum, ein Formular mit HTML aufzubauen und mit CSS zu gestalten. Was mit den eingegebenen Daten geschieht, behandeln wir später mit JavaScript.

## Basisaufbau

Ein Formular ist ein eigenes HTML-Element. Es beginnt mit `<form>` und endet mit `</form>`; dazwischen stehen die Formularfelder. Zwischen den Tags dürfen auch normale Texte und andere HTML-Tags (Überschriften, Absätze usw.) stehen. Ein Formular kann wie jedes andere Element mit CSS formatiert werden.

```html
<form id="kontakt">
  <!-- Formularfelder -->
</form>
```

Das Attribut `id` gibt dem Formular einen eindeutigen Namen. Darüber wird es später von JavaScript angesprochen.

## Eingabefelder

Die meisten Felder werden mit dem `<input>`-Tag erzeugt. Die Art des Feldes legt das Attribut `type` fest:

| `type` | Feld |
| --- | --- |
| `text` | einzeilige Texteingabe |
| `email` | E-Mail-Adresse (der Browser prüft grob das Format) |
| `password` | Texteingabe, die verdeckt dargestellt wird |
| `number` | Zahleneingabe |
| `date` | Datumsauswahl |
| `radio` | Auswahl *einer* Möglichkeit aus einer Gruppe |
| `checkbox` | einzelne Box zum Ankreuzen |
| `submit` | Button, der das Formular absendet |

Für mehrzeilige Eingaben (z.B. eine Nachricht) nimmt man kein `<input>`, sondern `<textarea></textarea>`. Eine Liste mit vordefinierten Werten (Dropdown) wird mit `<select>` und darin `<option>`-Tags gebaut.

[Mehr zu Formularfeldern @ selfhtml](https://wiki.selfhtml.org/wiki/HTML/Formulare/input)

### Beschriftung mit `<label>`

Jedes Feld sollte eine Beschriftung bekommen. Das `<label>`-Tag wird über das Attribut `for` mit der `id` des Feldes verbunden. Ein Klick auf die Beschriftung setzt dann den Cursor ins Feld.

```html
<label for="name">Name</label>
<input type="text" id="name" name="name">
```

### Wichtige Attribute

| Attribut | Bedeutung |
| --- | --- |
| `id` | eindeutiger Name des Feldes; verbindet das `<label>` und wird später von JavaScript zum Auslesen genutzt |
| `name` | benennt das Feld innerhalb des Formulars; Radio-Buttons einer Gruppe teilen sich denselben `name` |
| `value` | der Wert, der zählt, wenn das Feld ausgewählt ist (bei `radio`, `checkbox`, `option`) |
| `placeholder` | grauer Hinweistext im leeren Feld |
| `required` | das Formular lässt sich nur absenden, wenn das Feld ausgefüllt ist |
| `checked` / `selected` | Feld bzw. Option ist von Anfang an ausgewählt |

> **Merke:** Radio-Buttons gehören zur selben Auswahlgruppe, wenn ihr `name`-Attribut den gleichen Wert hat. Alle übrigen Felder bekommen einen `name`, der nur einmal vorkommt.

> **Merke:** Bei Textfeldern lässt man `value` meist weg – dort zählt, was der Benutzer eintippt.

## Beispiel

```html
<form id="kontakt">
  <p>
    <label for="name">Name</label><br>
    <input type="text" id="name" name="name" placeholder="Vor- und Nachname" required>
  </p>
  <p>
    <label for="email">E-Mail</label><br>
    <input type="email" id="email" name="email" required>
  </p>
  <p>
    <label for="nachricht">Nachricht</label><br>
    <textarea id="nachricht" name="nachricht" rows="4"></textarea>
  </p>
  <p>
    Anrede:
    <label><input type="radio" name="anrede" value="frau" checked> Frau</label>
    <label><input type="radio" name="anrede" value="herr"> Herr</label>
  </p>
  <p>
    <label><input type="checkbox" name="newsletter" value="ja"> Newsletter abonnieren</label>
  </p>
  <p>
    <label for="land">Land</label>
    <select id="land" name="land">
      <option value="de" selected>Deutschland</option>
      <option value="at">Österreich</option>
      <option value="ch">Schweiz</option>
    </select>
  </p>
  <button type="submit">Absenden</button>
</form>
```

> **Merke:** `<button type="submit">` und `<input type="submit">` tun dasselbe. `<button>` kann zusätzlich HTML als Beschriftung enthalten.

In einem späteren Kapitel lesen wir die eingegebenen Werte mit JavaScript aus und verarbeiten sie.
