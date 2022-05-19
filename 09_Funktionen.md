---
tags:
 - php
---
# Einführung Funktionen


Einige interne Funktionen von PHP sind schon bekannt. Z.B. date() und time(). Es ist auch möglich eigene Funktionen zu programmieren, die bei mehrfach verwendeten Vorgängen den Programmcode übersichtlicher und das Programmieren effizienter machen.

```php
<?php
function name_der_funktion(name_1._argument, name_2._argument, ...) {
	// Programmablauf
}
```

Werte können der Funktion als Argumente (in Klammern) beim Aufrufen übergeben werden. Dabei ist die Reienfolge der übergebenen Werte entscheidend für die Zuweisung der vergebenen Variablennamen.

Soll die Funktion einen Werte zurückgeben, z. B. eine Variable `$ergebnis`, geschiet dies mit `return $ergebnis;`.

#### Beispiel
```php
<?php
/**
 * die Funktion mit dem Namen test_funktion erwartet zwei Übergabewerte.
 * Der zweite Wert, falls nicht übergeben, wird auf den string 'leer' gesetzt.
 */
function test_funktion($argument1, $agrument2 = 'wert') {
 	// Programmablauf: die übergebenen Strings werden verkettet.
   	$rückgabewert = $argument1 . $argument2;
 	// gibt beim Aufrufen der Funktion $rückgabewert aus.
 	return $rückgabewert;	
}

// Funktionsaufruf
$text = test_funktion('test', 'blau rot');
print $text; // Ausgabe: „testblau rot“

print test_funktion('test'); // Ausgabe: „testleer“

print test_funktion(); // Ausgabe: „leer“
?>
```

Wichtig: die Bezeichnungen der Variablen in der Funktion und im übrigen Code müssen nicht übereinstimmen, die in der Funktion deklarierten Variablen sind nur in der Funktion verfügbar. Die Argumente werden unabhängig von ihrem Namen der Reihe nach verarbeitet. Die Deklaration der Funktion kann an jeder beliebigen Stelle im Code stehen, sinnvoll ist eine Position am Ende des Codes.
