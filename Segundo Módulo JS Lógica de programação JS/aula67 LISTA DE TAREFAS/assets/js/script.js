// puxando os arquivos

const div = document.querySelector('.adicionado');
const enviar = document.querySelector('.enviar');
const tarefa = document.querySelector('.formulario');

// Escutando os eventos
document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('tarefa')) {
      
    }

    if (el.classList.contains('enviar')) {
        
    // previne a pagina de ser redefinida
    e.preventDefault(); 

    const tarefasTextos = `⇨ ${tarefa.value}`;
    
    if (tarefasTextos){
        const novaTarefa = document.createElement('p');
        novaTarefa.textContent = tarefasTextos;

        div.appendChild(novaTarefa);

        tarefa.value = '';
    }
    }
});
