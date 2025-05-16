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

function abs() {
    const num = parseFloat(document.getElementById("numero1").value);
    alert("Itseisarvo" + Math.abs(num));
}
function sqrt() {
    const num = parseFloat(document.getElementById("numero1").value);
    alert("neliöjuuri" + Math.sqrt(num));
}


function pow() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    alert("Potenssi: " + Math.pow(num1, num2));
}


function max() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    alert("Suurempi numero: " + Math.max(num1, num2));
}

function min() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    alert("Pienempi numero: " + Math.min(num1, num2));
}

function round() {
    const num = parseFloat(document.getElementById("numero1").value);
    alert("Pyöristetty luku: " + Math.round(num));
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



const veijoOikeudet = new Set(['luku', 'poisto']);
const elviraOikeudet = new Set(['luku', 'kirjoitus', 'muokkaus']);
const mehdiOikeudet = new Set(['luku', 'muokkaus', 'poisto']);
const tuuliOikeudet = new Set(['kirjoitus', 'poisto']);



function lisaaOikeudet(userSet, listId) {
    const list = document.getElementById(listId);
    userSet.forEach(oikeus => {
      const li = document.createElement('li');
      li.textContent = oikeus;
      list.appendChild(li);
    });
  }
  lisaaOikeudet(veijoOikeudet,"veijo")
  lisaaOikeudet(elviraOikeudet,"Elvira" )
  lisaaOikeudet(mehdiOikeudet, "Mehdi" )
  lisaaOikeudet(tuuliOikeudet, "Tuuli")

veijo = veijoOikeudet.union(tuuliOikeudet);
lisaaOikeudet(veijo, "veijotuuli");
lokke = mehdiOikeudet.intersection(elviraOikeudet);
lisaaOikeudet(lokke , "mehdielvira"  );
pertti = elviraOikeudet.difference(tuuliOikeudet);
lisaaOikeudet(pertti, "elviratuuli");
