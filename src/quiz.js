//input.value === "correta"
//style.backgroundColor = "rgba(0, 228, 0, 0.459)"
//else backgroundColor = "rgba(255, 0, 0, 0.459)"

const respostaCorreta = document.querySelectorAll(".quizRespostas");
console.log(respostaCorreta)
respostaCorreta.addEventListener("input", ()=>{
  console.log("funcionou")
})