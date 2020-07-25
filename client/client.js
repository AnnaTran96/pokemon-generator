const startBtn = document.querySelector('.start')
const selectBtn = document.querySelector('.select')
const aBtn = document.querySelector('.a-btn')
const BBtn = document.querySelector('.b-btn')

// **********************  START BUTTON **********************

let imageArr = new Array();
for(var i = 1; i < 15; i++) {
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

function hideText() {
  document.querySelector('.press-start').style.visibility = "hidden";
}

// function changeSize() {
//   let image = document.querySelector('#photo')
//     image.style.width = "50%";
//     image.style.height = "50%"
// }

startBtn.addEventListener('click', function() {
  setInterval(function () {
      hideText();
      changeImage();
      // changeSize();
  }, 100);
})

// **********************  SELECT BUTTON **********************

selectBtn.addEventListener('click', backgroundBlur)

function backgroundBlur() {
  document.querySelector('#search').style.visibility = "visible";
  document.querySelector('.background').style.filter = "blur(5px)";
  document.querySelector('figurecaption').style.filter = "blur(5px)";
  document.querySelector('h1').style.filter = "blur(5px)";
  document.querySelector('.gameboy-body').style.filter = "blur(5px)";
  document.querySelector('.black-screen').style.filter = "blur(5px)";
}

let random = Math.floor(Math.random() * imageArr.length)

function choosePokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(console.log(`https://pokeapi.co/api/v2/pokemon/${id}`))
      .then(response => response.json)
      .then(pokemon => console.log(pokemon.name))
      .catch( error => console.log("Error occurred."))
}

// create new event listener for submit button