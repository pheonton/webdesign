---
tags :
  - study
  - php
---
# URl Parameter
URL Parameter werden nach einem Fragezeichen `?` an die URL angehängt. Es sind Key und Werte Paare, die durch ein Gleichheitszeichen verbunden sind und durch ein Kaufmannsund `&` von anderen Paaren getrennt werden.

https://duckduckgo.com/?q=url+parameter&kt=s&kx=o

- q gibt den Suchterm an, "url  parameter" (In URL's kann kein Leerzeichen stehen und wird in diesem Fall durch ein + ersetzt)
- kt ändert die Schriftart, s steht für eine Serifenschrift.
- kx ändert die Linkfarbe, o steht für orange

Im Gegensatz zum Array `$_POST`, das über Formaulardaten gefüllt wird, wird das Array `$_GET` über URL Parameter gefüllt. Die übergebenen Parameter sind mit ihren jeweiligen Keys im PHP Script auslesbar.

Wird eine URL mit dem Parameter `page=5` im Browser aufgerufen `https://www.example.com/?page=5` steht im PHP Script der Wert `5` im Array `$_GET['page']` unter dem passenden Key zur verfügung.

```php
$pagenumber = $_GET['page'];
print $pagenumber; # gibt 5 aus
```

