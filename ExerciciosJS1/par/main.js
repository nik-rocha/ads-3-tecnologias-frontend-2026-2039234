// Ex 1

// let valor = parseInt(prompt("Digite um número para verificar se o mesmo é par ou ímpar:"));

// if (valor % 2 == 0) {
//     console.log("Seu número é par.");
// } else {
//     console.log("Seu número é ímpar.")
// }


// Ex 2

// let v1 = parseInt(prompt("Digite um número para fazer uma operação: "));
// let v2 = parseInt(prompt("Digite outro número para fazer uma operação: "));

// let op = prompt("Digite qual operação você deseja fazer: (+, -, *, /)");

// if (op == "+") {
//     r = v1 + v2;
//     console.log(`${v1} + ${v2} = ${r}`);
// } else if (op == "-") {
//     r = v1 - v2;
//     console.log(`${v1} - ${v2} = ${r}`);
// } else if (op == "*") {
//     r = v1 * v2;
//     console.log(`${v1} * ${v2} = ${r}`);
// } else if (op == "/") {
//     r = v1 / v2;
//     console.log(`${v1} / ${v2} = ${r}`);
// } else {
//     console.log("Você não digitou uma operação, tente novamente.");
// }


// Ex 3

let ano = parseInt(prompt("Digite um ano: "))

function verBissexto(n) {

    if (n % 4 == 0) {
        if (n % 100 !== 0) {
            console.log(`O ano ${n} é bissexto`)
            return true
        } else {
            console.log(`O ano ${n} NÃO é bissexto`)
            return false
        }

    } else {
        if (n % 400 == 0) {
            console.log(`O ano ${n} é bissexto`)
            return true
        } else {
            console.log(`O ano ${n} NÃO é bissexto`)
            return false
        }
    }
}

verBissexto(ano)
