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

function naytaAika() {
    pertti = new Date();
    document.getElementById("päivämäärä").innerText = pertti.toLocaleDateString();
    document.getElementById("aika").innerText = pertti.toLocaleTimeString();
    document.getElementById("paivaJaAika").innerText = pertti.toLocaleString();
    const viikonpaiva = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Launtai"];
    document.getElementById("viikonpaiva").innerText = pertti.getDay();
    document.getElementById("viikonpaiva").innerText = viikonpaiva[pertti.getDay()];
    
  
    const kuukausi = ["Tammikuu", "helmikuu" , "maaliskuu" , "huhtikuu" , "toukokuu" , "kesäkuu" , "heinäkuu" , "elokuu" , "syyskuu" , "lokakuu" , "marraskuu" , "joulukuu"];
    document.getElementById("kuukausi").innerText = pertti.getMonth();
    document.getElementById("kuukausi").innerText = kuukausi[pertti.getMonth()];
}

