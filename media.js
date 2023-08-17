var nota1;
var nota2;
var nota3;
var nota4;
var n1;
var n2;
var n3;
var n4;
var resp;

function calcularMedia() {
    ler();
    var r = (n1 + n2 + n3 + n4) / 4;
    if (r >= 7.0) {
        resp.innerHTML = `<br>APROVADO!<br><br> Média =  ${r.toPrecision(3)} <br>`;
    }
    else
        resp.innerHTML = `<br>REPROVADO<br><br>Média = ${r.toPrecision(3)}<br>`;

}

function ler() {
    // Faço a leitura dos elementos que eu preciso da tela
    nota1 = window.document.getElementById('txtn1').value;
    nota2 = window.document.getElementById('txtn2').value;
    nota3 = window.document.getElementById('txtn3').value;
    nota4 = window.document.getElementById('txtn4').value;
    resp = window.document.getElementById('resposta');

    n1 = Number(nota1)
    n2 = Number(nota2)
    n3 = Number(nota3)
    n4 = Number(nota4)
    resp.style.textAlign = "center"
    resp.style.fontWeight = "bold"
    //Troca o alinhamento por centralizado
}

function limpar() {
    txtn1.value = ""
    txtn2.value = ""
    txtn3.value = ""
    txtn4.value = ""
    txtn1.focus()
    /*Muda o foco para esse objeto. 
    Nesse caso, o cursor vai para ele*/
}