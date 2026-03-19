let numero = document.getElementById("numero")
let aumentar = document.getElementById("aumentar")
let diminuir = document.getElementById("diminuir")

console.log(numero)

aumentar.addEventListener("click", () => {
    numero.textContent++
})

diminuir.addEventListener("click", () => {
    if(numero.textContent == "0") {
        alert('O número não pode ser negativo!')
        numero.textContent = 0
    } else {
        numero.textContent--
    }
})