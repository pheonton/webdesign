Layout mit CSS
===

Ohne Formatierung sind alle HTML Elemente linksbündig angeordnet. Um Bereiche neu anzuordnen z.B. nebeneinander anzuzeigen, kommt im HTML Code der `div` Tag zum Einsatz. 

** display **

* Block-Elemente (`<h1>`, `<p>` usw.) beginnen und enden mit einem Zeilenumbruch und haben Werte für Breite (standartmäßig 100%) und Höhe.
* Inline-Elemente (`<strong>`, `<em>` usw.) werden in einer Reihe mit Text oder anderen Elementen dargestellt und haben keine Werte für Höhe und Breite.
* Inline-Block-Elemente (`<img>`) werden in einer Reihe mit anderen Elementen angezeigt und haben Werte für Breite und Höhe.

Die standart Eigenschaft eines Elementes läßt sich mit der CSS Funktion `display:` anpassen. Die möglichen Werte für die Eigenschaft `display:` sind `inline`, `inline-block` und `block`.

** float **

Um Elemente von Text oder anderen Elementen "umfließen" zu lassen. Z.B. ein Bild in einem Text oder um mehrere div-Blöcke nebeneinander anzuzeigen, ist die Eigenschaft `float` mit den Werten `left` und `right` (für die Position des Elements) geeignet. Die EIgenschaft muss im Parent-Element mit der Eigenschaft `clear: both` beendet werden, sonst verschieben sich alle nachfoglenden Elemente.

** position **

Noch radikaler kann die Position eines Elementes mit der EIgenschaft `postion` verändert werden. dabei werden zwei Werte unterschieden:
* `relative` positioniert das Element relative zu seiner ursprünglichen Position, wo es ohne die Eigenschaft `psotion: relative` angezeigt worden wäre.
* `absolute` positioniert das Element relative zum ersten übergeorndeten relativ positionierten Element. Gibt es kein relativ positioniertes Ancestor-Element, dann absolut zum linken oberen Ecke der Seite.
um ein positioniertes Elment zu verschieben, können die folgenden Eigenschaften gesetzt werden: `top`, `bottom`, `left`, `right` jeweils mit positiven oder negativen Prozent- oder Pixelangaben.

Durch die Positionierung können Elemente auch übereinander gelegt werden. Um zu entscheiden, welches Element in welcher Ebene liegt wird die Eigenschaft `z-index` verwendet. Positive Zahlenwerte heben das Element an, negative senken es ab. Der standart Wert für alle Elemente ist 0.

** weitere Eigenschaften **

Die Eigenschaften `padding` und `margin` und `width` und `height` für Block-Elemente können auch einegsetzt werden. Mit der Eigenschaft `overflow: hidden` können Inhalte die ihr Parent-Element überragen ausgeblendet werden.

# Beispiele

Ein Bild linksbündig im Text:
```
img {
  float: left;
  padding: 0 2px 2px 0;
  width: 300px;
  height: auto;
}
```
`clear: both`; muss ins Parent Element, um float zu beenden.

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

Ein Hintergrund Bild, das die ganze Seite ausfüllt mit 100px Abstand nach oben:
```
img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 100px;
}
