const startSchrift = getComputedStyle(document.body).fontFamily;
const heute = new Date();

const MONATE = ['januar', 'februar', 'märz', 'april', 'mai', 'juni', 'juli',
  'august', 'september', 'oktober', 'november', 'dezember'];

function rgb(farbe) {
  return (farbe.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
}

function enthaeltZahl(text, zahl) {
  return new RegExp(`(^|\\D)0?${zahl}(\\D|$)`).test(text);
}

const aufgaben = [
  {
    titel: 'Tippfehler',
    text: 'In der Überschrift der Wissen-Meldung steckt ein Tippfehler. Korrigiere ihn direkt im HTML.',
    geloest() {
      const titel = document.getElementById('robotik-titel').textContent;
      return titel.includes('Wettbewerb') && !titel.includes('Wettberwerb');
    }
  },
  {
    titel: 'Falsches Datum',
    text: `Das Datum oben rechts ist veraltet. Ändere es auf das heutige Datum (z.B. ${heute.toLocaleDateString('de-DE')}).`,
    geloest() {
      const jahr = String(heute.getFullYear());
      const text = document.getElementById('datum').textContent.toLowerCase();
      if (!text.includes(jahr)) return false;
      const ohneJahr = text.replace(jahr, ' ');
      const monatOk = ohneJahr.includes(MONATE[heute.getMonth()]) ||
        enthaeltZahl(ohneJahr.replace(/^\D*\d+/, ' '), heute.getMonth() + 1);
      return enthaeltZahl(ohneJahr, heute.getDate()) && monatOk;
    }
  },
  {
    titel: 'Falsches Bild',
    text: 'Im Aufmacher geht es um einen Radweg, das Bild zeigt aber eine Katze. Das richtige Bild heißt <code>fahrrad.jpg</code> und liegt im selben Ordner wie die Katze. Ändere das Attribut <code>src</code>.',
    geloest() {
      const bild = document.getElementById('leitbild');
      return bild.getAttribute('src').endsWith('fahrrad.jpg') && bild.complete && bild.naturalWidth > 0;
    }
  },
  {
    titel: 'Sinnloser alt-Text',
    text: 'Das Bild in der Kultur-Meldung hat als <code>alt</code>-Text nur einen Dateinamen. Schreibe eine sinnvolle Beschreibung des Bildes hinein.',
    geloest() {
      const alt = (document.getElementById('konzert-bild').getAttribute('alt') || '').trim();
      return alt.length >= 8 && !/\.(jpe?g|png|svg)|img_/i.test(alt);
    }
  },
  {
    titel: 'Kaputter Link',
    text: 'Der Menüpunkt „Sport" springt zur falschen Meldung. Finde heraus, welche <code>id</code> die Sport-Meldung hat, und repariere das <code>href</code> des Links.',
    geloest() {
      return document.getElementById('nav-sport').getAttribute('href') === '#sport';
    }
  },
  {
    titel: 'Weg mit der Werbung',
    text: 'Die nervige Werbung soll verschwinden. Lösche das ganze Element aus dem HTML.',
    geloest() {
      return !document.getElementById('werbung') && !document.querySelector('.werbung');
    }
  },
  {
    titel: 'Neue Schlagzeile',
    text: 'Füge der Liste „Meistgelesen" einen sechsten Eintrag mit einer eigenen Schlagzeile hinzu.',
    geloest() {
      const eintraege = document.querySelectorAll('#meistgelesen > li');
      return eintraege.length >= 6 && [...eintraege].every(li => li.textContent.trim() !== '');
    }
  },
  {
    titel: 'Wichtige Meldung',
    text: 'Die Meldung zum Schulfest ist wichtig. Im CSS gibt es dafür schon eine passende Klasse – finde ihren Namen und gib sie dem Element. Tipp: Klicke bei den Styles auf <code>style.css</code>, um die ganze CSS-Datei zu sehen.',
    geloest() {
      return document.getElementById('schulfest').classList.contains('wichtig');
    }
  },
  {
    titel: 'Eilmeldung in Rot',
    text: 'Die Eilmeldung ist zu unauffällig. Gib der grauen Leiste eine rote Hintergrundfarbe.',
    geloest() {
      const [r, g, b] = rgb(getComputedStyle(document.getElementById('eilmeldung')).backgroundColor);
      return r >= 120 && g <= 100 && b <= 100;
    }
  },
  {
    titel: 'Neue Schriftart',
    text: 'Ändere die Schriftart der ganzen Seite in eine Schrift ohne Serifen, z.B. <code>Arial</code> oder <code>sans-serif</code>. Tipp: Welches Element umfasst die ganze Seite?',
    geloest() {
      const schrift = getComputedStyle(document.body).fontFamily;
      return schrift !== startSchrift && !/georgia|times/i.test(schrift);
    }
  },
  {
    titel: 'Mehr Platz fürs Wetter',
    text: 'In der Wetter-Box klebt der Text am Rand. Gib ihr einen Innenabstand (<code>padding</code>) von mindestens 15px auf allen Seiten.',
    geloest() {
      const stil = getComputedStyle(document.getElementById('wetter'));
      return ['Top', 'Right', 'Bottom', 'Left'].every(seite => parseFloat(stil['padding' + seite]) >= 15);
    }
  },
  {
    titel: 'Das geheime Gewinnspiel',
    text: 'Irgendwo auf der Seite ist ein Gewinnspiel versteckt, das nicht angezeigt wird. Mach es sichtbar und notiere das Lösungswort.',
    geloest() {
      const box = document.getElementById('gewinnspiel');
      if (!box) return false;
      const stil = getComputedStyle(box);
      return stil.display !== 'none' && stil.visibility !== 'hidden' && box.getClientRects().length > 0;
    }
  }
];

const liste = document.getElementById('aufgaben');
const knopf = document.getElementById('pruefen');
const ergebnis = document.getElementById('ergebnis');

aufgaben.forEach((aufgabe, i) => {
  const li = document.createElement('li');
  li.className = 'aufgabe';
  li.innerHTML = `
    <span class="nummer">${i + 1}</span>
    <h3>${aufgabe.titel}</h3>
    <p>${aufgabe.text}</p>
    <p class="status">offen</p>`;
  liste.append(li);
  aufgabe.element = li;
});

function pruefen() {
  let geschafft = 0;
  for (const aufgabe of aufgaben) {
    let ok;
    try {
      ok = aufgabe.geloest();
    } catch {
      ok = false;
    }
    aufgabe.element.classList.toggle('geloest', ok);
    aufgabe.element.querySelector('.status').textContent = ok ? '✓ gelöst' : 'offen';
    if (ok) geschafft++;
  }
  const alle = geschafft === aufgaben.length;
  knopf.textContent = `Prüfen · ${geschafft}/${aufgaben.length}`;
  ergebnis.textContent = alle
    ? 'Alle Aufgaben gelöst! Zeig deiner Lehrkraft das Lösungswort aus dem Gewinnspiel.'
    : `${geschafft} von ${aufgaben.length} Aufgaben gelöst.`;
  ergebnis.classList.toggle('alle', alle);
}

knopf.addEventListener('click', pruefen);
pruefen();
