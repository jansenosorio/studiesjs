function mostrarDados() {
  //cria referência dos elementos HTML
  var inModelo = document.getElementById('inModelo')
  var inAno = document.getElementById('inAno')
  var inPreco = document.getElementById('inPreco')
  var outClassif = document.getElementById('outClassif')
  var outPrevoVenda = document.getElementById('outPrevoVenda')

  //obtém o conteúdo dos campos de entrada de dados
  var modelo = inModelo.value
  var ano = Number(inAno.value)
  var preco = Number(inPreco.value)

  //valida o preenchimento dos campos
  if (modelo == '' || ano == 0 || preco == 0 || isNaN(preco) || isNaN(ano)) {
    alert('Informe corretamente os dados...')
    inModelo.focus()
    return
  }

  //chama e atribui o retorno das funções as variaveis
  var classificacao = classificarVeiculo(ano)
  var precoVenda = calcularVenda(preco, classificacao)

  //exibe respostas
  outClassif.textContent = modelo + ' - ' + classificacao
  outPrecoVenda.textContent = 'Preco de Venda R$: ' + precoVenda.toFixed(2)
}
//cria referência ao botao e associa ao evento click a função mostrarDados
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', mostrarDados)

//função recebe o ano do veiculo

function classificarVeiculo(ano) {
  var anoAtual = new Date().getFullYear()
  var classif

  if (ano == anoAtual) {
    classif = 'Novo'
  } else if (ano == anoAtual - 1 || ano == anoAtual - 2) {
    classif = 'Seminovo'
  } else {
    classif = 'Usado'
  }

  return classif
}

//cria função que irá chamaro valor

function calcularVenda(valor, status) {
  var prVenda = status == 'Novo' ? valor * 1.08 : valor * 1.1
  return prVenda
}
