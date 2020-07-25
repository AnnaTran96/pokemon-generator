const startBtn = document.querySelector('.start')
const selectBtn = document.querySelector('.select')
const aBtn = document.querySelector('.a-btn')
const bBtn = document.querySelector('.b-btn')
const backBtn = document.querySelector('.back-btn')
const backBtn2 = document.querySelector('.back-btn2')



// **********************  START BUTTON **********************

let imageArr = new Array();
for(var i = 1; i < 53; i++) {
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
}) // add {once:true}



// **********************  A BUTTON **********************

aBtn.addEventListener('click', stopInterval)



// **********************  SELECT BUTTON **********************

selectBtn.addEventListener('click', backgroundBlur)

function backgroundBlur() {
  document.querySelector('#search').style.visibility = "visible";
  // document.querySelector(".images").removeEventListener("mousemove", changeImage);
  document.querySelector('.background').style.filter = "blur(5px)";
  document.querySelector('figurecaption').style.filter = "blur(5px)";
  document.querySelector('h1').style.filter = "blur(5px)";
  document.querySelector('.gameboy-body').style.filter = "blur(5px)";
  document.querySelector('.black-screen').style.filter = "blur(5px)";
}

backBtn.addEventListener('click', goBack)

function goBack() {
  document.querySelector('#search').style.visibility = "hidden";
  document.querySelector('.background').style.filter = "blur(0px)";
  document.querySelector('figurecaption').style.filter = "blur(0px)";
  document.querySelector('h1').style.filter = "blur(0px)";
  document.querySelector('.gameboy-body').style.filter = "blur(0px)";
  document.querySelector('.black-screen').style.filter = "blur(0px)";
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
// createe function to stop start button



// **********************  B BUTTON **********************

bBtn.addEventListener('click', () => {
  document.querySelector('.zubat').style.visibility = "visible";
  document.querySelector('.background').style.filter = "blur(5px)";
  document.querySelector('figurecaption').style.filter = "blur(5px)";
  document.querySelector('h1').style.filter = "blur(5px)";
  document.querySelector('.gameboy-body').style.filter = "blur(5px)";
  document.querySelector('.black-screen').style.filter = "blur(5px)";
}) 

backBtn2.addEventListener('click', goBack2)

function goBack2() {
  document.querySelector('.zubat').style.visibility = "hidden";
  document.querySelector('.background').style.filter = "blur(0px)";
  document.querySelector('figurecaption').style.filter = "blur(0px)";
  document.querySelector('h1').style.filter = "blur(0px)";
  document.querySelector('.gameboy-body').style.filter = "blur(0px)";
  document.querySelector('.black-screen').style.filter = "blur(0px)";
}


