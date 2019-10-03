Einführung CSS3
===

Die Struktur eines HTML Dokumentes besteht aus einer Vielzahl verschachtelter Tags deren Relation
zueinander wie in einer Familie bezeichnet wird. Parent und child bezeichnet dabei direkt über bzw.
untergeordnete Tags. Siblings sind Tags mit dem selben parent Tag und mit Ancestors werden alle
übergeordneten Tags bezeichnet.
Mit Cascading Style Sheets (CSS) lassen sich HTML Tags formatieren. Eine externe CSS Datei wird im
<head> Bereich eines HTML Dokumentes mit folgender Definition eingebunden:

```html
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <!-- weitere Informationen -->
</head>
```

Die Datei style.css liegt in diesem Beispiel im Unterordner css des Arbeitsverzeichnisses (relativer Pfad).
In der CSS Datei werden so genannte Selektoren verwendet, um Tags anzusprechen. Selektoren bestehen im
einfachsten Fall aus einem Tag.

Beispiel | Allgemein | Erläuterung
--- | --- | ---
```p {color: red;}``` | ```Selektor {Eigenschaft: Wert;}``` | Die Farbe von Text innerhalb *aller* p-Tags wird auf rot gesetzt.

Wird ein Tag als Selektor verwendet werden alle Tags dieser Sorte entsprechend formatiert. um einzelne oder eine Gruppe von Tags zu formatieren, erhalten die Tags im HTML Code Attribute. Dabei kommen zwei Attribute
zum Einsatz:

Attribut | Erläuterung | Beispiel
--- | --- | ---
class | Klasse. Wird im Allgemeinen verwendet. | ```<div class="section">```
id | ID. Für Elemente die ein einziges Mal verwendet werden. | ```<h1 id="main-title"```

Beispeil in HTML

```html
<div class=“section“>
  <h1 id=“main-title“>Lorem ipsum</h1>
  <p class=“content“><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.
Nulla vel metus porta, cursus libero in, varius metus. Praesent scelerisque iaculis lectus. Suspendisse nec
maximus massa. Cras viverra leo quis molestie tincidunt. In dignissim congue dapibus. Duis at imperdiet
erat. Cras arcu nibh, eleifend volutpat sagittis eu, venenatis vitae mauris.</p>
  <p class=“content second“>Donec tincidunt cursus ipsum, ut convallis lorem dictum et. <del>Cras id risus
magna.</del> Praesent dui libero, hendrerit a consectetur id, vehicula ut nibh. Nulla nec consectetur leo.</p>
  <hr>
  <p class=“important“>Phasellus non leo semper, lobortis mi nec, gravida quam. <span class="small">Etiam feugiat
eget lectus quis blandit.</span></p>
</div>
```
Beispiel für eine CSS-Datei

```
p {
  color: blue;
  font-size: 18px;
}
p.important {
  text-decoration: undeline
}
```

Der Text innerhalb aller p Tags wird blau und mit der Schriftgröße 18px dargestellt. text innerhalb von p Tags mit der Klasse ```.important``` wird zusätzlich unterstrichen.


Mit Selektoren können Elemente eines HTML-Dokumentes ausgewählt werden um ihre Eigenschaften mit
CSS anzupassen. 
Tags werden direkt (z.B. ```p {color: red}```), Klassen mit einem Punkt vor dem Namen (```.content {color: red})```und IDs mit einer Raute vor dem Namen (```#main-title {color: red}```) selektiert.
Selektoren können auch kombiniert und verschachtelt werden. Folgende Kombinationen sind möglich:

Selektor | Bedeutung | Beispiel
--- | --- | ---
Tags und/oder Klassen/IDs *direkt* hintereinander | Tags mit den entsprechenden Klassen/IDs werden ausgewählt | div.content {...}
Tags und/oder Klassen/IDs durch ein Leerzeichen getrennt | Es handelt sich um eine hierarchische Auswahl. Nachfolgende Selektoren müssen sich innerhalb der vorangegangenen befinden | div p .small {...}
Tags und/oder Klassen/IDs durch ein Komma getrennt | Anweisungen gilt für *jeden* Selektor. | p, .content, div#section {...}

Beispiele für Selektoren

Selektor | Bedeutung
--- | ---
p | Alle p-Tags
p.content | Alle p-Tags mit der Klasse content
p.second | Alle p-Tags mit der Klasse second
.content.second | Alle Tags mit der Klasse content und second
div .content | Alle Tags mit der Klasse content unterhalb eines div-Tags
\* | Alle Tags
#main-title | Alle Tags mit der id main-title
p.second, div | Alle p-Tags mit der Klasse second und alle div-Tags
div p | Alle p-Tags innerhalb von div-Tags
div.#main img | Alle img-Tags innerhalb von div-Tags mit der ID main

> Merke: Elemente die mit der Maus überfahren werden können mit `:hover` nach einem Selektor ausgewählt werden. Für dir Formatierung von Links besonders sinnvoll. (Beispiel: `a:hover`). Besuchte Links sollten auch formatiert werden, mit `:visited`.

[Noch mehr Selektoren](http://wiki.selfhtml.org/wiki/Referenz:CSS/Selektoren)

# Formatieren mit CSS


Eigenschaft | mögliche Werte | Erläuterungen
--- | --- | ---
font-face | sans-serif\|serif | Schriften können auch durch ihren Namen gewählt werden z.B. "Arial"
font-weight | normal\|bold | 
font-size | 12px |
color | [Farben](#farben) |
text-decoration | none\|underline | für Links (a-Tag)
text-align | left\|right\|center\|justify | Text innerhal von Tags ausrichten
border | 1px solid\|dashed red | breite des Rahmens, Art und [Farbe](#farben)
background | [Farben](#farben) | Farbe des Hintergundes anpassen ([weitere Eigenschaften](https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/Hintergrundfarben_und_-bilder/background))
padding (Innenabstand) | 1px 1px 1px 1px | oben rechts unten links
margin (Außenabstand) | 1px 1px 1px 1px | oben rechts unten links
width | 300px|50%|auto | auto kann verwendet werden um die Größe eines Elementes anzupassen, ohne das Seitenverhältnis zu ändern.
height | 300px|50%|auto

>Merke: | steht für "Oder"

```
body {
  font-family: sans-serif; /* Schrift ohne Serifen */
  font-size: 12px;
  font-weight: normal;
  color: black;
  text-align: left;
  background: white; /* Weiße Hintergrundfarbe */
}
a {
  color: blue;
  text-decoration: none; /* Normalerweise sind Links unterstrichen */
}
a:hover { /* Links über denen sich der Mauszeiger befindet */
  text-decoration: underline;
}
p {
  text-align: justify; /* Blocksatz */
}
p.second { /* p-tags mit der Klasse „second“ */
  border: 1px solid silver; /* Rahmen 1px breit durchgehend und silberfarben */
}
/* Mit einem Komma können mehrere Tags gleichzeitig ausgewählt werden */
p, div { /* alle p- und div-tags */
  padding: 2px 2px 2px 2px;
}
```

# Farben

Farben können mit Namen, Hexadezimalcode oder mit rgb-Werten angegeben werden. Die Angabe `darkred`, `#8B0000` und `rgb(139,0,0)` ergben die gleiche Farbe (Dunkelrot).

[Farbencodes generieren (mit Farbnamen)](https://www.quackit.com/css/css_color_codes.cfm)

**Rot/Grün/Blau-Mischung**

In einer Vorangegangenen Einheit wurden die 256 CSS3 Farbnamen vorgestellt, eine
weitere Möglichkeit, Farben zu definieren besteht in der Funktion `rgb(Rot, Grün, Blau)`. Rot,
Grün und Blau stehen dabei für ganze Zahlen im Bereich 0-255 (theoretisch können auch
Prozentwerte verwendet werden).
Beispiel

```
.special {
  color: rgb(0,128,0); /* Farbe „green“ */
  background-color: rgb(255,127,80); /* Farbe „coral“ */
}
```

**Rot/Grün/Blau-Mischung mit Transparenz**

CSS erlaubt es, zur RGB-Mischung noch einen Transparenzwert hinzuzufügen. Dadurch
lassen sich zum Beispiel teiltransparente Hintergrundfarben definieren.
Die allgemeine Schreibweise hierfür lautet `rgba(Rot, Grün, Blau, Deckkraft)`. Es gelten die
selben Regeln wie für die einfache RGB-Mischung. Der Wert Deckkraft wird jedoch als
Dezimalzahl im Bereich 0 (keine Deckkraft, vollkommen transparent) bis 1 (volle Deckkraft,
keine Transparenz) angegeben.
Beispiel
```
div {
  background-color: rgba(95,158,160,0.8); /* Farbe „cadetblue“ mit 80% Deckkraft */
}
```

[Noch mehr zu Farben](https://wiki.selfhtml.org/wiki/Grafik/Farben)
