var n1 = Number(prompt("quantidade do produto"));
var n2 = Number(prompt("preco do produto"));
var total = n1*n2;
var desc = total*0.10;
var tota = total-desc
document.write("<p> subtotal é  "+ total +"</p>");
document.write("<p> o desconto é  "+ desc +"</p>");
document.write("<p> o total é  "+ tota +"</p>");