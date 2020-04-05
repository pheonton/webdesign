---
tags:
 - study
 - php
---
# Einführung PHP

PHP ist eine Skriptsprache. Ein PHP Interpreter (Übersetzer) verarbeitet PHP Code zu HTML welches im Browser dargestellt wird. Hierdurch kann eine dynamische Seite erstellt werden deren HTML Code programmatisch oder durch Benutzereingaben angepasstwerden kann. Im Gegensatz zu reinem HTML Code wird ein PHP Interpreter Dienst benötigt um der HTML Code zu generieren. HTML Dateien können direkt mit dem Browser geöffnet werden, PHP Dateien werden von einem Server bereit gestellt.

## PHP Server einrichten
Es gibt viele Möglichkeiten einen Webserver der PHP verarbeitet zu betreiben, für die lokale Entwicklung läuft der Server auf dem lokalen Rechner. Der Dienst kann mit der lokalen IP Adresse und dem dazugehörigen Port vom Browser aufgerufen werden.

### IP Adresse und Portnummer
Jedes Gerät in einem Netzwerk benötigt eine IP Adresse damit der Netzwerkverkehr vom und zum Gerät gesendet werden kann. Die IP Adressse des Rechner auf dem man sich gerade befindet, ist 127.0.0.1. Jeder Dienst (z.B. Web- oder Mailserver) der auf dem Rechner läuft erhät eine Port nummer unter der er zu erreichen ist die an die IP Adresse nach einem Dppelpunkt angehängt wird
```
127.0.0.1:4877
```
> **Merke:** der Port für einen Webserver ist 80 und für eine SSL (verschlüsselte) Verbidung zum Server 443. FTP Dienst haben normalerweise den Port 21.

IP-Adressen bestehen aus vier Zahlen, die jeweils Werte von 0 bis 255 annehmen können und mit einem Punkt getrennt werden, beispielsweise 192.0.2.42. (Um die Anzahl der IP Adressen zu erhöhen werden IPv6 Adrssen mit 128Bit Adressen verwendet.)





