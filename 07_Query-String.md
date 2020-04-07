---
tags :
  - study
  - php
---
# Übergabe von Variablen

## $_GET - Variablen in der URL

Mit Parametern in der URL (dem Query-String) können Variablen auch ohne ein Formular an eine PHP Seite übergeben werden. Der Query-String wird nach einem Fragezeichen `?` an die Webadresse angehängt. Es sind Key und Werte Paare, die durch ein Gleichheitszeichen verbunden sind und durch ein Kaufmannsund `&` von anderen Paaren getrennt werden.

Beispiel for die [Parameter von Duckduckgo](https://duckduckgo.com/params) 

https://duckduckgo.com/?q=url+parameter&kt=s&kx=o

- q gibt den Suchterm an, "url  parameter" (In URL's kann kein Leerzeichen stehen und wird in diesem Fall durch ein + ersetzt)
- kt ändert die Schriftart, s steht für eine Serifenschrift.
- kx ändert die Linkfarbe, o steht für orange

Im Gegensatz zum Array `$_POST`, das über Formulardaten gefüllt wird, wird das Array `$_GET` über URL Parameter gefüllt. Die übergebenen Parameter sind mit ihren jeweiligen Keys im PHP Script auslesbar.

Wird eine URL mit dem Parameter `page=5` im Browser aufgerufen `https://www.example.com/?page=5` steht im PHP Script der Wert `5` im Array `$_GET['page']` unter dem entsprechenden Key zur Verfügung.

```php
$pagenumber = $_GET['page'];
print $pagenumber; # gibt 5 aus
```

## $_SESSION - Variablen wärend einer Sitzung

Variablen können auch wärend einer Sitzung (geöffnetes Browserfenster) im Array `$_SESSION` gespeichert werden. Um auf das Array zuzugreifen, muß in der PHP Datei an erster Stelle im Code die Sitzung mit `session_start()` gestartet werden.
```php
<?php
  session_start();
  # Nachfolgend wird ein Eintrag mit dem Key 'something' und dem Wert "some things are wonderful" erzeugt.
  $_SESSION['something'] = "some things are wonderful"; 
  # Nachfolgend wird der Wert vom Key 'something' ausgegeben: "some things are wonderful".
  print $_SESSION['something']; 
?>
```
