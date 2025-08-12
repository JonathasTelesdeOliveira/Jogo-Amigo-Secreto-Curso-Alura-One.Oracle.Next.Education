//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listanomes = [];



function imprimirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function limparCampo(){
    let EntradaNome = document.querySelector('.input-name');
    EntradaNome.value = '';
}
function imprimirLista(){
   let ul = document.querySelector('#listaAmigos'); 
   ul.innerHTML = listanomes.map(nome => `<li>${nome}</li>`).join('');
}
imprimirTexto('h2', 'Preenche abaixo o nome dos amigos');

function sorteioAleatorio(){
    let amigo = parseInt(Math.random() * listanomes.length);
    console.log(`Indice: ${amigo}`);
    console.log(`Amigo sorteado: `+ listanomes[amigo]);

}

function adicionarAmigo(){
    let EntradaNome = document.querySelector('.input-name');
    let nome = EntradaNome.value.trim();
    if (nome != ''){
        console.log(nome);
        listanomes.push(nome);
        limparCampo();
        imprimirLista();
        
    }else{
        alert('Por favor digite um campo válido!!!');
    }
   
}

function sortearAmigo(){
    let botaoSortear = document.querySelector('.button-draw');
    console.log('Botão Sortear');
    console.log(listanomes);
    sorteioAleatorio();
    botaoSortear.disabled = false;
    
}




