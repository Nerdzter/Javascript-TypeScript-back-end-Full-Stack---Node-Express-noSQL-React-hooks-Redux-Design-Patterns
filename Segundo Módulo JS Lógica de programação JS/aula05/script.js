// aula sobre - IF ELSE


/*
Ente  0 - 11   bom dia
entre 12 -18   boa tarde
entre 18 - 23  boa noite
*/

const hora = 15;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia, Fela!');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde, Fela!')
} else if( hora >= 18 && hora <= 23){
    console.log('Boa noite, Fela!');
}


//const tenhoDinheiro = true;
const tenhoDinheiro = NaN;


if (tenhoDinheiro ){
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
