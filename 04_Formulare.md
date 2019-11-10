# Einführung Formulare mit HTML

Um Benutzereingaben auf Webseiten zu verarbeiten, werden Formulare mit HTML erstellt, die anschließend vom Server verarbeitet werden (z.B. mit PHP). In diesem Abschnitt wird eine Einführung für das Erstellen vpn Fomrularen mit HTML gegeben.

Formulare sind eigene Elemente in HTML und werden dementsprechend durch Tags erzeugt und können wie andere Elemente mit CSS formatiert werden.
Ein Formular wird durch das `<form>` tag eingeleitet und am Ende mit `</form>` geschlossen. Das `<form>` tag benötigt 2 Attribute, ohne die die Verarbeitung des Formulars nicht funktioniert.
```html
<form action="ziel.php" method="post"><!-- Formularfelder --></form>
```
* **action** Mit `action` wird die Zieldatei angegeben, an die die Daten des Formulars gesendet und dort weiterverarbeitet werden.
* **method** Mit `method` wird angegeben, wie die Daten an die Zieldatei übergeben werden sollen. Dabei gibt es die Werte `get` und `post`.
  * **get** Mit `get` werden die übergebenen Werte sichtbar an die URL angehängt. Allerdings ist die Länge auf ca. 2000 Zeichen begrenzt.
  Beispiel: `http://www.google.de/search?q=formulare&tbs=qdr:y` nach dem `?` Stehen die übergebenen Werte durch ein `&` getrennt.
  * **post** Mit „post“ werden die Werte nicht in der URL angezeigt und es gibt kein Limit für die länge der übergebenen Werte. Diese Methode sollte für Formulare beforzugt werden.

Für die meisten Felder des Formulars wird das `<input>` Tag verwendet. Die Art des Felder wird durch das Attribute `type` festgelegt. Es gibt viele Werte für `type`, hier werden nur die essentiellen aufgelistet.
* `type="text"` Texteingabe, eine Zeile
* `type="submit"` Abschick-Button (Ohne diesen Butten funktionert nichts)
* `type="select"` Liste mit vordefinierten Werten, die Auswahl erfolgt über ein Dropdownmenü.)
* `type="radio"` Nur ein Wert kann aus einer Liste von Möglichekiten ausgewählt werden.
* `type="checkbox"` Eine Box zum ankreuzen.

[Mehr zu Formularfeldern @ selfhtml](https://wiki.selfhtml.org/wiki/HTML/Formulare/input)

Um das Feld später zu verarbeiten, bekommt es das Attribut `name` mit einem eindeutigen, aber selbsgewähltem Wert.

> Merke: Radiobuttons gehören zu einer Auswahlgruppe, wenn das `name` Attribut den gleichen Wert hat. Alle anderen Felder erhalten jeweils einen Wert der nur einmal vorkommen darf.

Der Inhalt wird mit dem Attribut `value` übergeben. Dabei kann der Wert von `value` beliebig gewählt werden.

> Merke: Textfelder haben keine `value` Attribut, da hier die Benutzereingabe übergeben wird.

Inherhalb des `<form>` Tags können Texte und beliebige andere HTML Tags verwendet werden.

Beispiel
```html
<form action="ziel.php" method="post">
  <!-- Textfelder haben kein value Attribut, da der Inhalt des Feldes übergeben wird.-->
  <input type="text" name="text1" />
  <input type="text" name="text2" />
  <br />
  <!-- gleiches name Attribute für eine Gruppe von Radio-buttons -->
  <input type="radio" name="radio-buttons" value="first" checked="checked">First
  <input type="radio" name="radio-buttons" value="second">Second
  <br />
  <!-- Check-boxen benötigen hingegen unterschiedliche name Attribute -->
  <input type="checkbox" name="alien" value="Alien" checked="checked">Alien
  <input type="checkbox" name="air" value="Luftpost" >Luftpost
  <br />
  <select name="liste">
    <option value="o1" selected="selected">Option 1</option>
    <option value="o2">Option 2</option>
    <option value="o3">Option 3</option>
  </select>
  <input type="submit" value="Abschicken!" />
</form>
```
