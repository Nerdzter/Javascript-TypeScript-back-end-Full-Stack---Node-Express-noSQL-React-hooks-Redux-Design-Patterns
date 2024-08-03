/*
Operadores Lógicos

&& -> AND -> E     -------> todas expressoes tem que ser true para voltar true
|| -> OR  -> OU    -------> Aceita se uma for true ( true || false -> true)
!  -> NOT -> NÃO   -------> Inverte ( !true -> False )

*/


const expressaoAND = true && true && false;
const expressaoOr = true || false; // retornou true - pq uma é true 
const expressaoOr2 = false || false; // retornou false - pq todas sao falsas
const expressaoNot = true; // retorna true
console.log(!expressaoNot); //  coloquei ! ele retornou falso, se usar !! vira veradadeiro

