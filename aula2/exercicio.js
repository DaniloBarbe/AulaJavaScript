function e1 ()
{
    let n1 = document.getElementById("n1").value;

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