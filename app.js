const input = document.querySelectorAll("input")
const h2 = document.querySelector("h2")
const h3 = document.querySelectorAll("h3")
const span = document.querySelectorAll("span")

input[0].addEventListener("input",()=>{
    h3[0].innerText = input[0].value
})
input[1].addEventListener("input",()=>{
    h2.innerText = input[1].value
})
input[2].addEventListener("input",()=>{
    span[0].innerText = input[2].value
})
input[3].addEventListener("input",()=>{
    span[1].innerText = input[3].value
})

// CVC part not added yet