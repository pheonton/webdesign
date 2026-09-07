---
tags:
 - study
 - html
---
# Einführung HTML

Eine Webseite besteht aus drei Schichten, die getrennt voneinander bearbeitet werden:

* **HTML** legt die *Struktur* und den *Inhalt* fest (Überschriften, Absätze, Listen, Bilder …).
* **CSS** bestimmt die *Darstellung* (Farben, Schriften, Layout).
* **JavaScript** ergänzt *Verhalten* (Interaktivität).

Dieses Kapitel behandelt HTML.

> **Merke:** Der Code wird mit dem Editor geschrieben und im Browser betrachtet. Anleitung dazu befindet sich [hier](A_Programme.md).

## Basisaufbau eines HTML-Dokumentes

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello World!</title>
  </head>
  <body>
    Dieser Text wird angezeigt!
    <!-- Dieser Text wird nicht angezeigt, weil er ein Kommentar ist -->
  </body>
</html>
```

| Element | Erläuterung |
| --- | --- |
| `<!DOCTYPE html>` | Legt den Dokumententyp fest (HTML5; nicht sichtbar) |
| `<html></html>` | Wurzelelement; `lang` gibt die Sprache des Dokuments an |
| `<head></head>` | Enthält Informationen *über* das Dokument (nicht sichtbar) |
| `<meta charset="UTF-8">` | Zeichenkodierung – wird für Umlaute benötigt; steht als Erstes im `<head>` |
| `<meta name="viewport" …>` | Sorgt für die korrekte Darstellung auf Smartphones |
| `<title></title>` | Titel des Dokuments (Browser-Tab, Lesezeichen, Suchmaschinen) |
| `<body></body>` | Sichtbarer Inhaltsbereich der Seite |
| `<!-- -->` | Kommentar (nicht sichtbar) |

> **Merke:** `<!DOCTYPE html>` ist so kurz, weil es HTML5 ist. Ältere HTML-Versionen hatten hier eine lange, kryptische Zeile.

<iframe width="560" height="315" src="https://www.youtube.com/embed/mWTfRehELFA" title="Einführung HTML" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Elemente, Tags und Attribute

HTML-Code besteht aus **Elementen**. Ein Element wird meist von einem **Start-Tag** und einem **End-Tag** eingeschlossen: `<p>Text</p>`. Manche Elemente haben keinen Inhalt und bestehen nur aus einem Tag, z.B. `<br>` oder `<img>`.

Tags können **Attribute** enthalten. Diese stehen im Start-Tag in der Form `name="Wert"`:

```html
<a href="https://example.org">Link</a>
```

Hier ist `href` das Attribut mit dem Wert `https://example.org`.

**Regeln:**

* Elemente werden ineinander verschachtelt und in umgekehrter Reihenfolge wieder geschlossen: `<p><strong>…</strong></p>` (nicht `<p><strong>…</p></strong>`).
* Es gibt genau ein `<html>`-Wurzelelement.
* Ob der HTML-Code fehlerfrei ist, prüft der [W3C-Validator](https://validator.w3.org/).

> **Merke:** Der schließende Schrägstrich bei inhaltslosen Elementen (`<br />`, `<img … />`) stammt aus älteren HTML-Versionen und ist in HTML5 nicht mehr nötig. Wir schreiben `<br>` und `<img …>`.

### Block- und Inline-Elemente

Elemente verhalten sich standardmäßig auf eine von zwei Arten:

* **Block-Elemente** beginnen auf einer neuen Zeile und nehmen die volle verfügbare Breite ein – z.B. `<p>`, `<h1>`, `<ul>` und die Struktur-Elemente aus dem nächsten Abschnitt.
* **Inline-Elemente** stehen innerhalb einer Textzeile und sind nur so breit wie ihr Inhalt – z.B. `<a>`, `<strong>`, `<em>`.

Für Fälle, in denen kein passendes Element existiert, gibt es zwei **allgemeine Container ohne eigene Bedeutung**. Sie dienen dazu, Inhalte zu gruppieren, um sie mit CSS zu formatieren:

| Element | Typ | Zweck |
| --- | --- | --- |
| `<div></div>` | Block | Gruppiert größere Bereiche (v.a. für das Layout) |
| `<span></span>` | Inline | Gruppiert Teile innerhalb einer Textzeile |

## Textstrukturierung

| Element | Erläuterung |
| --- | --- |
| `<h1></h1>` bis `<h6></h6>` | Überschriften (Ebene 1 bis 6) |
| `<p></p>` | Absatz (Paragraph) |
| `<br>` | Einfacher Zeilenumbruch |
| `<hr>` | Thematischer Wechsel (wird als horizontale Linie dargestellt) |
| `<em></em>` | Betonter Text (meist kursiv) |
| `<strong></strong>` | Besonders wichtiger Text (meist fett) |
| `<del></del>` | Gelöschter/entfernter Text (meist durchgestrichen) |
| `<blockquote></blockquote>` | Längeres Zitat als eigener Absatz |
| `<q></q>` | Kurzes Zitat im laufenden Text (Browser setzt die Anführungszeichen) |
| `<code></code>` | Quellcode oder Befehle |

```html
<h1>Das Fahrrad</h1>
<p>Das Fahrrad ist eines der <strong>effizientesten Fortbewegungsmittel</strong>
der Welt. Erfunden wurde es <em>1817</em> von Karl Drais – damals noch
<del>ohne Pedale</del>: Man stieß sich mit den Füßen vom Boden ab.<br>
Heute gibt es unzählige Bauformen, vom Rennrad bis zum Lastenrad.</p>
<hr>
<h2>Warum Radfahren gesund ist</h2>
<p>Regelmäßiges Radfahren stärkt Herz und Kreislauf, schont die Gelenke und
verbessert die Ausdauer. Schon eine halbe Stunde pro Tag zeigt Wirkung.</p>
<blockquote>
  Wer mit dem Rad zur Schule fährt, spart Geld, vermeidet Staus und tut
  nebenbei etwas für die Umwelt.
</blockquote>
<p>Dieses kurze Zitat im Fließtext steht in <q>Anführungszeichen</q>, die der
Browser automatisch setzt. Ein Absatz beginnt mit dem Tag
<code>&lt;p&gt;</code> und endet mit <code>&lt;/p&gt;</code>.</p>
```

> **Merke:** HTML-Code wird verwendet, um den Inhalt zu strukturieren und einzelnen Textabschnitten Bedeutung zuzuweisen, wie z.B. Überschriften, Paragraphen, Listen usw. HTML wird *nicht* zur Formatierung verwendet, dafür wird CSS eingesetzt.

## Seitenstruktur (semantische Elemente)

Statt jeden Bereich mit einem allgemeinen `<div>` zu bauen, gibt es in HTML5 Elemente, die dem Bereich eine *Bedeutung* geben. Das hilft Suchmaschinen, Screenreadern und beim Lesen des Codes.

| Element | Bereich der Seite |
| --- | --- |
| `<header>` | Kopfbereich (Logo, Seitentitel) |
| `<nav>` | Navigation / Menü |
| `<main>` | Hauptinhalt (genau einmal pro Seite) |
| `<section>` | Thematischer Abschnitt innerhalb des Inhalts |
| `<article>` | In sich abgeschlossener Inhalt (z.B. ein Beitrag) |
| `<aside>` | Nebeninhalt (Randspalte, Zusatzinfos) |
| `<footer>` | Fußbereich (Impressum, Kontakt) |

```html
<body>
  <header>
    <h1>Meine Webseite</h1>
  </header>
  <nav>
    <a href="index.html">Start</a>
    <a href="kontakt.html">Kontakt</a>
  </nav>
  <main>
    <article>
      <h2>Überschrift des Beitrags</h2>
      <p>Inhalt …</p>
    </article>
    <aside>
      <p>Randnotiz …</p>
    </aside>
  </main>
  <footer>
    <p>&copy; 2026 Max Mustermann</p>
  </footer>
</body>
```

> **Merke:** Diese Elemente verhalten sich wie `<div>` (Block-Element), sagen aber zusätzlich, *wofür* der Bereich da ist. `<div>` wird nur noch verwendet, wenn kein passendes semantisches Element existiert. Das Anordnen dieser Bereiche (z.B. nebeneinander) geschieht mit CSS – siehe [Layout mit CSS](03_Layout.md).

## Tabellen

| Element | Erläuterung |
| --- | --- |
| `<table></table>` | Tabelle |
| `<caption></caption>` | Beschriftung der Tabelle (erste Zeile innerhalb von `<table>`) |
| `<thead></thead>` / `<tbody></tbody>` | Kopf- und Rumpfbereich der Tabelle |
| `<tr></tr>` | Tabellenzeile (table row) |
| `<th></th>` | Kopfzelle (table header) |
| `<td></td>` | Datenzelle (table data) |

```html
<table>
  <caption>Beispieldaten</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Ort</th>
      <th>Fach</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aliquam</td>
      <td>Remseck</td>
      <td>Informatik</td>
    </tr>
    <tr>
      <td>Quisque</td>
      <td>Stuttgart</td>
      <td>Mathematik</td>
    </tr>
  </tbody>
</table>
```

## Listen

| Element | Erläuterung |
| --- | --- |
| `<ul></ul>` | Ungeordnete Liste (unordered list, Aufzählungspunkte) |
| `<ol></ol>` | Geordnete Liste (ordered list, Nummerierung) |
| `<li></li>` | Listenelement (list item) |

```html
<ul>
  <li>Phasellus</li>
  <li>Aenean</li>
  <li>Curabitur</li>
</ul>
```

## Bilder & Verknüpfungen

**Bilder**

```html
<img src="images/tier.jpg" alt="Ein grasender Esel auf einer Wiese">
```

Das Attribut `alt` enthält eine Textbeschreibung des Bildes. Sie wird angezeigt, wenn das Bild nicht lädt, und von Screenreadern vorgelesen. Rein dekorative Bilder erhalten ein leeres `alt=""`.

Bild mit Bildunterschrift:

```html
<figure>
  <img src="images/tier.jpg" alt="Ein grasender Esel auf einer Wiese">
  <figcaption>Abb. 1: Ein Esel bei der Arbeit.</figcaption>
</figure>
```

**Verknüpfungen (Link, Hyperlink)**

```html
<a href="https://www.lmg-remseck.de/">Lise-Meitner-Gymnasium</a>
```

| Ziel | Schreibweise |
| --- | --- |
| Andere Webseite | `<a href="https://…">` |
| Datei im eigenen Ordner | `<a href="seite2.html">` (relativer Pfad) |
| Stelle in derselben Seite | `<a href="#kapitel3">` (siehe [Interne Verknüpfungen](02_CSS.md#interne-verknüpfungen)) |
| E-Mail | `<a href="mailto:info@example.org">` |
| In neuem Tab öffnen | `<a href="…" target="_blank" rel="noopener">` |

Dateien im Arbeitsordner (z.B. Bilder) werden mit einer [relativen Pfadangabe](https://wiki.selfhtml.org/wiki/HTML/Tutorials/Links/Referenzieren_in_HTML#Mit_relativen_Pfadangaben_relativ_zum_Basis-URI_referenzieren) verknüpft, d.h. relativ zur verknüpfenden Datei. Für Dateien im Internet wird die vollständige Webadresse (URL) angegeben – es handelt sich dann um eine **absolute** Verknüpfung.

## Übungen

1. Baue die Startseite deines Projekts: eine `<h1>`, zwei bis drei Absätze über dein Thema und ein Bild mit aussagekräftigem `alt`-Text.
2. Gliedere die Seite mit semantischen Elementen: `<header>` mit dem Titel, `<main>` mit dem Inhalt, `<footer>` mit deinem Namen.
3. Füge eine Liste ein – z.B. „Fakten über …" oder „meine Top 3". Entscheide, ob sie geordnet (`<ol>`) oder ungeordnet (`<ul>`) sein soll.
4. Erstelle eine kleine Tabelle mit Kopfzeile: ein Steckbrief, ein Vergleich oder ein Zeitplan.
5. Setze einen Link auf eine passende externe Seite (in einem neuen Tab) und packe dein Bild in ein `<figure>` mit `<figcaption>`.
6. Prüfe die Seite mit dem [W3C-Validator](https://validator.w3.org/) und behebe die gemeldeten Fehler.
7. **Kür:** Lege eine zweite Seite `steckbrief.html` an und verlinke beide Seiten gegenseitig.
