const paragrafos = document.querySelector('.paragrafos');
const container = document.querySelector('.container');
const ps = paragrafos.querySelectorAll('p'); // Usando querySelectorAll para pegar todos os <p>

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);



for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
} 

    