document.getElementById("nappulanoppa").addEventListener("click", () => {
    const luku = Math.floor(Math.random() * 6) + 1;
    document.getElementById("noppa").textContent = "Nopan tulos: " + luku;
  });
  
  document.getElementById("nappulaLotto").addEventListener("click", () => {
    const numerot = [];
    while (numerot.length < 7) {
      const nro = Math.floor(Math.random() * 40) + 1;
      if (!numerot.includes(nro)) {
        numerot.push(nro);
      }
    }
    document.getElementById("lotto").textContent = "Numerot: " + numerot.join(", ");
  });