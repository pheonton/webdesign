---
tags:
  - study
  - preparation
---
# QuickPHP einrichten

Für die Verarbeitung von PHP Dateien bietet sich der sehr kleine und einfache Webserver QuickPHP von Zach Saw an.

Nach dem Herunterladen muss der Server noch entpackt werden und kann dann direkt aus seinem Verzeichnis quickphp_webserver mit einem Klick auf QuickPHP.exe aufgerufen werden.

QuickPHP ist eine lokaler (läuft auf dem eigenen Rechner) Server der PHP-Code in HTML-Code umwandelt. PHP-Code kann nicht direkt vom Browser verarbeitet werden, die Dateien müssen von einem PHP Interpreter (QuickPHP) erst verarbeitet werden und werden deshalb immer indirekt über die URL des Servers aufgerufen.

## Einstellungen

Option | Einstellung | Ändern | Beschreibung
--- | --- | --- | ---
Binding Address | 0.0.0.0 | nein | Der Server läuft unter http:/127.0.0.1 oder localhost
Port | 5723 | nein | Die Portnummer muß an die Adresse angeängt werden http://127.0.0.1:5723 
Allow Directory Listing | ausgewählt | ja | Wenn keine Datei aufgerufen wurde, werden alle Dateien und Ordner im Root-Verzeichnis angezeigt.
Root folder | Projektverzeichnis auswählen | ja | Dies sollte das Verzeichnis sein, mit dem gerade gearbeitet wird, oder ein übergeordnetes Verzeichnis.
Default document filenames | index.php; index.html | nein | Wenn sich eine index.php oder index.html Datei im Root Verzeichnis befindet, wird diese automatisch beim Aufrufen der der Serveradresse (http://127.0.0.1:5723) angezeigt. Dateien mit anderem Namen (z.B. datei.html) müssen explizit aufgerufen werden http://127.0.0.1:5723/datei.html
PHP maximum execution time | 10 | nein

Mit dem Klicken auf *Start* wird der Server gestartet und Webseiten können durch Aufrufen von http://127.0.0.1:5723 im Browser angezeigt werden.
