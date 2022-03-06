//colors components
let bgColor = document.getElementById("bg-flash")
let colors = ["#ffffff", "#000000", "#DC2626"]
let text = document.querySelector("#hero")

//image array

//function interval
let interval

let i = 0
setInterval(increment, 3000)
function increment() {
  i++
  if (i > 2) {
    i = 0
  }

  if (i == 0) {
    bgColor.style.backgroundImage = "url('../img/img1.jpg')"
    text.style.color = colors[0]
  } else if (i == 1) {
    bgColor.style.backgroundImage = "url('../img/img2.jpg')"
    text.style.color = colors[2]
  } else if (i == 2) {
    bgColor.style.backgroundImage = "url('../img/img3.jpg')"
    text.style.color = colors[0]
  }

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

text.addEventListener("click", () => {
  text.classList.toggle("active")
})

del.addEventListener("click", () => {
  create.remove
})
// function random() {
//   return Math.floor(Math.random() * colors.length)
// }
