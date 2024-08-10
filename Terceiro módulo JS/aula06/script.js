// generate function

function* generate(){
    // return
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

const g1 = generate();
        //  .next();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

