import {aleatorio, nome} from './aletorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaojogarNovamente = document.querySelector(".novamente-btn");
const botaoiniciar = document.querySelector(",iniciar-btn");
conat telainicial = document.querySelector(".tela-inicial");

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciajogo() {
    atual = 0;
    histotiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.ClassList.remove(".mostrar");
    caixaAlternativas.ClassList.remove(".mostrar");
    caixaResultado.ClassList.remove(".mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if(opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    }else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classlist.add("mostrar");
    botaoJogarNovamente.addEventListener("click", JogarNovamente);
}

function jogarNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classlist.remove("mostrar");
}

function substituiNome () {
    for (const pergunta of perguntas) {
        peegunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();
