let order = [];
//ordem do jogo
//let é uma variável que pode ser alterada, diferente do const
let clickedOrder = [];
let score = 0;
//0 é o valor inicial do score
//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

//cria ordem aleatória de cores
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
//o const cria uma constante, que não pode ser alterada
//o querySelector seleciona o elemento HTML com a classe especificada

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);//*4 pois sempre sorteará um número de 0 a 3
    order[order.length] = colorOrder;//atribui o índice do array
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        //o let in order percorre o array order
        //o i é o índice do array
        //o tamanho que tem o order, será quantas vezes o loop irá rodar
        lightColor(elementColor, Number(i) + 1);
        //o Number(i) converte o índice para número
        //o +1 é para que a primeira cor acenda após 1 segundo
    }
}
//acende a próxima cor
let lightColor = (element, number) => {
    //element e number são os parâmetros da função
    time= time * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
            //lose() é chamada se a ordem estiver incorreta
            //break interrompe o loop
            //o for in percorre o array clickedOrder
            //checkOrder verifica se a ordem clicada está correta
        }
    }
    if(clickedOrder.length == order.length) {
        alert("Pontuação: $(score)\nVocê acertou! Iniciando próximo nível!");
        nextLevel();
    }
}
//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    //adiciona a cor clicada ao array clickedOrder
    //classList.add adiciona a classe 'selected' ao elemento
    setTimeout(() => {
        elementColor(color).classList.remove('selected');
        checkOrder();
    //verifica a ordem após o clique
    //o check dentro do select pois só deve verificar após o clique

    },250);
}

//função que retorna a cor
let createColorElement = (color) => {
    // => é a sintaxe de uma função arrow
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    }
    else if(color == 2) {
        return yellow;
    }
    else if(color == 3) {
        return blue;
    }
    //usar o else if em vez de vários ifs separados pois só uma condição será verdadeira
}

//funçao para próximo nível do jogo
let nextLevel = () => {
    score++;
    //o score aumenta em 1 a cada nível, ele está fora da função para não resetar
    shuffleOrder();
    //chama a função shuffleOrder para criar uma nova ordem
}
//função para game over
let lose = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    //o score está entre + para concatenar a variável com as strings
    //contatenar seria juntar strings e variáveis
    //ele também poderia ser com $ representando a variável string e ${} representando a variável
    order = [];

    playgame();
    //reseta o jogo
}
//função para iniciar o jogo
let playgame = () => {
    alert("Bem vindo ao Genesiss! Iniciando novo jogo!");
    score = 0;
    //alert ou console.log para mostrar mensagem ao usuário
    nextLevel();
    //next pois cada vez vai gerar uma nova cor
}
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
//onclick chama a função click com o parâmetro da cor correspondente
//adicionar cliques as cores

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
//o addEventListener adiciona um evento ao elemento
//o evento é o clique, e a função click é chamada com o parâmetro da cor correspondente

playgame();
//chamar a função para iniciar o jogo ao recarregar a página
