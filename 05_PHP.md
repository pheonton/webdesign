---
tags:
 - study
 - php
---
# Einführung PHP

PHP ist eine Skriptsprache. Ein PHP Interpreter (Übersetzer) verarbeitet PHP Code zu HTML welches im Browser dargestellt wird. Hierdurch kann eine dynamische Seite erstellt werden deren HTML Code programmatisch oder durch Benutzereingaben angepasst werden kann. Im Gegensatz zu reinem HTML Code wird ein PHP Interpreter Dienst benötigt um der HTML Code zu generieren. HTML Dateien können direkt mit dem Browser geöffnet werden, PHP Dateien werden von einem Server bereit gestellt. PHP Dateien haben die Endung php z.B. `index.php`.

## PHP Code
PHP Code steht innerhalb `<?php` und `?>` außerhalb des PHP Codes kann HTMl Code stehen. Um die Ausgabe von PHP anzuzeigen wird die Funktion `print` verwendet, Text (*String*) steht in Anführungszeichen und jede Anweisung muß mit einem Semikolon `;` abgeschlossen werden. Kommentare stehen hinter `#` oder zwischen `/*` und `*/`.

```php
<?php
  print "Hello Wordl!"; # Gibt 'Hello World!' aus.
?>
```
PHP kann HTMl Code direkt mit ausgeben:
```php
<?php
  print "<h2>Hello Wordl!</h2>"; # Gibt '<h2>Hello World!</h2>' aus.
?>
```
oder der HTML Code steht außerhalb des PHP Codes.
```php
<h2>
<?php
  print "Hello Wordl!";
?>
</h2>
```

### Variablen

Variablen beginnen mit einem `$` und ihnen wird mit einem Gleichheitszeichen ein Wert zugewiesen.
```php
<?php
  $text = "Hello World!";
  print $text; # Gibt 'Hello World!' aus.
?>
```
String Varibalen können mit anderen Strings (oder Variablen) über einen Punkt zu einem String verbunden werden.
```php
<?php
  $text = "Hello World!";
  print "<h2>" . $text . "</h2>"; # Gibt '<h2>Hello World!</h2>' aus.
?>
```
### Arten von Typen

Variablen können von unterschiedlichem Typ sein.

Skalare Typen, bestehen aus einem Wert:
- Wahrheitswert bzw. Boolesch (bool): true, false
- Ganze Zahl bzw. Integer (int): 1, -2, 1000, 213422
- Dezimalzahl bzw. Fließkommazahl (float): 2.2345, -4.23
- Text bzw. Zeichenkette (string): "Hello World"

Zusammengesetzte Typen, bestehen aus mehreren Werten mit unterschiedlichen Typen:
- Array (array)
- Objekt (object)

Spezielle Typen:
- NULL, eine Variable ohne Wert

Typen können ineinander umgewandelt werden, mit **Typecasting**. Das ist z.B. sinnvoll um einen String "3445" in eine Zahl 3445 umzuwandeln, mit dem String "3445" kann nicht gerechnet werde, mit der Zahl 3445 schon. In den meisten Fällen erledigt PHP dies allerdings automatisch. Beim typcasten wird dem Wert der neue Typ in Klammern vorangestellt.
Beispiel

```php
$string = "3445";
$int = (int) $string; # Hier wird die String "3445" in eine Zahl umgewandelt
$ergebnis = $int + 400;
```

### Operatoren
- Arithmetische Operatoren: Plus „+“, Minus „-“, Mal „*“, Geteilt „/“
- Zuweisungsoperatoren: Zuweisung „=“, Der Wert rechts vom Gleichheitszeichen wird der Variablen links zugewiesen. Im Gegensatz zum Gleicheitszeichen der Mathematik, das in beide Richtungen wirkt (transitiv)
- Vergleichsoperatoren: Einfacher Vergleich „==“, Vergleich auch des Typs „===“, Größer „>“, Größer-Gleich „>=“, Ungleich „!=“
- Logische Operatoren: Und „&&“, Oder „||“, Nicht „!“



## if - Überprüfung

Bedingte Anweisungen werden mit dem Schlüsselwort if eingeleitet. Der darauf folgende
Ausdruck in runden Klammern, die Bedingung, wird logisch ausgewertet. Ist der Ausdruck
wahr (true), erfolgt die Ausführung der unmittelbar auf if folgenden Programmanweisung
oder des Anweisungsblocks. Ergibt die Auswertung des Ausdrucks den Wert falsch (false),
wird die unmittelbar folgende Anweisung bzw. Anweisungsblock nicht ausgeführt. Das
Programm überspringt eine Anweisung bzw. einen Anweisungsblock.
$a = 5;
$b = 7;
if ($a > $b) {
print ‘a ist größer als b‘;
}
elseif ($a <= $b + 1) {
print ‘a ist kleiner/gleich b + 1‘;
}
else {
print ‘a ist nicht größer als b und nicht kleiner/gleich b + 1‘;
}
## for - Schleife
