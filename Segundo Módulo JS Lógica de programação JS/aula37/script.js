

//            01234567....
const nome = ['Nayderson','Oliveira'];


    for (let i = 0; i < nome.length; i++) { // com arrays e strings
    console.log(nome[i]);
    }

console.log('----------------------');

    for (let i in nome) { //  retorna o indice ou chaves, indices arrays, objetos
    console.log(nome[i]);

    }

    console.log('----------------------');

    for (let valor of nome) { // somente arrays ou strings
    console.log(valor);
    }

    console.log('----------------------');

    
