[Home](README.md)

# Layout mit CSS #


Ohne Formatierung sind alle HTML Elemente linksbündig angeordnet. Um Bereiche neu anzuordnen z.B. nebeneinander anzuzeigen, kommt im HTML Code der `div` Tag zum Einsatz. 

## display

* Block-Elemente (`<h1>`, `<p>` usw.) beginnen und enden mit einem Zeilenumbruch und haben Werte für Breite (standartmäßig 100%) und Höhe.
* Inline-Elemente (`<strong>`, `<em>` usw.) werden in einer Reihe mit Text oder anderen Elementen dargestellt und haben keine Werte für Höhe und Breite.
* Inline-Block-Elemente (`<img>`) werden in einer Reihe mit anderen Elementen angezeigt und haben Werte für Breite und Höhe.

Die standart Eigenschaft eines Elementes läßt sich mit der CSS Funktion `display:` anpassen. Die möglichen Werte für die Eigenschaft `display:` sind `inline`, `inline-block` und `block`.

## float

Um Elemente von Text oder anderen Elementen "umfließen" zu lassen. Z.B. ein Bild in einem Text oder um mehrere div-Blöcke nebeneinander anzuzeigen, ist die Eigenschaft `float` mit den Werten `left` und `right` (für die Position des Elements) geeignet. Die Eigenschaft muss im nachfolgenden Element mit der Eigenschaft `clear: both` beendet werden, sonst verschieben sich alle nachfoglenden Elemente.

> Merke: Damit ein Parent-Element seinen floatenden Inhalt umschließt (nicht standardmäßig), ist es sinnvoll diesem die Eigenschaft `overflow: hidden` zu geben.

## position

Noch radikaler kann die Position eines Elementes mit der Eigenschaft `postion` verändert werden. dabei werden zwei Werte unterschieden:
* `relative` positioniert das Element relative zu seiner ursprünglichen Position, wo es ohne die Eigenschaft `postion: relative` angezeigt worden wäre.
* `absolute` positioniert das Element relative zum ersten übergeorndeten relativ positionierten Element. Gibt es kein relativ positioniertes Ancestor-Element, dann absolut zur linken oberen Ecke der Seite.
um ein positioniertes Elment zu verschieben, können die folgenden Eigenschaften gesetzt werden: `top`, `bottom`, `left`, `right` jeweils mit positiven oder negativen Prozent- oder Pixelangaben.

Durch die Positionierung können Elemente auch übereinander gelegt werden. Um zu entscheiden, welches Element in welcher Ebene liegt wird die Eigenschaft `z-index` verwendet. Positive Zahlenwerte heben das Element an, negative senken es ab. Der standart Wert für alle Elemente ist 0.

## weitere Eigenschaften

Die Eigenschaften `padding` und `margin` und `width` und `height` für Block-Elemente können auch eingesetzt werden. Mit der Eigenschaft `overflow: hidden` können Inhalte die ihr Parent-Element überragen ausgeblendet werden.

## Beispiele

Ein Bild linksbündig im Text:
```
img {
  float: left;
  padding: 0 2px 2px 0;
  width: 300px;
  height: auto;
}
```
`clear: both`; muss ins nachfolgende Element, um float zu beenden.
`overflow: hidden`; muss ins Parent-Element, um den Inhalt zu umschließen.

Listenelemente in einer Reihe:
```
li {
  display: inline-block;
}
```

Ein Element in der Mitte mit fester Breite von 600px:
```
div {
  width: 600px;
  margin: auto;
}
```

Ein Element das *immer* am unteren Rand der Seite angezeigt wird.
```
div.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: darkslategray;
  color: darksalmon;
  text-align: center;
}
```

## Hintergrund Bild

Ein besonders auffällige Formatierung ist ein Bild, dass den ganzen Bildschirm ausfüllt. Dafür kann der folgende CSS-Code verwendet werden. Dabei sollte ein genügend hochauflösendes Bild verwendet werden, damit es nicht pixelig dargestellt wird, aber nicht zu groß, so dass es schnell geladen wird.

> **Merke:** Wenn man versucht die Höhe eines div Elementes auf 100% der Fenstergrößezu setzten (`height: 100%`), funktioneirt das nicht ohne weiteres. Die Prozentangabe ist eine relative Angabe die von der Höhe des Parent-Elementes abhängt. Das Problem ist, dass jedes Element die Standarthöhenangabe `auto` hat, auch `<body>` und `<html>`, diese müssen also immer explizit auf 100% gesetzt werden.

> **Merke:** Die meisten Tags haben im Browser schon standard Formatierungen (z.B. Abstände bei Überschrift `<h1>` usw.). Diese können aber durch setzten der entsprechenden Eigenschaft im CSS Code überschrieben werden.

```
html, body {
  hight: 100%; /* Siehe der obige Merksatz */
  margin: 0; /* Den standard Abstand wird entfern */
}

div.background {
  background-image: url("../img/img_background.jpg"); /* Der relative Link zur Datei */

  height: 100%;   /* Wichtig! */
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* Maximal vergrößertes Bild ohne das Seitenverhältnis zu verändern */
}
```
> **Achtung:** `background-img` benötigt eine Pfadangabe zum Bild **relativ** zur CSS-Datei. D.h. wenn dei CSS-Datei im Ordner `css` liegt, kommt man mit `../` in den übergeordneten Ordner, um von da zur Bilddatei zu gelangen.

## Hilfe bei Problemen

Layout mit CSS kann auserordentlich frustrierend sein. Ein essentielles Tool um sich schnellen Überblick zur Problemlösung zu verschaffen, ist die Möglichkeit von Firefox, sich mit einem Rechtsklick auf ein Element und der Funktion **Inspect Element** margins (lila) und paddings (gelb) anzeigen zulassen. Ausserdem werden die angewendeten CSS Eigenschaften, sowie viele andere nützliche (und weniger nützliche) Funktionen, angezeigt.
