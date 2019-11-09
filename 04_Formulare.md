#Einführung Formulare mit HTML#

Um Benutzereingaben auf Webseiten zu verarbeiten, werden Formulare mit HTML erstellt, die anschließend vom Server verarbeitet werden (z.B. mit PHP). In diesem Abschnitt wird eine Einführung für das Erstellen vpn Fomrularen mit HTML gegeben.

Formulare sind eigene Elemente in HTML und werden dementsprechend durch Tags erzeugt und können wie andere Elemente mit CSS formatiert werden.
Ein Formular wird durch das <form> tag eingeleitet und am Ende mit </form> geschlossen. Das <form> tag benötigt 2
Attribute, ohne die das Formular nicht funktioniert.
*action: Mit action wird die Zieldatei angegeben, an die die Daten des Formulars gesendet werden.
*method: Mit method wird angegeben, wie die Daten an die Zieldatei übergeben werden sollen. Dabei gibt es
die Werte „get“ und „post“.
◦ Get: ist die Standardmethode für die Übergabe von Werten. Die eingegebenen Werte werden in der URL
sichtbar (→ nicht empfehlenswert bei Passwörtetern, etc.). Allerdings ist „get“ nützlich, wenn die
index.php selbst verändert werden soll. Beispiel: http://www.google.de/search?q=formulare nach dem ?
Stehen die übergebenen Werte.
◦ Post: Mit „post“ werden die Werte nicht in der URL angezeigt (→ besser geeignet bei Passwörtern, etc.),
ungeeignet für Verknüpfungen.
Innerhalb des Formulars werden Eingabefelder erzeugt, die der Benutzer verwenden kann, um das Formular mit Daten
zu füllen.
Dafür verwendet man den <input /> tag, der nicht wieder geschlossen wird. Der input tag ermöglicht eine Fülle an
Attributen, wobei nur ein paar wenige davon wirklich notwendig sind:
 type: ist eines der wichtigsten Attribute. Hier wird festgelegt, um was für eine Art Input es sich handelt:
◦ text (Texteingabe, eine Zeile)
◦ submit (Abschick-Button)
◦ select (Liste mit vordefinierten Werten, die Auswahl erfolgt über ein Dropdownmenü.)
◦ radio (Nur ein Wert kann aus einer Liste angeklickt werden)
◦ checkbox (Mehrere Werte können aus einer Liste angeklickt werden)

name: Hiermit wird dem Element ein Name gegeben. Das name-Attribut wird für die Auswertung für PHP
benötigt und kann bei der Auswertung mit $_POST['name'] abgerufen werden.
 value: Ist der Wert des übergebenen Elements. Bei einer Übergabe mit „get“ stehen name=value Paare in der
url.
Jedes Formular benötigt das <form>-tag, sowie ein Input-Element mit type=“submit“.
Beispiel
```html
<form action="ziel.php" method="post">
<!-- Textfelder haben kein value Attribut, da der Inhalt des Feldes übergeben wird.-->
<input type="text" name="text1" />
<br />
<!-- gleicher Name für eine Gruppe von Radiobuttons oder Checkboxes -->
<input type="radio" name="radio-buttons" value="first" checked="checked">First
<input type="radio" name="radio-buttons" value="second">Second
<br />
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
´´´
