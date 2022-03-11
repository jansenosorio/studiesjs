var itens = []

function trocarItem() {
  var inPizza = document.getElementById('inPizza')
  var inBebida = document.getElementById('inBebida')

  //se estiver marcado

  if (rbPizza.checked) {
    inBebida.className = 'oculta'
    inPizza.className = 'exibe'
  } else {
    inBebida.className = 'exibe'
    inPizza.className = 'oculta'
  }
}

var rbPizza = document.getElementById('rbPizza')
rbPizza.addEventListener('change', trocarItem)

var rbBebida = document.getElementById('rbBebida')
rbBebida.addEventListener('change', trocarItem)
