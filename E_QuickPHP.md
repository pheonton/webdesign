---
tags:
  - study
  - preparation
---
# QuickPHP einrichten

Für die Verarbeitung von PHP Dateien bietet sich der sehr kleine und einfache Webserver QuickPHP von Zach Saw an.

Nach dem Herunterladen muss der Server noch entpackt werden und kann dann direkt aus seinem Verzeichnis quickphp_webserver mit einem Klick auf QuickPHP.exe aufgerufen werden.

## Einstellungen

Option | Einstellung | Ändern | Beschreibung
--- | --- | --- | ---
Binding Address | 0.0.0.0 | nein | Der Server läuft unter http:/127.0.0.1 oder localhost
Port | 5723 | nein | Die Portnummer muß an die Adresse angeängt werden http://127.0.0.1:5723
Allow Directory Listing | ausgewählt | ja | Wenn keine Datei aufgerufen wurde, werden alle Dateien und Ordner im Root-Verzeichnis angezeigt.
Root folder | Projektverzeichnis auswählen | ja | Dies sollte das Verzeichnis sein, mit dem gerade gearbeitet wird, oder ein übergeordnetes Verzeichnis.
Default document filenames | index.php; index.html | nein | Wenn sich eine index.php oder index.html Datei im Root Verzeichnis befindet, wird diese angezeigt. Dateien mti anderem namen müssen explizit aufgerufen werden http://127.0.0.1:5723/datei.html
PHP maximum execution time | 10 | nein

Mit dem Klicken auf *Start* wird der Server gestartet und Webseiten können durch Aufrufen von http://127.0.0.1:5723 im Browser angezeigt werden.