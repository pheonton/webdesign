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
  print "Hello World!"; # Gibt 'Hello World!' aus.
?>
```
PHP kann HTMl Code direkt mit ausgeben:
```php
<?php
  print "<h2>Hello World!</h2>"; # Gibt '<h2>Hello World!</h2>' aus.
?>
```
oder der HTML Code steht außerhalb des PHP Codes.
```php
<h2>
<?php
  print "Hello World!";
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
### Typen von Variablen

Variablen können von unterschiedlichem Typ sein.

- Skalare Typen, bestehen aus einem Wert:
  - Wahrheitswert bzw. Boolesch (bool): `true`, `false`
  - Ganze Zahl bzw. Integer (int): `1`, `-2`, `1000`, `213422`
  - Dezimalzahl bzw. Fließkommazahl (float), mit Punkt statt Komma: `2.2345`, `-4.23`
  - Text bzw. Zeichenkette (string), wird durch Anführungszeichen begrenzt: `"Hello World!"` 

- Zusammengesetzte Typen, bestehen aus mehreren Werten mit unterschiedlichen Typen:
  - Array (array)
  - Objekt (object)

- Eine Variable ohne Wert hat den Typ *null* und den Wert `NULL`.

Typen können ineinander umgewandelt werden, mit **Typecasting**. Das ist z.B. sinnvoll um einen String "3445" in eine Zahl 3445 umzuwandeln, mit dem String "3445" kann nicht gerechnet werde, mit der Zahl 3445 schon. In den meisten Fällen erledigt PHP dies allerdings automatisch. Beim Typcasten wird der Variablen der neue Typ in Klammern vorangestellt.
Beispiel

```php
$string = "3445";
$int = (int) $string; # Hier wird die String "3445" in eine Zahl umgewandelt
$ergebnis = $int + 400;
```

NULL sollte nicht getypcasted werden, um eine Variable zu löschen wird `unset($variable)` verwendet.

>**Merke:** Der String `""` ist nicht `NULL` sondern leer `empty`. `0` oder `false` gelten in diesem Zusammenhang auch als leer.

### Operatoren

- Arithmetische Operatoren: Plus `+`, Minus `-`, Mal `*`, Geteilt `/`
- Zuweisungsoperatoren: Zuweisung `=`, Der Wert rechts vom Gleichheitszeichen wird der Variablen links zugewiesen. Im Gegensatz zum Gleicheitszeichen der Mathematik, das in beide Richtungen wirkt (transitiv)
- Vergleichsoperatoren: Einfacher Vergleich `==`, Vergleich auch des Typs `===`, Größer `>`, Größer-Gleich `>=`, Ungleich `!=`
- Logische Operatoren: Und `&&`, Oder `||`, Nicht `!`, Nicht Und `!&`

>**Merke:** Um zu einer Zahl `$zahl` einen Wert hinzuzuaddieren wird aufgrund der besonderen Eigenschaft des Gleichheitszeichens folgende Syntax verwendet `$zahl = $zahl + 5`. Wird eine Zahl um `1` erhöt, kann die Kurzform `$zahl++` verwendet werden.

## if - Überprüfung

Bedingte Anweisungen werden mit dem Schlüsselwort `if` eingeleitet. Der darauf folgende Ausdruck in runden Klammern, die Bedingung, wird logisch überprüft.
- Ist der Ausdruck wahr (`true`), erfolgt die Ausführung der unmittelbar auf `if` folgenden Programmanweisung innerhalb von geschweiften Klammern.
- Ist der Ausdruck falsch (`false`), wird die unmittelbar folgende Anweisung nicht ausgeführt.
  - Das Programm überprüft die Bedingungen nachfolgender `ifelse` Anweisungen und führt deren Anweisung gegebenenfallsaus.
  - Ist kein Bedingung von `if` oder `ifelse` wahr, wird die Anweisung von `else` ausgeführt.
  
>**Hinweis:** `ifelse` und `else` sind nicht notwendig.

Beispiel
```php
<?php
  $a = 5;
  $b = 7;
  if ($a > $b) {
    print $a . 'ist größer als' . $b;
  }
  elseif ($a == $b) {
    print $a . 'und' . $b . 'sind gleich';
  }
  else {
    print $a . 'ist kleiner als ' . $b;
  }
?>
```
if - Bedingungen können auch verschachtelt werden, soll der obere Code nur ausgeführt werden wenn a und b Zahlen sind `is_numeric()`, würde dies so aussehen:
```php
<?php
  $a = 5;
  $b = 7;
  if (is_numeric($a) && is_numeric($b)) {
    if ($a > $b) {
      ...
    }
   }
?>
```
Ob eine Varable existiert (nicht `NULL` ist), kann mit `isset()` überprüft werden, ob sie leer (`""`, `0`, `false`) ist mit `empty()`. Ein vorangestelltes ! negiert die Aussage:
- `isset($variable)` liefert `true` wenn die Variable eine Wert hat, sie kann auch leer sein.
- `empty($variable)` liefert `true` wenn die Variable leer ist.
- `!isset($variable)` liefert `true` wenn die Variable nicht deklariert wurde oder mit `unset($variable)` gelöscht wurde.
- `!empty($variable)` liefert `true` wenn die Variable nicht leer ist.

## for - Schleife
Mit for-Schleifen wird ein Ausdruck bis zu einem Abbruchkriterium wiederholt.
Die Anweisungen für die for-Schleife bestehen aus drei Ausdrücken
- einem für den Start,
- einem der bei jeder Dürchführung überprüft wird (Abbruchkriterium) und
- einem der bei jeder Durchführung durchgeführt wird.

```php
for (Start; Überprüfung; Durchführung) {
    ...
}
```
Beispiel für die Ausgabe der Zahlen 1 bis 10
```php
<?php
 for ($i = 1; $i <= 10; $i++) {
     print $i;
 }
?>
```
Für zusätzliche Abbruchkriterien kann die Anweisung `break` innerhalb einer for-Schleife verwendet werden.
Die Schleift läst sich dann ganz ohne die drei Ausdrücke schreiben:
```php
<?php
  $i = 1;
  for (;;) {
    if ($i <= 10 ) {
      break;
    }
    print $i;
    $i++;
 }
?>
```
>**Merke:** Eine for-Schleife muss **immer** ein Abbruchkriterium haben, ansonsten läuft die Schleife so lange bis die Ressourcen des Rechners erschöpft sind.
