---
tags:
 - study
 - html
---
# Einführung HTML


> **Merke:** Der Code wird mit dem Editor geschrieben und im Browser betrachtet. Anleitung dazu befindet sich [hier](A_Programme.md).

## Basisaufbau eines HTML Dokumentes

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body>
    Dieser Text wird angezeigt!
    <!-- Diser Text wird nicht angezeigt, weil er ein Kommentar ist -->
  </body>
</html>
```

| Element | Erläuterung |
| --- | --- |
| ```<!DOCTYPE html>``` | Definiert den Dokumententyp (nicht sichtbar) |
| ```<html></html>``` | Definiert den HTML Bereich im Dokument |
| ```<head><head>``` | Beinhaltet Informationen über das Dokument |
| ```<meta charset=UTF-8" />``` | Wird für die Darstellungen von Umlauten benötigt |
| ```<title></title>``` | Definiert den Titel des Dokuments (wird im Browser angezeigt) |
| ```<body></body>``` | Definiert den Inhaltsbereich des Dokumentes |
| ```<!--  -->``` | Definiert ein Kommentar (nicht sichtbar) |



> **Merke:** HTML Code wird verwendet um den Inhalt zu strukturieren und einzelnen Textabschnitten Bedeutung zuzuweisen, wie z.B. Überschriften, Paragraphen, Listen usw. HTML wird *nicht* zur Formatierung verwendet, dafür wird CSS eigesetzt.

## Textstrukturierung

| Element | Erläuterung |
| --- | --- |
| ```<h1></h1> bis <h6></h6>``` | Definiert HTML Überschriften |
| ```<p></p>``` | Definiert einen Paragraph |
| ```<br />``` | Einfacher Zeilenumbruch |
| ```<hr />``` | theamtischer Umbruch (horizontale Linie) |
| ```<em></em>``` | Definiert hervorgehobenen Text |
| ```<del></del>``` | Definiert gelöschten Text |
| ```<strong></strong>``` | Definiert wichtigen Text |

```html
<h1>Lorem ipsum</h1>
<p><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit. Nulla vel metus porta, cursus libero in, varius metus. Praesent scelerisque iaculis lectus. Suspendisse nec maximus massa. Cras viverra leo quis molestie tincidunt. In dignissim congue dapibus. Duis at imperdiet erat. Cras arcu nibh, eleifend volutpat sagittis eu, venenatis vitae mauris.<br />
Donec tincidunt cursus ipsum, ut convallis lorem dictum et. <del>Cras id risus magna.</del> Praesent dui libero, hendrerit a consectetur id, vehicula ut nibh. Nulla nec consectetur leo.</p>
<hr>
<p>Phasellus non leo semper, lobortis mi nec, gravida quam. Etiam feugiat eget lectus quis blandit.</p>
```

## Tabellen

| Element | Erläuterung |
| --- | --- |
```<table></table>``` | Definiert eine Tabelle
```<tr></tr>``` | Definiert eine Reihe
```<td></td>``` | Definiert eine Zelle

```html
<table>
  <tr>
    <td>Aliquam</td>
    <td>Praesent</td>
    <td>Quisque</td>
  </tr>
  <tr>
    <td>eget ipsum</td>
    <td>elementum lectus</td>
    <td>non arcu pharetra</td>
  </tr>
</table>
```
## Listen

| Element | Erläuterung |
| --- | --- |
```<ul></ul>``` | Definiert eine ungeordnete Liste
```<ol></ol>``` | Definiert eine geordnete Liste
```<li></li>``` | Definiert ein Listenelement



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
<img src="images/animals-q-c-640-480-3.jpg" alt="Aliquam efficitur" />
```

**Verknüpfungen**

(Link, Hyperlink)
```html
<a href="http://www.lmg-remseck.de/">Lise-Meitner-Gymnasium</a>
```
Dateien im Arbeitsordner (z.B. Bilder) werden mit einer [relativen Pfadangeabe](https://wiki.selfhtml.org/wiki/HTML/Tutorials/Links/Referenzieren_in_HTML#Mit_relativen_Pfadangaben_relativ_zum_Basis-URI_referenzieren) verknüpft, d.h. relative zur verknüpfenden Datei.
Für online Dateien, Bilder oder Webseiten, wird die Webadresse (URL) verwendet. (Es handelt sich dann um eine apsolute Verknüpfung)


## Tags für die Formatierung mit CSS

Für die Formatierung werden zwei weitere Elemente benötigt, die nur in Zusammenhang mit CSS Bedeutung haben

| Element | Erläuterung |
| --- | --- |
```<div></div>``` | **Block Element** insbesondere für die Formatierung des **Layouts** verwendet
```<span></span>``` | **Inline Element** insbesondere für die Formatierung von **Text** verwendet
