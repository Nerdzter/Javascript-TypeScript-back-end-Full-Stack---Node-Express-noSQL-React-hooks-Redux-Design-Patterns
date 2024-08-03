const numeros = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12 , 13, 14, 15, 16, 17, 18, 19, 20];

for (let numero of numeros) {

    if (numero === 2 ) {
        console.log('Pulei esse número :)')
        continue;
    }
    
    /* if (numero === 5){
        console.log('Opa irmão, aqui em diante n tem mais nada, hihihi');
        break;        
    } */
    
    console.log(numero);

}