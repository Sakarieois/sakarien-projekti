const lista = ["Tehtävä 1", "Tehtävä2"];

paivitaLista()
function paivitaLista(){
    const ul = document.getElementById('tehtava-ul');
    ul.innerHTML = '';
    lista.forEach(tehtava => {
        const li = document.createElement('li');
        li.innerHTML = tehtava;
        ul.appendChild(li);
        
});
}

function lisaa() {
    const input = document.getElementById('uusi-tehtava');
    const uusiTehtava = input.value.trim();
    if (uusiTehtava !== '') {
      lista.push(uusiTehtava);
      paivitaLista();
      input.value = '';
    }
  }
  
  
  document.getElementById('lisaa-button').onclick = lisaa;
  
  
  
  function lisaaUseita() {
    const input = document.getElementById('uusi-tehtava');
    const maarainput = document.getElementById('lukumäärä');
    const uusiTehtävä = input.value.trim();
    const maara = parseInt(maarainput.value);

    if (uusiTehtävä === '' || isNaN(maara) || maara <= 0) {
      alert('Syötä tehtävä ja positiivinen numero!');
      return;
  }
  
  for (let i = 0; i < maara; i++) {
    lista.push(uusiTehtävä);
  }
  

  paivitaLista();

  input.value = '';
  maaraInputvalue = '';
}


