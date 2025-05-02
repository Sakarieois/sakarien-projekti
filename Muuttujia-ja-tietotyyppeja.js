let a = 3;
let b = 5;
let c = 7;
let d = 15;

function summa(a, b) {
    alert("Summa: " + (a + b));
}

function vähennys(b, c) {
    alert("Vähennys: " + (b - c));
}

function kerto(c, d) {
    alert("Kerto: " + (c * d));
}

function jako(d, a) {
    if (a === 0) {
        alert("Nollalla jakaminen ei ole sallittua!");
        return;
    }
    alert("Jako: " + (d / a));
}




function laskin_summa() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    if (isNaN(eka) || isNaN(toka)) {
        alert('Syötä molemmat numerot!');
        return;
    }
    summa(eka, toka)
}

function laskin_vähennys() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka =parseFloat(document.getElementById('numero2').value);
    if (isNaN(eka) || isNaN(toka)) {
        alert('Syötä molemmat numerot!');
        return;
    }
    vähennys(eka, toka)
}

function laskin_kerto() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    if (isNaN(eka) || isNaN(toka)) {
        alert('Syötä molemmat numerot!');
        return;
    }
    kerto(eka, toka)

}

function laskin_jako() {
    const eka = parseFloat(document.getElementById('numero1').value);
    const toka = parseFloat(document.getElementById('numero2').value);
    if (isNaN(eka) || isNaN(toka)) {
        alert('Syötä molemmat numerot!');
        return;
    }
    jako(eka, toka)

}

