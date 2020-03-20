[Home](README.md)

# HTML Formulare mit PHP verarbeiten

Nachdem das Formular erstellt wurde, müssen die Eingaben ausgewertet werden. Dafür wird eine PHP-Seite erstellt (,
deren Name bereits mit dem Attribut action im HTML-form-Element angegeben wurde. Um den Inhalt in PHP besser
nutzen zu können, sollte diese Eingabe am besten in einer eigenen Variable gespeichert werden. Dazu wird folgende
notation verwendet:
`$eingabe = $_POST['text1'];`
In diesem Beispiel würde nun das Input-Element aus dem vorherigen Beispiel ausgelesen und in $eingabe
abgespeichert werden. Würde man statt post, get verwenden, schriebe man entsprechend:
`$eingabe = $_GET['text1'];`
Dieser Befehl setzt sich aus dem Variablennamen mit vorangestelltem $ Zeichen,
$_, der Methode, einer eckigen Klammer, dem Name des Elements in '' sowie einer schließenden Klammer zusammen:
`$variablenname = $_method['name'];`
Nun ist der Inhalt in der Variablen gespeichert und kann entsprechend weiter verarbeitet werden.
Beispiel ziel.php:
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
