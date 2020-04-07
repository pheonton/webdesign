---
tags:
 - study
 - php
 - xml
---
# Einführung simpleXML

Bisher war es nur möglich, die Daten aus einem Array in PHP auszulesen. Dies hat allerdings den Nachteil, dass der Array immer in der entsprechenden PHP-Datei vorhanden sein muss. Um die Daten in einer separaten Datei abzulegen kann das Extensible Markup Language Format (XML) verwendet werden.

## XML Dateiformat

XML gliedert die Daten ähnlich wie HTML mit Tags. Im Gegensatz zu HTML können die Tags in XML frei gewählen werden. Allerdings gelten dieselben Regeln wie in HTML auch: Tags müssen geöffnet und geschlossen werden, Tags dürfen ineinanderverschachtelt werden, aber befor ein Tag geschlopssen wird, müssen alle Tags innerhalb auch geschlossen werden.

Beispiel
```xml
<lektueren>
  <title>Leküren Übersicht</title>
  <lektuere>
    <titel>Agnes</titel>
    <autor>Peter Stamm</autor>
  </lektuere>
  <lektuere>
    <titel>Ilias</titel>
    <autor>Homer</autor>
  </lektuere>
</lektueren>
```
>**Hinweis:** Das erste Element (hier <lektueren>) ist das root Element es umschließt alle anderen Elemente und muss immer vorhanden sein, wird aber bei der Weiterverarbeitung nicht angesprochen.

XML-Dateien werden mit der Endung .xml gespeichert.

## XML-Dateien mit PHP auslesen

Um eine XML-Daten einzulesen, muss die XML-Datei im PHP-Skript geladen werden:
```php
<?php
  $variable = simplexml_load_file('Daten.xml');
?>
```
http://php.net/manual/de/function.simplexml-load-file.php
Hiermit wird der Inhalt der XML-Datei (`Daten.xml`) in der Variablen (`$variable`) als Objekt ("Array mit Bedeutung" http://php.net/manual/de/language.types.object.php) gespeichert.
Die einzelnen Elemente werden aus einem Objekt, ähnlich wie in einem merhdimensionalen Array, von dem übergeordneten Element zum untergeordneten Element absteigend ausgewählt, um in eine nächstuntere Ebene zu gelangen wird ein Pfeil `->` verwendet. Befindet sich ein Array im Objekt, werden seine Elemente in bekannter Weise mit dem entsprechenden Key in eckigen Klammern ausgewählt.

```php
<?php
  $title = $variable->lektuere[0]->titel;
?>
```
In der Variablen `$title` ist nun im Beispiel „Agnes“ eingespeichert. `lektuere` ist eine Array, da es in der XML-Datei mehrere Elemente dazu gibt. Um alle Lektürentitel auszugeben wird die bekannte Funktion `foreach` verwendet

```php
<?php
  foreach ($variable->lektuere as $buch) {
    print '<h2>' . $buch->titel . '</h2>';
  }
?>
```

Um sich die Struktur des Objektes einer eingelesenen XML Datei anzuschauen, wird die Funktion `print_r()` oder `var_dump()` verwendet.

Beispiel
```php
<?php
  $variable = simplexml_load_file('Daten.xml');
  print_r($variable);
  foreach ($variable->lekuere as $buch) {
    var_dump($buch);
  }
?>
```


## XML-Daten mit PHP erzeugen

Um eine neue XML Datei mit PHP anzulegen, wird eine String im XML-Format definiert.
```php
<?php
  # zwischen <<<XMl und XML; befindet sich der Inhalt
  $xmlstring = <<<XML
                <?xml version='1.0' standalone='yes'?>
                <root>
                </root>
               XML;
  # jetzt wird ein neues simpleXML Objekt angelegt mit dem XML String als Inhalt
  $xml = new SimpleXMLElement($xmlstring);
?>
```
Natürlich können schon mehr Elemente im String stehen, oder sie werden nachher programmatisch hinzugefügt mit der SimpleXML Funktion `adChild`.
```php
<?php
  $xml->addChild('user');
  $xml->user->addChild('name', 'email');
?>
```
Mit `->asXML(daten.xml)` wird das xml Objekt in eine XML Datei mit Namen `daten.xml` umgewandelt und gespeichert.
```
<?php
  $xml->asXML('daten.xml');
?>
```
Die XML sieht dann so aus:
```xml
<?xml version='1.0' standalone='yes'?>
<root>
  <user>
    <name></name>
    <email></email>
  </user>
</root>
```
Die Tags werden durch Zuweisung mit Inhalt gefüllt
```php
<?php
  # user[0] wählt das erste user Element und setzt den Wert von name auf "peter"
  $xml->user[0]->name = "peter";
  # der Wert von email wird auf "peter@example.com"
  $xml->user[0]->email = "peter@example.com";
  # Das SimpleXML Objekt muss dann nochmal gespeichert werden.
  $xml->asXML('daten.xml');
?>
```
