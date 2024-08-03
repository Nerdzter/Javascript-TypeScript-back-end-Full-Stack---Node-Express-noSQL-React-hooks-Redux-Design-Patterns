// exercicio fizz buzz 







const numero = Math.floor(Math.random() * 101); // Gera um número entre 0 e 100
const resultado = numero % 3 === 0 && numero % 5 === 0 ? 'FizzBuzz' :
                  numero % 3 === 0 ? 'Fizz' :
                  numero % 5 === 0 ? 'Buzz' : 
                  numero;

console.log(numero);
console.log(resultado);
