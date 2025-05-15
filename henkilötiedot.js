const henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }
];

window.onload = function() {
    const rivit = document.getElementById("rivit");

    function luoRivit() {
        rivit.innerHTML = ""; 
        henkilot.forEach(function(henkilo) {
            const rivi = document.createElement("tr");
            
            
            const nimiTd = document.createElement("td");
            nimiTd.innerHTML = henkilo.name;
            rivi.appendChild(nimiTd);
            
            
            const ikaTd = document.createElement("td");
            let ikaDisplay = henkilo.age;
            if (henkilo.age >= 18) {
                ikaDisplay += " 🍺";
            }
            ikaTd.innerHTML = ikaDisplay;
            rivi.appendChild(ikaTd);
            
            
            const työTd = document.createElement("td");
            let tyoDisplay = henkilo.job;
            if (henkilo.job.toLowerCase() === "opiskelija") {
                tyoDisplay += " 🎓";
            }
            työTd.innerHTML = tyoDisplay;
            rivi.appendChild(työTd);
            
        
            const ajokorttiTd = document.createElement("td");
            ajokorttiTd.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";
            rivi.appendChild(ajokorttiTd);
            
            rivit.appendChild(rivi);
        });
    }

    luoRivit();

    window.lisaaHenkilo = function() {
        const nimi = document.getElementById("nimiInput").value.trim();
        const ikaStr = document.getElementById("ikaInput").value.trim();
        const tyo = document.getElementById("tyoInput").value.trim();
        const ajokortti = document.getElementById("korttiInput").checked;

        const ika = parseInt(ikaStr);
        if (isNaN(ika) || ika < 0) {
            alert("Iän pitää olla positiivinen luku");
            return;
        }

        henkilot.push({
            name: nimi,
            age: ika,
            job: tyo,
            driversLicense: ajokortti
        });
        luoRivit();
        document.getElementById("lisaaForm").reset();
    }
}