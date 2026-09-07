---
tags:
  - study
  - html
  - css
---
# Einführung CSS

Die Struktur eines HTML-Dokumentes besteht aus einer Vielzahl verschachtelter Tags, deren Beziehung
zueinander wie in einer Familie bezeichnet wird. **Parent** und **Child** bezeichnen dabei direkt
über- bzw. untergeordnete Tags. **Siblings** sind Tags mit demselben Parent-Tag, und mit
**Ancestors** werden alle übergeordneten Tags bezeichnet.

Mit Cascading Style Sheets (CSS) lassen sich HTML-Tags formatieren. Eine externe CSS-Datei wird im
`<head>`-Bereich eines HTML-Dokumentes eingebunden:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello World | Website</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

Die Datei `style.css` liegt in diesem Beispiel im Unterordner `css` des Arbeitsverzeichnisses (relativer Pfad).
In der CSS-Datei werden sogenannte Selektoren verwendet, um Tags anzusprechen. Selektoren bestehen im
einfachsten Fall aus einem Tag.

> **Merke:** In den folgenden Beispielen tauchen `<div>` und `<span>` auf. Das sind allgemeine Container *ohne eigene Bedeutung*: `<div>` (Block) gruppiert größere Bereiche, `<span>` (Inline) Teile innerhalb einer Textzeile. Sie werden fast nur gebraucht, um Inhalte für CSS zu gruppieren (siehe [Block- und Inline-Elemente](01_HTML.md#block--und-inline-elemente)).

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hf7hLQb1f3Y" title="Einführung CSS" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

| Beispiel | Allgemein | Erläuterung |
| --- | --- | --- |
| `p {color: red;}` | `Selektor {Eigenschaft: Wert;}` | Die Farbe von Text innerhalb *aller* p-Tags wird auf rot gesetzt. |

Wird ein Tag als Selektor verwendet, werden alle Tags dieser Sorte formatiert. Um einzelne oder eine
Gruppe von Tags anzusprechen, erhalten die Tags im HTML-Code Attribute. Dabei kommen zwei Attribute zum Einsatz:

| Attribut | Erläuterung | Beispiel |
| --- | --- | --- |
| `class` | Klasse. Wird im Allgemeinen verwendet. | `<div class="section">` |
| `id` | ID. Für Elemente, die ein einziges Mal vorkommen. | `<h1 id="main-title">` |

**Beispiel für HTML-Code**

```html
<div class="section">
  <h1 id="main-title">Lorem ipsum</h1>
  <p class="content"><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.
Nulla vel metus porta, cursus libero in, varius metus. Praesent scelerisque iaculis lectus. Suspendisse nec
maximus massa. Cras viverra leo quis molestie tincidunt. In dignissim congue dapibus. Duis at imperdiet
erat. Cras arcu nibh, eleifend volutpat sagittis eu, venenatis vitae mauris.</p>
  <p class="content second">Donec tincidunt cursus ipsum, ut convallis lorem dictum et. <del>Cras id risus
magna.</del> Praesent dui libero, hendrerit a consectetur id, vehicula ut nibh. Nulla nec consectetur leo.</p>
  <hr>
  <p class="important">Phasellus non leo semper, lobortis mi nec, gravida quam. <span class="small">Etiam feugiat
eget lectus quis blandit.</span></p>
</div>
```

**Beispiel für CSS-Code**

```css
p {                           /* Gilt für alle p-Tags */
  color: blue;                /* Textfarbe ist blau */
  font-size: 18px;            /* Schriftgröße ist 18px */
}
p.important {                 /* Gilt nur für p-Tags mit der Klasse important */
  text-decoration: underline; /* Text wird unterstrichen */
}
```

Der Text innerhalb aller p-Tags wird blau und mit der Schriftgröße 18px dargestellt. Text innerhalb von
p-Tags mit der Klasse `important` wird zusätzlich unterstrichen.

> **Merke:** Ein CSS-Kommentar steht zwischen `/*` und `*/` und wird nicht angewendet.

## Selektoren

Mit Selektoren werden Elemente eines HTML-Dokumentes ausgewählt, um ihre Eigenschaften mit CSS anzupassen.
Tags werden direkt angesprochen (z.B. `p {color: red}`), Klassen mit einem Punkt vor dem Namen
(`.content {color: red}`) und IDs mit einer Raute vor dem Namen (`#main-title {color: red}`).
Selektoren können auch kombiniert und verschachtelt werden:

| Kombination | Bedeutung | Beispiel |
| --- | --- | --- |
| Tags und/oder Klassen/IDs *direkt* hintereinander | Tags mit den entsprechenden Klassen/IDs werden ausgewählt | `div.content {...}` |
| … durch ein Leerzeichen getrennt | Hierarchische Auswahl: der nachfolgende Selektor muss sich innerhalb des vorangegangenen befinden | `div p .small {...}` |
| … durch ein Komma getrennt | Die Anweisungen gelten für *jeden* Selektor | `p, .content, div#section {...}` |

**Beispiele für Selektoren**

| Selektor | Bedeutung |
| --- | --- |
| `p` | Alle p-Tags |
| `p.content` | Alle p-Tags mit der Klasse content |
| `p.second` | Alle p-Tags mit der Klasse second |
| `.content.second` | Alle Tags mit den Klassen content *und* second |
| `div .content` | Alle Tags mit der Klasse content unterhalb eines div-Tags |
| `*` | Alle Tags |
| `#main-title` | Das Tag mit der id main-title |
| `p.second, div` | Alle p-Tags mit der Klasse second und alle div-Tags |
| `div p` | Alle p-Tags innerhalb von div-Tags |
| `div#main img` | Alle img-Tags innerhalb des div-Tags mit der ID main |

> **Merke:** Elemente, die mit der Maus überfahren werden, können mit `:hover` nach einem Selektor ausgewählt werden. (Für die Formatierung von Links besonders sinnvoll, Beispiel: `a:hover`. Besuchte Links sollten mit `a:visited` ebenfalls formatiert werden.)

Beispiel

```css
a, a:visited {                /* besuchte und nicht besuchte Links gleich formatieren */
  text-decoration: none;      /* die Links werden nicht unterstrichen */
  color: steelblue;           /* erhalten aber zur Erkennung eine andere Farbe */
}
a:hover {
  text-decoration: underline;
}
```

[Noch mehr Selektoren](https://wiki.selfhtml.org/wiki/Referenz:CSS/Selektoren)

## Formatieren mit CSS

| Eigenschaft | mögliche Werte | Erläuterung |
| --- | --- | --- |
| `font-family` | `sans-serif` \| `serif` | [Es können auch spezielle Schriftarten verwendet werden](#schriftarten) |
| `font-weight` | `normal` \| `bold` | |
| `font-size` | `12px` | |
| `color` | [Farben](#farben) | |
| `text-decoration` | `none` \| `underline` | für Links (a-Tag) |
| `text-align` | `left` \| `right` \| `center` \| `justify` | Text innerhalb von Tags ausrichten |
| `border` | `1px solid red` \| `1px dashed red` | Breite, Art und [Farbe](#farben) des Rahmens |
| `background` | [Farben](#farben) | Hintergrundfarbe ([weitere Eigenschaften](https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/Hintergrundfarben_und_-bilder/background)) |
| `padding` (Innenabstand) | `1px 1px 1px 1px` | oben rechts unten links |
| `margin` (Außenabstand) | `1px 1px 1px 1px` | oben rechts unten links |
| `width` | `300px` \| `50%` \| `auto` | `auto` passt die Größe an, ohne das Seitenverhältnis zu ändern |
| `height` | `300px` \| `50%` \| `auto` | |

> **Merke:** Das Zeichen `|` in den Tabellen oben bedeutet „oder".

```css
body {
  font-family: sans-serif; /* Schrift ohne Serifen */
  font-size: 12px;
  font-weight: normal;
  color: black;
  text-align: left;
  background: white; /* weiße Hintergrundfarbe */
}
a {
  color: blue;
  text-decoration: none; /* normalerweise sind Links unterstrichen */
}
a:hover { /* Links, über denen sich der Mauszeiger befindet */
  text-decoration: underline;
}
p {
  text-align: justify; /* Blocksatz */
}
p.second { /* p-Tags mit der Klasse „second" */
  border: 1px solid silver; /* Rahmen 1px breit, durchgehend, silberfarben */
}
/* Mit einem Komma können mehrere Selektoren gleichzeitig angesprochen werden */
p, div { /* alle p- und div-Tags */
  padding: 2px 2px 2px 2px;
}
```

> **Merke:** Standardmäßig kommen `padding` und `border` zur angegebenen `width` *hinzu* – ein Element mit `width: 200px` und `padding: 20px` ist also 240px breit. Mit `box-sizing: border-box` zählt `width` die gesamte Breite (inklusive Padding und Rahmen). Man setzt das meist ganz oben im CSS für alle Elemente:
>
> ```css
> * {
>   box-sizing: border-box;
> }
> ```

## Farben

Farben können mit Namen, Hexadezimalcode oder mit RGB-Werten angegeben werden. Die Angaben `darkred`, `#8B0000` und `rgb(139,0,0)` ergeben die gleiche Farbe (Dunkelrot).

Visual Studio Code hat einen eingebauten [Farbwähler](https://code.visualstudio.com/docs/languages/html#_color-picker).

[Farbcodes online generieren (mit Farbnamen)](https://www.quackit.com/css/css_color_codes.cfm)

**Rot/Grün/Blau-Mischung**

Farben lassen sich mit ihren Rot-, Grün- und Blauanteilen angeben. Dazu wird die Funktion `rgb(Rot, Grün, Blau)` eingesetzt. Für Rot, Grün und Blau werden Zahlen im Bereich 0–255 verwendet. Die Zahl steht für den Helligkeitswert der entsprechenden Farbe.

Beispiel

```css
.special {
  color: rgb(0,128,0); /* Farbe „green" */
  background-color: rgb(255,127,80); /* Farbe „coral" */
}
```

**Rot/Grün/Blau-Mischung mit Transparenz**

CSS erlaubt es, zur RGB-Mischung noch einen Transparenzwert (Alphawert) hinzuzufügen. Dadurch lassen sich zum Beispiel teiltransparente Hintergrundfarben definieren. Die Schreibweise lautet `rgba(Rot, Grün, Blau, Deckkraft)`. Es gelten dieselben Regeln wie für die einfache RGB-Mischung. Der Wert Deckkraft wird als Dezimalzahl im Bereich 0 (vollkommen transparent) bis 1 (keine Transparenz) angegeben.

Beispiel

```css
div {
  background-color: rgba(95,158,160,0.8); /* Farbe „cadetblue" mit 80% Deckkraft */
}
```

[Noch mehr zu Farben](https://wiki.selfhtml.org/wiki/Grafik/Farben)

## Schriftarten

Man kann sich nicht darauf verlassen, dass eine **bestimmte** Schriftart auf dem Gerät installiert ist, mit dem die Website betrachtet wird. Deshalb gibt es zwei sichere Wege:

* eine **generische Familie** angeben (`sans-serif`, `serif`, `monospace`) – der Browser wählt eine passende installierte Schrift, oder
* eine **Web-Schriftart laden**, die zusammen mit der Seite ausgeliefert wird.

Für Web-Schriftarten bietet sich [Google Fonts](https://fonts.google.com/) an. Wenn eine Schriftart ausgewählt wurde, kann ein Stil mit „Get font" bzw. „+ Select this style" zur Auswahl hinzugefügt werden. Der passende Einbindungs-Code wird anschließend angezeigt. Die CSS-Variante lautet:

```css
@import url('https://fonts.googleapis.com/css2?family=Schrift+Name&display=swap');
```

Diese Zeile muss am Anfang der CSS-Datei stehen. Verwendet wird die Schrift dann mit
`font-family: 'Schrift Name', sans-serif;` (`sans-serif` als Fallback).

> **Merke:** Es werden zwei Einträge benötigt: `@import …`, um die Schrift zu laden, und `font-family: …`, um die Schriftart auf ein Element anzuwenden.

[Ausführliche Anleitung](https://developers.google.com/fonts/docs/getting_started)

## Bilder

Bilder können mit den Eigenschaften `width` und `height` angepasst werden. Eine der beiden Eigenschaften sollte den Wert `auto` bekommen, da sonst das Seitenverhältnis verändert wird.

Beim Verwenden mehrerer Bilder untereinander zeigt der Browser einen *kleinen Abstand* zwischen ihnen. Als schnelle Abhilfe kann man dem Parent-Element `font-size: 0;` geben. Sauberer lässt sich das mit Flexbox lösen – siehe [Layout mit CSS](03_Layout.md).

Beispiel

```html
<div>
  <img src="img/img_01.jpg" alt="img 01">
  <img src="img/img_02.jpg" alt="img 02">
</div>
```

```css
div {
  font-size: 0;
}
img {
  width: 50%;
  height: auto;
}
```

## Interne Verknüpfungen

Um innerhalb einer Datei auf eine Stelle zu verweisen, z.B. von einem Menü auf eine Überschrift, bekommt das Ziel-Element ein `id`-Attribut (`id="title"`). Der Link verweist mit dem Attribut `href` darauf, wobei dem Wert der ID eine Raute `#` vorangestellt wird (`href="#title"`).

Beispiel

```html
<a href="#title">Title</a>

<h2 id="title">Title</h2>
```
