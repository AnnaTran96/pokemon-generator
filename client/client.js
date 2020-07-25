const startBtn = document.querySelector('.start')

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

startBtn.addEventListener('click', function() {
  setInterval(function () {
      hideText();
      changeImage();
  }, 100);
})


// **********************  A BUTTON **********************
