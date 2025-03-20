var n1 = Number(prompt("digite o valor da prestacao"));
var n2 = Number(prompt("digite a taxa de juros "));
var n3 = Number(prompt("tempo de atraso"));
var total = n1+((n2**2/100)*n3*n1);
document.write("<p>o valor da parsela é "+ total +"</p>");
