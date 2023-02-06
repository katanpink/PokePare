document.querySelector("#search").addEventListener("click", getPokemon);
let stats = []
let stats1 = []
let base = 0
let base1 = 0
let total = 0
let total1 = 0

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);
  document.querySelector(".col2").innerHTML = `<button id="comb" onclick="comp()">Compare</button>`
  document.querySelector(".col2").style.display = "flex"
  stats = []
  base = 0
  total = 0

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
        <img
          src="${data.sprites.other["official-artwork"].front_shiny}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <br>
        <p>Weight: ${data.weight} lbs</p>
        <p>Health: ${data.stats[0].base_stat}<p>
        <p>Attack: ${data.stats[1].base_stat}<p>
        <p>Special Attack: ${data.stats[2].base_stat}<p>
        <p>Defense: ${data.stats[3].base_stat}<p>
        <p>Special Defense: ${data.stats[4].base_stat}<p>
        <p>Speed: ${data.stats[5].base_stat}<p>
      </div>`;
      for(let i = 0; i <= 5; i++){
        stats.push(data.stats[i].base_stat)
        base += stats[i]
      }

    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}

document.querySelector("#search1").addEventListener("click", getPokemon1);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon1(e) {
  const name = document.querySelector("#pokemonName1").value;
  const pokemonName = lowerCaseName(name);
  document.querySelector(".col2").innerHTML = `<button id="comb" onclick="comp()">Compare</button>`
  document.querySelector(".col2").style.display = "flex"
  stats1 = []
  base1 = 0
  total1 = 0

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox1").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
        <img
        src="${data.sprites.other["official-artwork"].front_shiny}"
        alt="Pokemon name"
      />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <br>
        <p>Weight: ${data.weight} lbs</p>
        <p>Health: ${data.stats[0].base_stat}<p>
        <p>Attack: ${data.stats[1].base_stat}<p>
        <p>Special Attack: ${data.stats[2].base_stat}<p>
        <p>Defense: ${data.stats[3].base_stat}<p>
        <p>Special Defense: ${data.stats[4].base_stat}<p>
        <p>Speed: ${data.stats[5].base_stat}<p>
      </div>`;
      for(let i = 0; i <= 5; i++){
        stats1.push(data.stats[i].base_stat)
        base1 += stats1[i]
      }
      if (base > base1){
        total++
        total++
        total++
      }else if (base1 > base){
        total1++
        total1++
        total1++
      }
    }
    )
    .catch((err) => {
      document.querySelector(".pokemonBox1").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
function comp() {
  for(let i = 0; i <= 5; i++){
    if (stats[i] > stats1[i]){
      total++
    }else if (stats1[i] > stats[i]){
      total1++
    }
  }
  document.querySelector(".col2").style.display = "block"
  document.querySelector(".col2").innerHTML = `
    <h1>Search again to reset</h1>
    <br><br><br><br>
    <h1><span id="a">${stats[0]}</span>-HP-<span id="a1">${stats1[0]}</span></h1>
    <h1><span id="b">${stats[1]}</span>-ATK-<span id="b1">${stats1[1]}</span></h1>
    <h1><span id="c">${stats[2]}</span>-SP.ATK-<span id="c1">${stats1[2]}</span></h1>
    <h1><span id="d">${stats[3]}</span>-DEF-<span id="d1">${stats1[3]}</span></h1>
    <h1><span id="e">${stats[4]}</span>-SP.DEF-<span id="e1">${stats1[4]}</span></h1>
    <h1><span id="f">${stats[5]}</span>-SPD-<span id="f1">${stats1[5]}</span></h1>
    <h1><span id="g">${base}</span>-BASE-<span id="g1">${base1}</span></h1>
    <h1><span id="h">${total}</span>-OVR-<span id="h1">${total1}</span></h1>
  `
  if (stats[0] > stats1[0]){
    document.getElementById('a').style.color = 'green'
    document.getElementById('a1').style.color = 'red'
  }else if (stats1[0] > stats[0]){
    document.getElementById('a1').style.color = 'green'
    document.getElementById('a').style.color = 'red'
  }else {
    document.getElementById('a1').style.color = 'yellow'
    document.getElementById('a').style.color = 'yellow'
  }
  
  if (stats[1] > stats1[1]){
    document.getElementById('b').style.color = 'green'
    document.getElementById('b1').style.color = 'red'
  }else if (stats1[1] > stats[1]){
    document.getElementById('b1').style.color = 'green'
    document.getElementById('b').style.color = 'red'
  }else {
    document.getElementById('b1').style.color = 'yellow'
    document.getElementById('b').style.color = 'yellow'
  }

  if (stats[2] > stats1[2]){
    document.getElementById('c').style.color = 'green'
    document.getElementById('c1').style.color = 'red'
  }else if (stats1[2] > stats[2]){
    document.getElementById('c1').style.color = 'green'
    document.getElementById('c').style.color = 'red'
  }else {
    document.getElementById('c1').style.color = 'yellow'
    document.getElementById('c').style.color = 'yellow'
  }

  if (stats[3] > stats1[3]){
    document.getElementById('d').style.color = 'green'
    document.getElementById('d1').style.color = 'red'
  }else if (stats1[3] > stats[3]){
    document.getElementById('d1').style.color = 'green'
    document.getElementById('d').style.color = 'red'
  }else {
    document.getElementById('d1').style.color = 'yellow'
    document.getElementById('d').style.color = 'yellow'
  }

  if (stats[4] > stats1[4]){
    document.getElementById('e').style.color = 'green'
    document.getElementById('e1').style.color = 'red'
  }else if (stats1[4] > stats[4]){
    document.getElementById('e1').style.color = 'green'
    document.getElementById('e').style.color = 'red'
  }else {
    document.getElementById('e1').style.color = 'yellow'
    document.getElementById('e').style.color = 'yellow'
  }

  if (stats[5] > stats1[5]){
    document.getElementById('f').style.color = 'green'
    document.getElementById('f1').style.color = 'red'
  }else if (stats1[5] > stats[5]){
    document.getElementById('f1').style.color = 'green'
    document.getElementById('f').style.color = 'red'
  }else {
    document.getElementById('f1').style.color = 'yellow'
    document.getElementById('f').style.color = 'yellow'
  }

  if (base > base1){
    document.getElementById('g').style.color = 'green'
    document.getElementById('g1').style.color = 'red'
  }else if (base1 > base){
    document.getElementById('g1').style.color = 'green'
    document.getElementById('g').style.color = 'red'
  }else {
    document.getElementById('g1').style.color = 'yellow'
    document.getElementById('g').style.color = 'yellow'
  }

  if (total > total1){
    document.getElementById('h').style.color = 'green'
    document.getElementById('h1').style.color = 'red'
  }else if (total1 > total){
    document.getElementById('h1').style.color = 'green'
    document.getElementById('h').style.color = 'red'
  }else {
    document.getElementById('h1').style.color = 'yellow'
    document.getElementById('h').style.color = 'yellow'
  }

}