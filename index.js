
const btn = document.querySelector("button")
let colorArr = []
let colorValue
const dropdown = document.querySelector("#dropdown")
const main = document.querySelector("#main")
const colorScheme = document.querySelector("#color-scheme")
function render() {
  dropdown.innerHTML = ""
  main.innerHTML = ""
  for (const color of colorArr) {
    dropdown.insertAdjacentHTML('beforeend', 
    `<option value=${color.hex.clean}>${color.name.value}</option>`
    )
    main.insertAdjacentHTML("beforeend", 
    `<div>
      <div style="background-color: ${color.hex.value}; height: 432px; width: 110px;"></div>
      <div style="height: 46px">${color.hex.value}</div>
    </div>`
    )
  }
}

fetch(`https://www.thecolorapi.com/scheme?hex=000000&format=json&count=6`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => {
  colorArr = data.colors
  render()
})

dropdown.addEventListener("change", function() {
  colorValue = dropdown.value
})

colorScheme.addEventListener("input", function() {
  colorValue = document.querySelector("#color-scheme").value
  colorValue = colorValue.slice(1, colorValue.length)
})

btn.addEventListener("click", function() {
  
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&format=json&count=6`)
  .then(res => res.json())
  .then(data => {
    colorArr = data.colors
    render()
  })
})