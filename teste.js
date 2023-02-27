//Exercicio 3

const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  let totalFaturamento = 0;
  
  // Calcula o valor total mensal da distribuidora
  for (let estado in faturamentoMensal) {
    totalFaturamento += faturamentoMensal[estado];
  }
  
  // Calcula o percentual de representação de cada estado
  for (let estado in faturamentoMensal) {
    let percentual = (faturamentoMensal[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  

//===========================================================================================================
   
// Exercicio 4


function verificaFibonacci(num) {
    let a = 0;
    let b = 1;
    let fib = 0;
    
    while (fib < num) {
      fib = a + b;
      a = b;
      b = fib;
    }
    
    if (fib === num) {
      console.log(num + " pertence à sequência de Fibonacci.");
    } else {
      console.log(num + " não pertence à sequência de Fibonacci.");
    }
  }
  

//   =======================================================================================================

//  #Exercicio 5

function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}

console.log(inverterString("GuiLherme"));