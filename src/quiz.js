/* eslint-disable no-console */
//input.value === "correta"
//style.backgroundColor = "rgba(0, 228, 0, 0.459)"
//else backgroundColor = "rgba(255, 0, 0, 0.459)"

const formQuiz = document.querySelector("#quiz");
console.log(typeof formQuiz);

const questions = document.querySelectorAll(".quizQuestion");
console.log(questions);

const perguntas = Array.from(questions); //no documento informava que podias usar num obj
console.log( perguntas);

// OQ JÁ TENTEI FAZER:
// COLOQUEI NUMA CONSTANTE PARA TRANSFORMAR EM ARRAY USANDO O Array.from(respCerta)
// const respCerta = document.querySelector(".quizRespostas");
// JÁ USEI TBM O QUERYSELECTORALL: const respCerta = document.querySelectorAll(".quizRespostas"); e o getElementsByClassName
// E NÃO FOI DIZ QUE respostaCorreta.addEventListener is not a function
// CRIEI UM ARRAY MANUALMENTE EM perguntasArray

// const perguntasArray = [
//   questions[0],
//   questions[1],
//   questions[2],
//   questions[3],
//   questions[4],
//   questions[5],
//   questions[6],
//   questions[7],
//   questions[8],
//   questions[9],
//   questions[10],
//   questions[11],
//   questions[12],
//   questions[13],
//   questions[14],
// ];
// console.log(perguntasArray);
// console.log(typeof perguntasArray);

// const respostaCorreta = document.querySelectorAll(".quizRespostas");
// console.log(typeof respostaCorreta);

const respostaCorreta = document.querySelector(
  "input[type=radio][value=correta]"
); //o typeof é string
const respostaErrada = document.querySelector("input[type=radio][value='']");
// desse jeito ^ FICA VERDE se tiver só .quizRespostas FICA VERMELHO e só na primeira opção pq qndo coloco querySelectorAll não funciona

const acertou = respostaCorreta.value;
const errada = respostaErrada;
console.log(typeof acertou);

const divCor = document.querySelector(".divQuiz");
console.log(typeof divCor);

// o addEventListener funciona com questions, perguntas e perguntasArray , mas em todos só pega o primeiro input ; o evento tbm funcionava com change

respostaCorreta.addEventListener("click", validaPerguntas);

function validaPerguntas() {
  perguntas.forEach(() => {
    if (acertou === "correta") {
      divCor.style.backgroundColor = "rgba(0, 228, 0, 0.459)";
    } else if (errada === "") {
      divCor.style.backgroundColor = "rgba(255, 0, 0, 0.459)";
    }
  });
}

// perguntasArray.forEach( () => {
//   respostaCorreta.addEventListener("change", ()=>{
//     if(acertou === "correta"){
//       // perguntas.classList.add("correta"); // não é possuivel ler as propriedades de add

//       divCor.style.backgroundColor = "rgba(0, 228, 0, 0.459)"
//     } else {//if (acertou === "") ASSIM TBM FUNCIONA
//       // perguntas.classList.add("errada");

//       divCor.style.backgroundColor = "rgba(255, 0, 0, 0.459)"
//     }
//   })
// })
