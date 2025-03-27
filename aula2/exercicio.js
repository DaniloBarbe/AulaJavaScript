function e1 ()
{
    let n1 = Number(document.getElementById("n1").value);

    let quadrado = Number (n1) **2 ;
    let cubo = Number(n1) **3;

    document.getElementById("mensagem").innerHTML = " o quadrado é  "+quadrado ;
    document.getElementById("mensagem").innerHTML += "<br> o cubo é  "+cubo ;
}
function e2 ()
{
    let n1 = document.getElementById("n1").value;

    let celsius = Number (n1-32)*5/9  ;
    

    document.getElementById("mensagem").innerHTML = " a  temperatura em F:  "+n1 ;
    document.getElementById("mensagem").innerHTML += "<br> a temperatura em C "+celsius ;
}
function e3()
{
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let parcela = n1+n1*(((n2**2)/100)*n3);
    document.getElementById("mensagem").innerHTML = " o valor da parcela é :  "+parcela ;
}
function e4()
{
    let altura = document.getElementById("altura").value;
    let base = document.getElementById("base").value;
    let area = base*altura/2;
    document.getElementById("mensagem").innerHTML="a area do tringulo é: "+area;
}
function e5()
{
    let lado = document.getElementById("lado").value;
   
    let area = lado*lado;
    document.getElementById("mensagem").innerHTML="a area do quadrado é: "+area;
}
function e6()
{
    let qdt = document.getElementById("qdt").value;
    let preco = document.getElementById("preco").value;
    let valor = qdt*preco;
    let desconto = valor*0.1;
    let total= valor-desconto;
    document.getElementById("mensagem").innerHTML="o preco total é: "+valor;
    document.getElementById("mensagem").innerHTML="<br> o desconto é: "+desconto;
    document.getElementById("mensagem").innerHTML="<br> o preço final é: "+total;
}    
function e7()
{
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let media = (n1+n2+n3)/3;
    document.getElementById("mensagem").innerHTML="a media é: "+media;
}
function e8()
{
    let peso = Number(document.getElementById("n1").value);
    let altura = Number(document.getElementById("n2").value);
    let imc = peso/(altura*altura);
    document.getElementById("mensagem").innerHTML="seu imc é: "+peso;
}
function e9()
{
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let media = n1*(1+((n2/100)*n3));
    document.getElementById("mensagem").innerHTML="o montante é: "+media;
}
function e10()
{
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let media = n2*n1*30;
    document.getElementById("mensagem").innerHTML="o salario é: "+media;
}