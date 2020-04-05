# HTML Formulare mit PHP verarbeiten

Nachdem das Formular erstellt wurde, müssen die Eingaben ausgewertet werden. Das geschieht mit einer PHP-Seite (ziel.php), deren Dateiname bereits mit dem Attribut `action="ziel.php"` im HTML-form-Element angegeben wurde. Alle Forminhalte sind in dem Array (dazu später mehr) `$_POST` verfügbar. Die Werte `values` können mit dem Namensattribut `name`der Input Tags ausgelesen werden `php $_PHP['name'] = 'value';`. Um die Werte in PHP bessern nutzen zu können, sollte die Werte am besten in einer eigenen Variable gespeichert werden. Dazu wird folgende Notation verwendet:

```php
<?php
/*Die Variable $eingabe erhält hier den Wert des Formfeldes mit dem Namen text1*/
$eingabe = $_POST['text1'];
?>
``` 
Hier ist die dazugehöreige Zeile in der HTML-Datei:
```html
<input type="text" name="text1" />
```

In diesem Beispiel würde nun der Wert des Formfeldes aus dem vorherigen Beispiel ausgelesen und in `$eingabe` abgespeichert. Würde man statt `post`, `get` verwenden, schriebe man entsprechend: `$eingabe = $_GET['text1'];`. Nun ist der Inhalt des Formfeldes in der Variablen gespeichert und kann entsprechend weiter verarbeitet werden.
Beispiel `ziel.php`:
```php
<?php
$eingabe = $_POST['text1'];
$radios = $_POST['radio-button'];
$check = $_POST['human'];
/* Um sich einen Überblick über die den Inhalt einer Variable zu machen verwenden sie die php Funktion
var_dump($variable). z.B. var_dump($_POST) */
var_dump($check);
if ($eingabe != '') {
  print $eingabe;
}
else {
  print 'Es wurde kein Wert übergeben!';
}
if ($radios == 'first') {
  print 'First!';
}
?>
```
>**Merke:** Textfelder `type=text` haben kein `value` Attribut, hier wird der im Formular eingegebene Text an das PHP Skript übergeben. Alle anderen Felder übergeben den Wert des `value` Attributes.
