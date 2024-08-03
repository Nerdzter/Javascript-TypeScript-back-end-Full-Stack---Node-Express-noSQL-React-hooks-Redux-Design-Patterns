
/* 
try {
console.log(variavel);
}  catch (err) {
    console.log('não existe isso ai n mermao');
} */


function soma (x, u) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error ('x e y precisam ser números.');    
    }        
    return x +y;
}

try {
    
console.log(soma(1, 2));

console.log(soma(1, '2'));
} catch (error){
    console.log(error)
}
