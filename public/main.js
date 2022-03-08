//colors components
let bgColor = document.getElementById("bg-flash")
let colors = ["#ffffff", "#000000", "#DC2626"]
let text = document.querySelector("#hero")
let hamburger = document.querySelector(".hamburger")
let slideNav = document.querySelector(".slide-nav")
let span = document.querySelector("span")
const rajaAmpat = ["raja ampat"]

//image array

//function interval
let interval

let i = 0
setInterval(increment, 5000)
function increment() {
  i++
  if (i > 2) {
    i = 0
  }

  //background image change
  if (i == 0) {
    bgColor.style.backgroundImage = "url('../img/img1.jpg')"
    text.style.color = colors[0]
    text.innerHTML = "raja ampat"
  } else if (i == 1) {
    bgColor.style.backgroundImage = "url('../img/img2.jpg')"
    text.style.color = colors[2]
    text.innerHTML = "bromo"
  } else if (i == 2) {
    bgColor.style.backgroundImage = "url('../img/img3.jpg')"
    text.style.color = colors[0]
    text.innerHTML = "pantai"
  }

  //background color change
  // console.log(i)
  // let color = colors[i]
  // bgColor.style.backgroundColor = color
  // if (color === colors[0]) {
  //   text.style.color = colors[2]
  // }
  // if (color === colors[1]) {
  //   text.style.color = colors[2]
  // }
  // if (color === colors[2]) {
  //   text.style.color = colors[0]
  // }
}

hamburger.addEventListener("click", () => {
  slideNav.classList.toggle("active")
  span.classList.toggle("active")
})

// function random() {
//   return Math.floor(Math.random() * colors.length)
// }

// typerWriter = () => {
//   let j = 0
//   ;(document.querySelector("#hero").innerHTML = rajaAmpat[0]), substring(0, j)

//   if (j++ != rajaAmpat[0].length) {
//     setTimeout(typerWriter, 700)
//   }
// }
