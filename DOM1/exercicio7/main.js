let nomeTarefa = document.getElementById("nomeTarefa")
let enviarTarefa = document.getElementById("enviarTarefa")
let lista = document.getElementsByClassName("lista")
let item = document.querySelectorAll("#item")

console.log(item)

i = 0

enviarTarefa.addEventListener("click", () => {
    if (i > 4) {
        alert('Você atingiu o limite!')
    } else {
        item[i].innerHTML = `<h2>${nomeTarefa.value}</h2>`
        i++
    }
})