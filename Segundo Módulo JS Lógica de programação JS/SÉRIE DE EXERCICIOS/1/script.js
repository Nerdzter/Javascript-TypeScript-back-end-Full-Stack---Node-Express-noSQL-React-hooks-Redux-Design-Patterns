// Escreva uma função que recebe
// dois numeros e retorna o maior


function escreveNumero() {
    let n1 = Math.floor(Math.random() * 10) + 1;
    let n2 = Math.floor(Math.random() * 10) + 1;
    return Math.max(n1, n2);
}

console.log(escreveNumero())