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


Umwandlung in einen anderen Typ. (Typecasting)
Beispiel: Umwandeln von string zu integer: $int = (string) '1'.

### Operatoren
- Arithmetische Operatoren: Plus „+“, Minus „-“, Mal „*“, Geteilt „/“
- Zuweisungsoperatoren: Zuweisung „=“, Der Wert rechts vom Gleichheitszeichen wird der Variablen links zugewiesen. Im Gegensatz zum Gleicheitszeichen der Mathematik, das in beide Richtungen wirkt (transitiv)
- Vergleichsoperatoren: Einfacher Vergleich „==“, Vergleich auch des Typs „===“, Größer „>“, Größer-Gleich „>=“, Ungleich „!=“
- Logische Operatoren: Und „&&“, Oder „||“, Nicht „!“



## if - Überprüfung


## for - Schleife
