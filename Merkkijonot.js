
function poimiKirjain() {
    const teksti = document.getElementById('poimiTeksti').value;
    const indeksi = parseInt(document.getElementById('poimiIndeksi').value);
    const tulosteDiv = document.getElementById('poimiTuloste');

    if (isNaN(indeksi) || indeksi < 0 || indeksi >= teksti.length) {
        tulosteDiv.textContent = 'Virheellinen indeksi';
        return;
    }
    tulosteDiv.textContent = teksti.charAt(indeksi);
}

function haeIndeksi() {
    const teksti = document.getElementById('lisaaTeksti').value;
    const merkki = document.getElementById('haettavaMerkki').value;
    const tulosteDiv = document.getElementById('haeindeksiTuloste');

    const indeksi = teksti.indexOf(merkki);
    if (indeksi === -1) {
        tulosteDiv.textContent = 'Merkkiä ei löytynyt';
    } else {
        tulosteDiv.textContent = indeksi;
    }
}


function leikkaaMerkkijono() {
    const teksti = document.getElementById('leikkausTeksti').value;
    const alku = parseInt(document.getElementById('alkuIndeksi').value);
    const loppu = parseInt(document.getElementById('loppuIndeksi').value);
    const tulosteDiv = document.getElementById('leikkausTuloste');

    if (isNaN(alku) || isNaN(loppu) || alku < 0 || loppu >= teksti.length || alku > loppu) {
        tulosteDiv.textContent = 'Virheelliset indeksit';
        return;
    }

    const leikattu = teksti.substring(alku, loppu + 1);
    tulosteDiv.textContent = leikattu;
}

function etsiJaKorvaa() {
    const teksti = document.getElementById('etsintaTeksti').value;
    const etsiMerkki = document.getElementById('etsiMerkki').value;
    const korvaaTeksti = document.getElementById('korvaaTeksti').value;
    const tulosteDiv = document.getElementById('korvausTuloste');

    const tulos = teksti.replaceAll(etsiMerkki, korvaaTeksti);
    tulosteDiv.textContent = tulos;
}

function pilkoJaLisää() {
    const teksti = document.getElementById('splitTeksti').value;
    const merkki = document.getElementById('splitMerkki').value;
    const listaUl = document.getElementById('ulLista');

    listaUl.innerHTML = '';

    if (!merkki) {
        return;
    }

    const osat = teksti.split(merkki);

    osat.forEach(part => {
        const li = document.createElement('li');
        li.textContent = part;
        listaUl.appendChild(li);
    });
}