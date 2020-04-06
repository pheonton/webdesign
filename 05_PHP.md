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
Der Port für einen Webserver ist 80 und für eine SSL (verschlüsselte) Verbidung zum Server 443. FTP Dienst haben normalerweise den Port 21.

IP-Adressen (Version 4, IPv4) mit der bestehen aus vier Zahlen, die jeweils Werte von 0 bis 255 annehmen können und mit einem Punkt getrennt werden, beispielsweise 192.0.2.42.[^1]

[^1]: IPv4 Adressen haben eine maximale Anzahl von 32Bit (2^32), um die Anzahl der möglichen IP Adressen zu erhöhen werden zusätzlich IPv6 Adressen mit 128Bit (2^128) Möglichkeiten verwendet.

### Domainnamen
Ein Domainname (z.B. www.example.com) besteht aus einer *top-level domain* (TLD) (`com`) einer Domain (`example`) und einer Subdomain (oder mehreren) (`www`). Die TLD wird von privaten oder stattlichen Organisationen verwaltet, bei denen die eigene Domain registriert wird (über eine Zwischenhändler *domain name registrar*). Domain und TLD ergeben zusammen den *Hostname*, die eindeutige bezeichnung eines Rechners in einem Netztwerk. Subdomains könen vom Besitzer der Domain beliebig gewählt werden.
Die IP Adresse eines Servers ist unabhängig vom Domainnamen (www.example.com). Ein DNS (Domain Name System) Server leitet den Aufruf eines Domainnamens auf eine IP Adresse um.
Der eigene Rechner mit der IP Adresse 127.0.0.1 kann über den Hostname `localhost` aufgerufen werden.



