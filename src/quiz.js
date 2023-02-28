import  { calculatePercentage } from "./data.js";

const formQuiz = document.querySelector("#quiz");

formQuiz.addEventListener("click", (e)=>{
  const elemento = e.target;
  const ehRadio = elemento.type === "radio";
  const ehCorreta = ehRadio && elemento.value === "correta";

  if(ehRadio){
    elemento.parentNode.parentNode.dataset.score = ehCorreta;
    //fazer selecionar apenas uma vez
  }
})


// export const calculatePercentage = (dataList, dataListFiltered)=> {    
//   return parseInt((dataListFiltered*100)/dataList)
// }
    
// const percentage = calculatePercentage(characters.length, filteredSearch.length);
//   percentageReturn.innerHTML = `Essa lista contém ${filteredSearch.length} personagens, que equivale á ${percentage}% dos personagens totais`; 