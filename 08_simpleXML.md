---
tags:
 - study
 - php
 - xml
---
# Einführung simpleXML

Bisher war es nur möglich, die Daten aus einem Array auszulesen. Dies hat allerdings den Nachteil, dass der Array immer in der entsprechenden PHP-Datei vorhanden sein muss, was allerdings nicht immer der Fall ist. Deshalb ist es deutlich praktischer, die Daten in einer separaten Datei abzulegen und diese mit PHP auszulesen. Hierfür gibt es XML und die entsprechende Funktion in PHP: SimpleXML.

## Daten im XML-Format speichern

Zuerst müssen die Daten in einem entsprechenden Format abgespeichert werden. Hierfür
verwenden Sie XML. Dies bietet die Möglichkeit, die Daten ähnlich wie in HTML zu gliedern, und ist
deutlich übersichtlicher als mehrdimensionale Arrays. Im Gegensatz zu HTML können die Tags in XML frei gewählen werden. Allerdings gelten dieselben Regeln wie in HTML auch: Tags müssen geöffnet und geschlossen werden; Tags dürfen ineinander
verschachtelt werden, aber befor ein Tag geschlopssen wird, müssen alle Tags innerhlab auch geschlossen werden.

Beispiel
```xml
<lektueren>
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
>**Hinweis:** Das erste Element (hier <lektueren>) ist das root Element es umschließs alle anderen Elemente und muss immer vorhanden sein, wird aber bei der Weiterverarbeitung nicht angesprochen.

Man sieht, dass die Tags vollkommen frei gewählt werden können
Tipp: Wählen Sie die Bezeichnungen sorgfältig, damit Sie auch nach längerer Zeit noch genau
wissen, wofür welche Inhalte stehen.
XML-Dateien werden mit der Endung .xml gespeichert.
8.2 XML-Dateien mit PHP auslesen
Wenn Sie nun die XML-Daten einlesen möchten, müssen Sie zuerst die XML-Datei in Ihr PHP-Skript
einbinden:
<?php
$variable = simplexml_load_file('IhreDaten.xml');
?>http://php.net/manual/de/function.simplexml-load-file.php
Hiermit speichern Sie die Daten aus der XML-Datei (im Beispiel: “IhreDaten.xml“) in der Variablen
(hier: “$variable“) als Objekt ( http://php.net/manual/de/language.types.object.php )
Als Letztes müssen Sie nun die Inhalte gezielt aus der XML-Datei auslesen.
Hierfür sprechen Sie die einzelnen Elemente an, indem Sie, ähnlich wie bei mehrdimensionalen
Arrays, von dem übergeordneten Element zum untergeordneten Element gehen:
<?php
$title = $variable->lektuere[0]->titel;
?>
In der Variablen $title ist nun im Beispiel „Agnes“ eingespeichert.
Mit dieser „Pfeil-Notation“ kann man, ausgehen von dem XML-Objekt, auf die einzelnen Elemente
zugreifen.
Um alle Lektürentitel auszugeben wird die bekannte Funktion foreach verwendet
<?php
foreach ($variable as $buch) {
print '<h2>' . $buch->titel . '</h2>';
}
?>
Aufgabe 1
Trennung von Inhalt und Form
Lagern Sie den Inhalt (Titel, Bilder usw.) Ihrer Buzzfeed Webseite in eine externe Datei aus.
Der Inhalt wurde bei der vorangegangenen Aufgabe in einem Array gespeichert und die
Informationen wie Titel und Bild url sollen nun in einer externen XMl Datei abgelegt werden und
mit der PHP Funktion SimpleXML in der Webseite verarbeitet werden.
Hinweise:
 Für die XML Tags können keine Zahlen verwendet werden.

Um sich die Struktur Ihrer eingelesenen XML Datei anzuschauen, verwenden Sie die
Funktion print_r() oder var_dump().
<?php
$variable = simplexml_load_file('IhreDaten.xml');
print_r($variable);
?>
bzw.
<?php
foreach ($variable as $buch) {
var_dump($buch);
}
?>8.3 XML-Daten mit PHP verarbeiten
Um eine neue XML Datei mit PHP anzulegen definieren sie einen String der einer XML Datei
entspricht:
<?php
// zwischen <<<XMl und XML; befindet sich der Inhalt
$xmlstring = <<<XML
<?xml version='1.0' standalone='yes'?>
<root>
</root>
XML;
// Um auf SimpleXML Funktionen zu zugreifen, muss der XMLstring in ein SimpleXMLelement
umgewandelt werden.
$xml = new SimpleXMLElement($xmlstring);
?>
Natürlich können schon mehr Elemente in der Datei stehen, oder sie werden nachher
programmatisch hinzugefügt mit der SimpleXMLfunktion adChild.
<?php
$xml->addChild('user');
$xml->user->addChild('name', 'email');
?>
Die XML sieht dann so aus:
<?xml version='1.0' standalone='yes'?>
<root>
<user>
<name></name>
<email></email>
</user>
</root>
<?php
// user[0] wählt das erste user Element und setzt den Wert auf „peter“
$xml->user[0]->name = 'peter';
// mit ->asXML(daten.xml) warden die daten unter dem Namen daten.xml gespeichert.
$xml->asXML('daten.xml');
?>
