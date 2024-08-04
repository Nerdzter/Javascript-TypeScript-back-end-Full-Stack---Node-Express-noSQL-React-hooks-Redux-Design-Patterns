// Várias maneiras de definir função

  /*  Função é objeto de primeira classe */

// 1 -  Declaração (function hoisting)

function falaOi(){
    console.log('oie');
}
  falaOi();

// 2 - Arrow functions

const funcao = () => {
    console.log('Isso é uma função, porém uma Arrow Function.')
}
funcao();

// 3- Dentro de um objeto

const objeto = {
    nome: function falar() {
        console.log('Eu tbm falo por aqui...');
    } 
};
objeto.nome();