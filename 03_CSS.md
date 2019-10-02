** Einführung CSS3 **
===
Die Struktur eines HTML Dokumentes besteht aus einer Vielzahl verschachtelter Tags deren Relation
zueinander wie in einer Familie bezeichnet wird. Parent und child bezeichnet dabei direkt über bzw.
untergeordnete Tags. Siblings sind Tags mit dem selben parent Tag und mit Ancestors werden alle
übergeordneten Tags bezeichnet.
Mit Cascading Style Sheets (CSS) lassen sich HTML Tags formatieren. Eine externe CSS Datei wird im
<head> Bereich eines HTML Dokumentes mit folgender Definition eingebunden:
<head>
<link rel="stylesheet" type="text/css" href="css/style.css">
<!-- weitere Informationen -->
</head>
Die Datei style.css liegt in diesem Beispiel im Unterordner css des Arbeitsverzeichnisses.
In der CSS Datei werden so genante Selektoren verwendet um Tags anzusprechen. Selektoren bestehen im
einfachsten Fall aus einem Tag.
p {
color: red;
}
Selektor {
Eigenschaft: Wert;
}
Hier wird die Farbe aller Texte
innerhalb von p-Tags auf rot gesetzt.
Um einzelne Tags anzusprechen erhalten die Tags im HTML Code Attribute. Dabei kommen zwei Attribute
zum Einsatz:
class
id
Klasse. Wird im Allgemeinen verwendet.
ID. Für Elemente die ein einziges Mal verwendet werden.
HTML Code Beispiel
<div class=“section“>
<h1 id=“main-title“>Lorem ipsum</h1>
<p class=“content“><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.
Nulla vel metus porta, cursus libero in, varius metus. Praesent scelerisque iaculis lectus. Suspendisse nec
maximus massa. Cras viverra leo quis molestie tincidunt. In dignissim congue dapibus. Duis at imperdiet
erat. Cras arcu nibh, eleifend volutpat sagittis eu, venenatis vitae mauris.</p>
<p class=“content second“>Donec tincidunt cursus ipsum, ut convallis lorem dictum et. <del>Cras id risus
magna.</del> Praesent dui libero, hendrerit a consectetur id, vehicula ut nibh. Nulla nec consectetur
leo.<hr><span class=“important“>Phasellus non leo semper, lobortis mi nec, gravida quam. Etiam feugiat
eget lectus quis blandit.</span></p>
</div>Informatik KS1 © Anselm Shah
Mit Selektoren können Elemente eines HTML-Dokumentes ausgewählt werden um Ihre Eigenschaften mit
CSS anzupassen. Dabei können Tags direkt, Klassen mit einem Punkt vor dem Namen und IDs mit einer
Raute vor dem Namen selektiert werden. Selektoren können auch kombiniert und verschachtelt werden.
Folgende Kombinationen sind möglich:
Stehen Tags und/oder
Alle Bedingungen müssen erfüllt sein.
div.content {
Klassen/IDs direkt
}
hintereinander
Stehen Tags und/oder
Es handelt sich um eine hierarchische Auswahl. p span .small {
Klassen/IDs durch ein
Nachfolgende Elemente müssen sich innerhalb }
Leerzeichen getrennt
von vorangegangenen befinden.
Stehen Tags und/oder
Die Anweisung gilt für jeden Selektor einzeln. p, .content, div#main {
Klassen/IDs durch ein Komma
}
getrennt
Beispiele für Selektoren:
p
p.content
p.second
.content.second
div .content
*
#main-title
p.second, div
div p
div.#main img
Alle p-Tags
Alle p-Tags mit der Klasse content
Alle p-Tags mit der Klasse second
Alle Tags mit der Klasse content und second
Alle Tags mit der Klasse content unterhalb eines div-Tags
Alle Tags
Alle Tags mit der id main-title
Alle p-Tags mit der Klasse second und alle div-Tags
Alle p-Tags innerhalb von div-Tags
Alle img-Tags innerhalb von div-Tags mit der ID main
Noch mehr Selektoren:
http://wiki.selfhtml.org/wiki/Referenz:CSS/Selektoren
Wichtige Pseudoelemente: :hover, :active, :visited.
 hover: Mit der Maus über dem Element.
 active: Angeklickte Verknüpfung.
 visited: Besuchte Verknüpfung.
Beispiel für Eigenschaften und Werte von Selektoren:
http://wiki.selfhtml.org/wiki/Referenz:CSS/Eigenschaften
Wichtige Formatierungseigenschaften:
font-family, font-size, font-weight, color, text-decoration, text-align, border und background.
Wichtige Layouteigenschaften:
padding, margin, width und height. (width und height nur bei block Elementen)
Beispiel für den Inhalt einer CSS Datei:
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
}Informatik KS1 © Anselm Shah
p {
text-align: justify; /* Blocksatz */
}
p.second { /* p-tags mit der Klasse „second“ */
border: 1px solid silver;
}
/* Mit einem Komma können mehrere Tags gleichzeitig ausgewählt werden */
p, div { /* alle p- und div-tags */
padding: 2px 2px 2px 2px;
}Informatik KS1 © Anselm Shah
Einführung CSS3 - Aufgaben
Formatieren Sie Elemente Ihres HTML Dokuments mit folgenden Eigenschaften:
font-face sans-serif|serif
font-weight
font-size
color
text-decoration
text-align
border
background
padding (Innenabstand)
margin (Außenabstand)
width
height 12px
normal|bold
farbe*
none|underline
left|right|center|justify
1px solid|dashed farbe*
farbe*
1px 1px 1px 1px
1px 1px 1px 1px
300px|50%|auto
300px|50%|auto
oder Name, z.B. „Tahoma“ oder
„Helvetica“, aber nicht sinnvoll da
Systemabhängig.
Für a-Tags sinnvoll
breite art farbe*
oben rechts unten links
oben rechts unten links
auto für automatische Anpassung
EINER Eigenschaft an die andere.
*Farbnamen: aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver,
teal, white, and yellow.
Alle CSS3 Farbnamen: http://www.crockford.com/wrrrld/color.html
Hinweis: „|“ bedeutet „oder“, also nur einen Wert verwenden.
