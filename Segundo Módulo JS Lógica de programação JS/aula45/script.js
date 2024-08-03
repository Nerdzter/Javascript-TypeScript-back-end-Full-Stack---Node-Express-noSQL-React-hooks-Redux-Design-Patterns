try {
    // Executada quando não existe erros
    console.log('To de boa aq executando');
    console.log('Até  deu um erro');
    console.log(a);
} catch (e) {
    // Executada quando existe erros 
    console.log('Entao o catch vem pra resolver');
} finally {
    // Sempre Executada
    console.log('e o finally sempre ta aq ne ');
}