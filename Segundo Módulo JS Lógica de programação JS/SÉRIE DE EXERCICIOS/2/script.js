/* 
escreva uma funcao chamada ePaisagem que
recebe dois argumentos, largura e altura
de uma imagem ( number ). retorne true se a imagem estiver no modo paisagem
*/

const largura = Math.floor(Math.random() * 11); 
const altura = Math.floor(Math.random() * 11)

const paisagem = ( largura, altura ) => largura > altura;


console.log(paisagem(largura, altura));

