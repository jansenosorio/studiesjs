//cria uma referência ao botao

var btExibir = document.getElementById('btExibir')

//ao clicar no bota, a programacao ada funcao anonima é executada
btExibir.addEventListener('click', function () {
  //cria referencia aos elementos da página
  var inPreco = document.getElementById('inPreco')
  var outParcelas = document.getElementById('outParcelas')

  //obtem o contéudo do campo da entrada
  var preco = Number(inPreco.value)

  //vai acumular as formas de pagamento
  var lista = ''

  //cria uma repeticao para montar as opções de pagamento
  for (var i = 1; i <= 10; i++) {
    lista += i + 'x de R$: ' + (preco / i).toFixed(2) + '\n'
  }

  outParcelas.textContent = 'Opções de Pagamento\n\n' + lista
})
