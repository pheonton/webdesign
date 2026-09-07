---
tags:
 - study
 - html
 - javascript
---
# Events und EventListener

Ein **Event** (Ereignis) ist etwas, das auf der Seite passiert: ein Klick, ein Tastendruck, das Absenden eines Formulars, das fertige Laden der Seite. Mit einem **EventListener** wartet JavaScript auf ein bestimmtes Event und führt dann eine Funktion aus.

## Beispiel: auf einen Klick reagieren

Beim Klick auf einen Button soll ein Text erscheinen.

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Text anzeigen</title>
</head>
<body>
  <button id="anzeigeButton">Text anzeigen</button>
  <div id="textContainer"></div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const button = document.getElementById('anzeigeButton');
      const textContainer = document.getElementById('textContainer');

      button.addEventListener('click', function() {
        textContainer.textContent = "Dieser Text erscheint nach dem Klick.";
      });
    });
  </script>
</body>
</html>
```

## Erläuterung

**`document.addEventListener('DOMContentLoaded', function() { ... })`**
`DOMContentLoaded` ist ein Event, das ausgelöst wird, sobald das HTML-Dokument vollständig geladen und geparst wurde – also alle HTML-Elemente vorhanden sind. Der Code darin läuft erst danach.

> **Merke:** Statt des `DOMContentLoaded`-Wrappers kann man das `<script>` auch einfach ans **Ende des `<body>`** setzen (siehe [Einführung JavaScript](05_JavaScript.md#javascript-einbinden)). Dann sind die Elemente ebenfalls schon geladen, wenn der Code läuft.

**`const button = document.getElementById('anzeigeButton');`**
`document.getElementById(...)` sucht im HTML-Dokument nach dem Element mit der angegebenen `id` und gibt es zurück. Das Ergebnis wird in einer Variable gespeichert, damit später darauf zugegriffen werden kann.

**`button.addEventListener('click', function() { ... });`**
`addEventListener` hängt einen Listener an das Element. Das erste Argument ist der **Name des Events** (`'click'`), das zweite die **Funktion**, die ausgeführt wird, wenn das Event eintritt.

**`textContainer.textContent = "...";`**
`textContent` ist der Textinhalt eines Elements. Weist man ihm einen neuen Wert zu, ändert sich der auf der Seite angezeigte Text.

Häufige Events: `click`, `submit` (Formular abgeschickt), `input` (Eingabe geändert), `keydown` (Taste gedrückt), `mouseover` (Maus über dem Element).

## Nicht empfohlen: `onclick` im HTML

Ein Klick lässt sich auch mit einem `onclick`-Attribut direkt im HTML abfangen:

```html
<button onclick="zeigeText()">Text anzeigen</button>
```

Das vermischt HTML und JavaScript und wird schnell unübersichtlich. Besser ist `addEventListener` im `<script>`, damit HTML (Struktur) und JavaScript (Verhalten) getrennt bleiben.

## Daten aus einem Formular auslesen

Ein Formular löst beim Absenden das Event `submit` aus. Der Listener wird an das `<form>`-Element gehängt.

```html
<form id="kontakt">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Absenden</button>
</form>

<p id="ausgabe"></p>

<script>
  const formular = document.getElementById('kontakt');
  const ausgabe = document.getElementById('ausgabe');

  formular.addEventListener('submit', function(event) {
    event.preventDefault();                       // verhindert das Neuladen der Seite
    const name = document.getElementById('name').value;
    ausgabe.textContent = "Hallo, " + name + "!";
  });
</script>
```

**`event.preventDefault()`**
Normalerweise schickt der Browser beim `submit` die Daten an einen Server und lädt die Seite neu. `preventDefault()` unterbindet das, damit wir die Eingaben selbst mit JavaScript verarbeiten können. Die Funktion bekommt dafür das `event`-Objekt als Parameter.

**`.value`**
`document.getElementById('name').value` liefert den Text, der aktuell im Feld steht. `.value` funktioniert für `<input>`, `<textarea>` und `<select>`.

> **Merke:** Ob eine Checkbox oder ein Radio-Button angekreuzt ist, steht nicht in `.value`, sondern in `.checked` (`true` / `false`).
