//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listanomes = [];
let listaindiceSorteados = [];



function imprimirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
imprimirTexto('h2', 'Preenche abaixo o nome dos amigos');
function limparCampo(){
    let EntradaNome = document.querySelector('.input-name');
    EntradaNome.value = '';
}
function imprimirLista(){
   let ul = document.querySelector('#listaAmigos'); 
   ul.innerHTML = listanomes.map(nome => `<li>${nome}</li>`).join('');
}
function sorteioAleatorio(){
    let amigo = parseInt(Math.random() * listanomes.length);
    console.log(`Indice: ${amigo}`);
    if (listanomes.length == listaindiceSorteados.length){
        return listaindiceSorteados = [];
    }
    if (listaindiceSorteados.includes(amigo)){
        return sorteioAleatorio();
    } else {
        listaindiceSorteados.push(amigo);
        console.log(amigo);
        console.log("Indice de nuemros sorteados: " + listaindiceSorteados);
        return listanomes[amigo];
    }
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
    let ul = document.querySelector('.result-list');
    let amigoSorteado = sorteioAleatorio();
    ul.innerHTML = `<li> Amigo Sorteado: ${amigoSorteado} </li>`;
    botaoSortear.disabled = false; 
}




