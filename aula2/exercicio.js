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
function e11()
{
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    if (n1==n2){
        document.getElementById("mensagem").innerHTML="os numeros sao iguais";
    }else{
        document.getElementById("mensagem").innerHTML="os numeros sao diferentes";
    }
}
function e12()
{
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    if (n1+n2>n3){
        document.getElementById("mensagem").innerHTML="o terceiro numero é menor que a soma dos primeiro ";
    }else{
        document.getElementById("mensagem").innerHTML="o terceiro é maior que a soma dos primeiros";
    }
}
function e13()
{
    let n1 = Number(document.getElementById("n1").value);

    if (n1<=500){
        document.getElementById("mensagem").innerHTML="voce tem direito ao aumento de salario ";
    }else{
        document.getElementById("mensagem").innerHTML="voce nao tem direito ao aumento de salario";
    }
}
function e14()
{
    let n1 = Number(document.getElementById("n1").value);

    if (n1<=500){
        let salario = n1*1.3
        document.getElementById("mensagem").innerHTML="seu salario foi reajustado para: R$"+salario;
    }else{
        document.getElementById("mensagem").innerHTML="voce nao tem direito ao aumento de salario";
    }
}
function e15()
{
    let cod = Number(document.getElementById("cod").value);
    let qdt = Number(document.getElementById("qdt").value);
    if (cod==5){
        let total = qdt*500.00
        document.getElementById("mensagem").innerHTML="tenis nike R$500,00";
        document.getElementById("mensagem").innerHTML="o preco total foi R$"+total;
    }
    else if (cod==10)
    {
        let total = qdt*300.00
        document.getElementById("mensagem").innerHTML="tenis nike R$300,00";
        document.getElementById("mensagem").innerHTML="o preco total foi R$"+total;   
    }
    else
    {
        document.getElementById("mensagem").innerHTML="codigo invelido";   
    }
}
function e16()
{
    let cod = Number(document.getElementById("cod").value);
    let qdt = Number(document.getElementById("qdt").value);
    let preco = Number(document.getElementById("preco").value);

    let subtotal=qdt*preco;
    if (cod==1){
        document.getElementById("mensagem1").innerHTML="quantidade: "+qdt;   
        document.getElementById("mensagem2").innerHTML="preco do produto: R$"+preco;  
        document.getElementById("mensagem3").innerHTML="subtotal: R$"+subtotal;  
        document.getElementById("mensagem4").innerHTML="o frete custa R$10,00";  
        document.getElementById("mensagem5").innerHTML="total a pagar: R$"+(subtotal+10);  
    }
    else if (cod==2)
    {
        document.getElementById("mensagem1").innerHTML="quantidade: "+qdt;   
        document.getElementById("mensagem2").innerHTML="preco do produto: R$"+preco;  
        document.getElementById("mensagem3").innerHTML="subtotal: R$"+subtotal;  
        document.getElementById("mensagem4").innerHTML="o frete custa R$50,00";  
        document.getElementById("mensagem5").innerHTML="total a pagar: R$"+(subtotal+50);  
    }
    else if(cod==3 || cod==5)
    {
        document.getElementById("mensagem1").innerHTML="quantidade: "+qdt;   
        document.getElementById("mensagem2").innerHTML="preco do produto: R$"+preco;  
        document.getElementById("mensagem3").innerHTML="subtotal: R$"+subtotal;  
        document.getElementById("mensagem4").innerHTML="o frete custa R$30,00";  
        document.getElementById("mensagem5").innerHTML="total a pagar: R$"+(subtotal+30);  
    }
    else if(cod>6 && cod<9)
    {
        document.getElementById("mensagem1").innerHTML="quantidade: "+qdt;   
        document.getElementById("mensagem2").innerHTML="preco do produto: R$"+preco;  
        document.getElementById("mensagem3").innerHTML="subtotal: R$"+subtotal;  
        document.getElementById("mensagem4").innerHTML="o frete custa R$40,00";  
        document.getElementById("mensagem5").innerHTML="total a pagar: R$"+(subtotal+40);  
    }
    else if((cod>10 && cod<15)||(cod>25 && cod<30))
    {
        document.getElementById("mensagem1").innerHTML="quantidade: "+qdt;   
        document.getElementById("mensagem2").innerHTML="preco do produto: R$"+preco;  
        document.getElementById("mensagem3").innerHTML="subtotal: R$"+subtotal;  
        document.getElementById("mensagem4").innerHTML="o frete custa R$85,00";  
        document.getElementById("mensagem5").innerHTML="total a pagar: R$"+(subtotal+85);  
    }
    else
    {
        document.getElementById("mensagem1").innerHTML="codigo invelido";   
    }
}