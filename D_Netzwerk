---
tags:
  - study
  - preperation
---
# Netzwerk Basics

Das World Wide Web (WWW) ist eine Sammlung von in HTML geschriebenen Dokumenten die über das Internet mit einem Browser abgerufen werden können, die Dokumente werden von Webservern bereitgestellt und sind über ihre Webadressen ereichbar. Webadressen bestehen aus der Adresse des Rechners auf dem der Webserver läuft und dem Pfad zur entsprechenden Datei.
```
http://www.example.com/pfad/zur/datei
```

## IP Adresse und Portnummer
Jedes Gerät in einem Netzwerk benötigt eine IP Adresse, damit der Netzwerkverkehr vom und zum Gerät gesendet werden kann. Die IP Adressse des Rechner auf dem man sich gerade befindet, ist 127.0.0.1. Jeder Dienst (z.B. Web- oder Mailserver) der auf dem Rechner läuft erhät eine Portnummer unter der er zu erreichen ist die an die IP Adresse nach einem Dppelpunkt angehängt wird
```
127.0.0.1:4877
```
Der Port für einen Webserver (HTTP) ist 80 und für eine SSL (verschlüsselte) Verbidung (HTTPS) zum Webserver 443. FTP Dienste haben normalerweise den Port 21.

IP-Adressen (Version 4, IPv4) bestehen aus vier Zahlen, die jeweils Werte von 0 bis 255 annehmen können und mit einem Punkt getrennt werden, beispielsweise 192.0.2.42.. IPv4 Adressen haben eine maximale Anzahl von 32Bit (2^32), um die Anzahl der möglichen IP Adressen zu erhöhen werden zusätzlich IPv6 Adressen mit 128Bit (2^128) Möglichkeiten verwendet.

## Domainnamen
Im Internet werden Domainnamen zur Identifizierung von Rechnern verwendet. Ein Domainname (z.B. www.example.com) besteht aus einer *top-level domain* (TLD) (`com`) einer Domain (`example`) und einer Subdomain (oder mehreren) (`www`). Die TLD wird von privaten oder stattlichen Organisationen verwaltet, bei denen die eigene Domain registriert wird (über einen Zwischenhändler *domain name registrar*). Domain und TLD ergeben zusammen den *Hostname*, die eindeutige bezeichnung eines Rechners in einem Netztwerk. Subdomains könen vom Besitzer der Domain beliebig gewählt werden.
Die IP Adresse eines Servers ist unabhängig vom Domainnamen (www.example.com). Ein DNS (Domain Name System) Server leitet den Aufruf eines Domainnamens auf eine IP Adresse um.
Der eigene Rechner mit der IP Adresse 127.0.0.1 kann über den Hostname `localhost` aufgerufen werden.

>**Merke:** Wird eine Domain (oder IP Adresse) ohne ein Port aufgerufen, wird standardmäßig der Port 80 (443 bei https) verwendet.
