// const e = require("express")

const startBtn = document.querySelector('.start')
const selectBtn = document.querySelector('.select')
const aBtn = document.querySelector('.a-btn')
const bBtn = document.querySelector('.b-btn')
const backBtn = document.querySelector('.back-btn')
const backBtn2 = document.querySelector('.back-btn2')
const form = document.querySelector('#form')
const pokemonResult = document.querySelector('.pokemon-result')
const pokemonType = document.querySelector('.type')
const pokemonImg = document.querySelector('#pokemon-api')
const navigator = document.querySelector('.navigator')


// **********************  START BUTTON **********************


// Using Images from Assets folder

let imageArr = new Array();
for(let i = 1; i < 53; i++) {
  imageArr.push(`assets/img${i}.png`)
}

// console.log(imageArr)

let x = 0;

function changeImage() {
  document.getElementById('photo').src = imageArr[x];

  if(x < imageArr.length-1) {
    x++
  } else {
    x = 0;
  }
}

function hideTextShowPhoto() {
  document.querySelector('.press-start').style.visibility = "hidden";
   document.querySelector('#pokeball').style.visibility = "hidden";
  //  document.querySelector('#photo').style.visibility = "visible";

}

let timer = null;

function startInterval() {
  timer = setInterval(function () {
    hideTextShowPhoto();
    changeImage();
}, 20);
}

function stopInterval() {
  clearInterval(timer)
}

startBtn.addEventListener('click', function() {
  document.querySelector('#photo').style.visibility = "visible";
  startInterval()
})



// **********************  A BUTTON **********************

aBtn.addEventListener('click', stopInterval)



// **********************  SELECT BUTTON **********************

selectBtn.addEventListener('click', () => {
  stopInterval();
  backgroundBlur();
})

function blur() {
  document.querySelector('.background').style.filter = "blur(5px)";
  document.querySelector('figcaption').style.filter = "blur(5px)";
  document.querySelector('h1').style.filter = "blur(5px)";
  document.querySelector('.gameboy-body').style.filter = "blur(5px)";
  document.querySelector('.black-screen').style.filter = "blur(5px)";
}

function noBlur() {
  document.querySelector('.background').style.filter = "blur(0px)";
  document.querySelector('figcaption').style.filter = "blur(0px)";
  document.querySelector('h1').style.filter = "blur(0px)";
  document.querySelector('.gameboy-body').style.filter = "blur(0px)";
  document.querySelector('.black-screen').style.filter = "blur(0px)";
}

function backgroundBlur() {
  document.querySelector('#search').style.visibility = "visible";
  blur();
}

function goBack() {
  document.querySelector('#search').style.visibility = "hidden";
  noBlur();
  noPokemonVisibility();
}

backBtn.addEventListener('click', () => {
  backgroundBlur();
  goBack();
})

// **********************  SEARCH BUTTON **********************


const searchPokemon = e => {
  let id = e.target.searchBar.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url) 
    .then(res => { return res.json() })
    .then(data => {
      console.log(data)
      const pokemon = {
        name: data.name,
        id: data.id,
        img: data.sprites.front_default,
        type: data.types.map(type => type.type.name).join(', ')
      };
      console.log(`#${pokemon.id} ${pokemon.name} ${pokemon.img} ${pokemon.type}`)
    displayPokemon(pokemon);
    })
    // .catch(alert('Please enter a valid name of ID number'))
}

const displayPokemon = search => {
  console.log(search);
  const name = search.name;
  const id = search.id;
  const type = search.type;
  const img = search.img
  pokemonResult.textContent = `#${id}   ${name}`;
  pokemonType.textContent = `Type: ${type}`;
  pokemonImg.setAttribute("src", img)
}

function noPokemonVisibility() {
  pokemonResult.style.visibility = "hidden";
  pokemonType.style.visibility = "hidden";
  pokemonImg.style.visibility = "hidden";
}

form.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('#who').style.visibility = "hidden"
  searchPokemon(e);
  pokemonResult.style.visibility = "visible";
  pokemonType.style.visibility = "visible";
  pokemonImg.style.visibility = "visible";
})


// **********************  B BUTTON **********************

bBtn.addEventListener('click', () => {
  stopInterval();
  document.querySelector('.zubat').style.visibility = "visible";
  blur();
}) 

function goBack2() {
  document.querySelector('.zubat').style.visibility = "hidden";
  noBlur();
}

backBtn2.addEventListener('click', goBack2)

// **********************  TOGGLE ON/OFF  **********************

//let audio = new Audio('opening.mp3');
//audio.play();


// **********************  NAVIGATOR BUTTONS  **********************

navigator.addEventListener('click', () => {

  fetch('http://localhost:3000/pokemon/random')
    .then(response => {
      let quote = response.data;
      const h1 = document.getElementById('quotes')
      h1.textContent = quote; 
  })
})