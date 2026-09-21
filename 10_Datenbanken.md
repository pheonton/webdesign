---
tags:
 - study
 - datenbanken
---
# Einführung Datenbanken

In [Kapitel 9](09_Objekte.md) habt ihr Objekte benutzt, um ein einzelnes Ding zu beschreiben – einen `Hund`, ein `buch`. Das reicht, solange man wenige Dinge braucht und sie nur so lange existieren müssen, wie die Seite geöffnet ist. Sobald man aber **viele** ähnliche Dinge **dauerhaft** speichern will – tausend Bücher, alle Schüler einer Schule, jede Bestellung eines Shops –, stößt man an Grenzen: Variablen sind weg, sobald die Seite neu geladen wird, und ohne feste Struktur wird es schnell unübersichtlich.

Eine **Datenbank** löst genau das: große Mengen strukturierter Daten dauerhaft speichern und gezielt wiederfinden.

## Komponenten eines Datenbanksystems

Ein Datenbanksystem besteht aus mehreren Teilen, die oft verwechselt werden:

| Komponente | Aufgabe |
| --- | --- |
| **Datenbank** | die eigentlich gespeicherten Daten (z.B. eine Datei) |
| **Datenbankverwaltungssystem (DBMS)** | die Software, die die Datenbank anlegt, verwaltet, schützt und Anfragen beantwortet |
| **Datenbankschnittstelle** | der Weg, auf dem eine Anwendung (oder ein Mensch) mit dem DBMS „spricht" – meist die Sprache SQL |

Der Weg von einer Anfrage bis zu den Daten sieht also so aus:

```
Nutzer / Anwendung  →  Schnittstelle (SQL)  →  DBMS  →  Datenbank
```

Konkretes Beispiel: **SQLite** ist ein DBMS. Es verwaltet eine Datenbank, die als einzelne Datei (z.B. `musik.sqlite`) gespeichert ist. Zugegriffen wird über die Schnittstelle SQL – entweder mit einem Verwaltungsprogramm (Kapitel folgt) oder aus einem eigenen Programm heraus.

> **Merke:** Umgangssprachlich wird oft „Datenbank" für das ganze System gesagt. Genau genommen sind die **Datenbank** (die Daten) und das **DBMS** (die Software, die sie verwaltet) zwei verschiedene Dinge.

## Das relationale Datenbankmodell

Die meisten Datenbanken speichern Daten in **Tabellen** – deshalb spricht man vom **relationalen** Modell. Ein Beispiel, drei Interpreten:

| id | name | land |
| --- | --- | --- |
| 1 | Sido | Deutschland |
| 2 | Adele | UK |
| 3 | Rammstein | Deutschland |

An diesem Beispiel lassen sich die wichtigsten Begriffe festmachen:

| Begriff | Bedeutung | im Beispiel |
| --- | --- | --- |
| **Entitätstyp** | die Art von Ding, die gespeichert wird | „Interpret" |
| **Entität** | ein einzelnes, konkretes Ding dieses Typs | Adele |
| **Attribut** | eine Eigenschaft, die jede Entität dieses Typs hat | `name`, `land` |
| **Tabelle** | die Darstellung eines Entitätstyps als Raster aus Zeilen und Spalten | die Tabelle `interpret` |
| **Datensatz** | eine Zeile der Tabelle – die Werte einer einzelnen Entität | `2, Adele, UK` |
| **Datenfeld** | eine einzelne Zelle – der Wert eines Attributs in einem Datensatz | `UK` |
| **Relation** | der mathematische Fachbegriff für „Tabelle" (daher *relationale* Datenbank) | die Tabelle `interpret` |

> **Merke:** Das ist dasselbe Prinzip wie bei Objekten und Klassen in Kapitel 9 – nur für sehr viele, dauerhaft gespeicherte Objekte gleichzeitig:
>
> | JavaScript (Kapitel 9) | Datenbank |
> | --- | --- |
> | Klasse (`class Hund`) | Entitätstyp |
> | Objekt (`new Hund(...)`) | Entität / Datensatz |
> | Eigenschaft (`hund.name`) | Attribut / Datenfeld |

## Schlüssel: Tabellen miteinander verbinden

Eine zweite Tabelle, Songs, die zu den Interpreten gehören:

| id | titel | dauer_sek | interpret_id |
| --- | --- | --- | --- |
| 1 | Astronaut | 221 | 1 |
| 2 | Easy On Me | 224 | 2 |
| 3 | Du hast | 231 | 3 |
| 4 | Set Fire to the Rain | 242 | 2 |

**Primärschlüssel** (PK): das Attribut, das jede Entität einer Tabelle **eindeutig** identifiziert. In beiden Tabellen übernimmt das die Spalte `id`.

> **Merke:** Warum nicht `name` als Primärschlüssel nehmen? Weil zwei Interpreten zufällig denselben Namen haben könnten – ein Primärschlüssel muss *garantiert* eindeutig sein und darf sich nicht ändern. Deshalb vergibt man dafür meist eine fortlaufende Nummer.

**Fremdschlüssel** (FK): ein Attribut, das auf den Primärschlüssel einer *anderen* Tabelle verweist und so die Beziehung herstellt. Hier ist `interpret_id` in der Song-Tabelle der Fremdschlüssel – er zeigt auf `id` in der Interpret-Tabelle. So „weiß" die Datenbank, dass *Easy On Me* zu Adele gehört, ohne den Namen doppelt zu speichern.

## Kardinalität

Die **Kardinalität** beschreibt, wie viele Entitäten auf jeder Seite einer Beziehung stehen können:

* **1:1** – genau eine Entität gehört zu genau einer anderen (z.B. eine Person – ihr Personalausweis).
* **1:n** – eine Entität kann zu mehreren gehören, umgekehrt aber nur zu einer (unser Beispiel: *ein* Interpret hat *mehrere* Songs, aber *ein* Song gehört zu *einem* Interpret).
* **n:m** – auf beiden Seiten sind mehrere möglich (z.B. ein Song kann auf mehreren Playlists stehen, eine Playlist enthält mehrere Songs).

Wie man solche Zusammenhänge sauber als Diagramm zeichnet (ER-Diagramm) und wie man mit SQL genau solche Fragen an die Datenbank stellt, kommt in späteren Kapiteln.

## Übungen

1. Eine Bibliothek verwaltet „Bücher" und „Ausleiher". Was wäre hier jeweils der Entitätstyp, was eine Entität, was ein Attribut? Nenne für „Buch" mindestens vier sinnvolle Attribute.
2. Nimm das Thema deines Projekts aus den vorherigen Kapiteln: Welchen Entitätstyp würde eine Tabelle dafür abbilden? Liste mindestens vier Attribute auf und skizziere drei Beispiel-Datensätze als Tabelle.
3. Bestimme für deine Tabelle aus Aufgabe 2 einen Primärschlüssel. Begründe, warum ein vorhandenes Attribut (z.B. der Name) dafür meist ungeeignet ist.
4. Erweitere dein Beispiel um einen zweiten, verwandten Entitätstyp (z.B. bei „Bücher" → „Autoren"). Beschreibe, wie du beide Tabellen mit einem Fremdschlüssel verbindest, und welche Kardinalität die Beziehung hat.
5. **Frei:** Zeichne deine zwei Tabellen aus Aufgabe 4 mit Beispieldaten (mindestens drei Zeilen je Tabelle) auf Papier oder digital und markiere Primär- und Fremdschlüssel farbig.
