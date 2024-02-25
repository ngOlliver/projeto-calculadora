function calcularValores() {
   let valor1 = parseFloat(document.getElementById("txtValor1").value);
   let valor2 = parseFloat(document.getElementById("txtValor2").value);
   let operacao = document.getElementById("cbxOperacao").value;

   if (isNaN(valor1) || isNaN(valor2)) {
       alert('Por favor, digite um número!');
       return;
   }

   let resultado = operacao === "+" ? valor1 + valor2 :
                   operacao === "-" ? valor1 - valor2 :
                   operacao === "*" ? valor1 * valor2 :
                   operacao === "/" ? valor1 / valor2 :
                   null;

   if (resultado !== null) {
       document.getElementById("txtResultado").innerHTML = resultado;
   }
}