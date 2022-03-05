let bgColor = document.querySelector("#bg-flash")
let colors = ["#ffffff", "#000000", "#DC2626"]
let text = document.querySelector("#hero")
let create = document.createElement("p")
let bonk = document.querySelector(".w-fit")
let del = document.querySelector("#del")
let grid = document.querySelector(".grid")
let interval

let i = 0
setInterval(increment, 3000)
function increment() {
  i++
  if (i > 2) {
    i = 0
  }
  console.log(i)
  let color = colors[i]
  bgColor.style.backgroundColor = color
  if (color === colors[0]) {
    text.style.color = colors[2]
  }
  if (color === colors[1]) {
    text.style.color = colors[2]
  }
  if (color === colors[2]) {
    text.style.color = colors[0]
  }
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
