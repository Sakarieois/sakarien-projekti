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

            

                
            
            ikaTd.innerHTML = henkilo.age;
            rivi.appendChild(ikaTd);
            
            const työTd = document.createElement("td");
            let tyoDisplay = henkilo.job;
            if (henkilo.job.toLowerCase() === "opiskelija") {
                tyoDisplay += " 🎓";

            }
            työTd.innerHTML = henkilo.job;
            rivi.appendChild(työTd);
            
            const ajokorttiTd = document.createElement("td");
            ajokorttiTd.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";
            rivi.appendChild(ajokorttiTd);
            
            rivit.appendChild(rivi);
        });
    }
    
    luoRivit(); 
    





 if (isNaN(ika) || ika < 0) {
    alert("Iän pitää olla positiivinen luku");
    return;
} }

 
      function lisääHenkilö(pertti) {
        pertti.preventDefault();
        document.getElementById("lisaaBtn").onclick = function() {
            const nimiInput = document.getElementById("nimiInput");
            const ikaInput = document.getElementById("ikaInput");
            const tyoInput = document.getElementById("tyoInput");
            const korttiInput = document.getElementById("korttiInput");
    
            const nimi = nimiInput.value.trim();
            const ika = parseInt(ikaInput.value);
            const tyo = tyoInput.value.trim();
            const ajokortti = korttiInput.checked;
            
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