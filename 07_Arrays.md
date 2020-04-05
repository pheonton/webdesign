---
category:
 - study
tags:
 - study
 - php
---
# Einführung Arrays

## Arrays erzeugen

Bis jetzt wurde in einer Variablen nur genau ein Wert gespeichert, z.B. ein Zahl oder ein Text. Um mehrere Werte in einer Variablen zu speichern werden Arrays verwendet. Die Werte in einem Array werden durch einen Key (Index) eindeutig identifiziert.
```php
$feld1 = array ('key1' => 'value1', 'key2' => 'value2' );
```
für eine bessere Übersicht wird auch folgende Syntax verwendet:
```php
$feld1 = array(
	'key1' => 'value1',
	'key2' => 'value2',
);
```
Beispiel
```php
$buch = array(
	'titel' = 'Don Quijote',
	'autor' = 'Miguel de Cervantes'
);
```
Werden die Keys nicht mit explizit angegeben, werden numerische Keys von 0 aufsteigend für jeden Wert erzeugt.
```php
$feld2 = array ('value_a', 'value_b' );
```
Hier hat `value1` hat den Key `0` und `value2` den Key `1`.

Auch die Definition eines leeren Array ist möglich:
```php
$feld3 = array();
```
> **Merke:** ein bekanntes Array is `$_POST`, hier sind aller Formulardaten mit ihren `name` Attributen als Key gespeichert

### Auf Werte zugreifen
Auf die Werte wird zugegriffen, indem an das Array der Key in eckigen Klammern angefügt wird:
```php
print $feld1['key1']; #ergibt value1
print $feld2[0]; #ergibt value_a
```
### Werte hinzufügen

Auf ähnliche Weise können auch Werte in einem Array gesetzt werden:
```php
$feld1['key3'] = 'value3';
```
Hier wird im array `feld1` ein Werte `value3` mit dem Key `key3` hinzugefügt.

> **Achtung:** ein ist im Array schon ein Wert mit dem Key `key3` vorhanden, wird er so überschrieben.

Soll in einem Array mit nummerischen Keys ein Wert hinzugefügt werden, kann auf die Angabe eines Keys verzichtet werden, die eckigen Klammern bleiben dann leer, der Key wird automatisch gesetzt
```php
$feld2[] = 'value3';
```
### Wert (und Key) löschen
Ein Element in einem Array wird folgendermaßen gelöscht:
```php
unset($field1['key1']);
```
Hier wird der Wert mit dem Key `key1` und der Key selbst gelöscht, d.h. das Array hat nun einen Eintrag weniger.

## foreach
Um alle Werte in einem Array programmatisch zu verarbeiten, kann die Schleife `foreach` verwendet werden. Wie der Name vermuten lässt, werden dabei alle Einträge eines Arrays nacheinander abgearbeitet. (Bei einer `for`-Schleife müsste die Anzahl der Einträge bekannt sein.) [foreach](http://php.net/manual/de/control-structures.foreach.php)
Die folgende Syntax gibt alle Werte aus dem Array `$field1` aus:
```php
foreach ($feld1 as $value) {
	print $value;
}
```
`foreach` erhält dabei als Argument das Array und die Angabe, wie jeder Wert des Arrays innerhalb der `foreach`-Schleife heißen soll, in diesem Fall `$value`. Falls der Key auch verwendet werden soll, lautet die Angabe folgendermaßen:
```php
foreach ($feld1 as $key => $f) {
	print $key . ', ' . $value . ',<br />';#Hier wurde der String etwas erweitert.
}
```

## Mehrstufige Arrays
Arrays können auch Arrays enthalten. Anstatt einem String oder einer Zahl kann ein Wert auch wieder ein Array sein.
```php
$feld1 = array(
	'item1' => array(
 		'key1' => 'value1',
 		'key2' => 'value2',
 	),
 	'item2' => array(
 		'key1' => 'value3',
 		'key2' => 'value4',
 	),
);
```

Beim ansprechen der Werte (ausgeben, einfügen und löschen), müssen alle übergeordneten Keys in absteigender Reihenfolge bis zum gewünschten Wert in eckigegen Klammern angegeben werden.

```php
print $feld['item1'][ 'key1']; #ergibt value1
print $feld['item2'][ 'key2']; #ergibt value4

$feld['item2'][ 'key1'] = 'value5'; #überschreibt value3 mit value5
```
