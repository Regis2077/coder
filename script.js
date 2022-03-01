var botaoCripto = document.querySelector('#botao-cripto')
var botaoDescripto = document.querySelector('#botao-descripto')
var botaoCopiar = document.querySelector('#btn-copy')

var resposta = document.querySelector('#resposta')
var mensagem = document.querySelector('#inputTexto')

botaoCripto.addEventListener("click", btnCript)
botaoDescripto.addEventListener("click", btnDescript)
botaoCopiar.addEventListener("click", btncopiar)


function criptografia (mensagem) {
  
  let msgCriptografada = mensagem
        .replaceAll(/e/gi, 'enter')
        .replaceAll(/i/gi, 'imes')
        .replaceAll(/a/gi, 'ai')
        .replaceAll(/o/gi, 'ober')
        .replaceAll(/u/gi, 'ufat')
  return msgCriptografada;

}

function descriptografia (mensagem) {
  let msgDescriptograda = mensagem
        .replaceAll(/enter/gi, 'e')
        .replaceAll(/imes/gi, 'i')
        .replaceAll(/ai/gi, 'a')
        .replaceAll(/ober/gi, 'o')
        .replaceAll(/ufat/gi, 'u')
    return msgDescriptograda;
}


function btnCript(event) {
  event.preventDefault();
  const inputSalvo = mensagem.value;
  resposta.value = criptografia(inputSalvo)
 return resposta.value;
 
}


function btnDescript(event) {
  event.preventDefault();

  var inputSalvo = mensagem.value;
  resposta.value = descriptografia(inputSalvo);
  mensagem.value = '';
 
}

function btncopiar() {
  resposta.select();
  resposta.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(resposta.value);
}




