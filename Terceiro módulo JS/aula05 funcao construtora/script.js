// functions construtora - >  retorna objetos 
// função fábrica -> objetos

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    const ID = 12345;

    const metodoInterno = () => console.log('Esse método é interno.');

   metodoInterno();


    // escrevendo método
    this.metodo = function() {
        console.log(this.nome + ' : Sou um método')
    };


};
const p1 = new Pessoa('Nayderson', 'Oliveira');

console.log(p1.nome, p1.sobrenome)
p1.metodo();