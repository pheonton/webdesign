---
tags:
 - study
 - html
 - css
---
# Layout mit CSS

In diesem Kapitel geht es **nicht** darum, ganze Seitenlayouts zu bauen – das ist ein umfangreiches Thema für sich. Die Bereiche einer Seite (Kopf, Navigation, Inhalt, Fuß) werden mit den semantischen Elementen aus [Kapitel 1](01_HTML.md#seitenstruktur-semantische-elemente) angelegt und mit CSS angeordnet.

Hier behandeln wir nur zwei häufige, einfache Aufgaben:

1. ein Bild vom Text umfließen lassen
2. ein Bild als bildschirmfüllenden Hintergrund verwenden

> **Merke:** Ob ein Element in einer eigenen Zeile steht (Block, z.B. `<p>`) oder im Textfluss (Inline, z.B. `<strong>`), lässt sich mit der CSS-Eigenschaft `display` ändern (`block`, `inline`, `inline-block`). Für die beiden Aufgaben hier wird das aber nicht gebraucht.

## Bild im Text umfließen lassen

Standardmäßig beansprucht ein Bild eine eigene Zeile. Mit `float: left` (oder `float: right`) rückt das Bild an den Rand, und der folgende Text fließt daneben weiter. `margin` schafft Abstand zwischen Bild und Text.

<iframe width="560" height="315" src="https://www.youtube.com/embed/h8AUf0lE91M" title="Bild im Text positionieren" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```html
<p>
  <img src="images/tier.jpg" alt="Ein grasender Esel" class="im-text">
  Der restliche Text des Absatzes fließt neben dem Bild weiter und umschließt
  es, bis er unter dem Bild wieder die volle Breite einnimmt.
</p>
```

```css
img.im-text {
  float: left;
  width: 250px;
  height: auto;
  margin: 0 1em 0.5em 0;   /* Abstand: rechts und unten */
}
```

> **Merke:** Soll ein Element *unter* dem Bild beginnen und nicht daneben, bekommt es die Eigenschaft `clear: both`.

## Bild als Hintergrund

Ein Bild kann die ganze Seite hinterlegen. Der Hintergrund wird meist dem `<body>` gegeben:

```css
body {
  margin: 0;            /* den Standardabstand des Browsers entfernen */
  min-height: 100vh;    /* mindestens so hoch wie das Browserfenster (vh = 1% der Fensterhöhe) */

  background-image: url("../images/hintergrund.jpg");
  background-size: cover;       /* Bild füllt die Fläche; Seitenverhältnis bleibt erhalten */
  background-position: center;
  background-repeat: no-repeat;
}
```

> **Achtung:** Der Pfad bei `background-image` ist **relativ zur CSS-Datei**. Liegt die CSS-Datei im Ordner `css`, führt `../` eine Ebene höher, um von dort zur Bilddatei zu gelangen.

> **Merke:** Ein ausreichend hochauflösendes Bild wählen, damit es nicht pixelig wirkt – aber nicht zu groß, damit die Seite schnell lädt.

## Hilfe bei Problemen

Layout mit CSS kann frustrierend sein. Ein sehr nützliches Werkzeug ist der **Inspektor** von Firefox: Rechtsklick auf ein Element → *Element untersuchen*. Er zeigt die Abstände (`margin` lila, `padding` gelb) sowie alle angewendeten CSS-Eigenschaften an.
