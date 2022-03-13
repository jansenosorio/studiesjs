//create a function to manage the HTML elements

function main() {
  var inValue = document.getElementById('inValue')
  var outMensage = document.getElementById('outMensage')

  var value = Number(inValue.value)

  if (value == '' || isNaN(value)) {
    alert('Please enter a correct number')
    inValue.focus()
    return
  }

  var descount = calcularDesconto(value)
  var valueToPay = value - descount

  outMensage.textContent =
    'Desconto R$: ' +
    descount.toFixed(2) +
    '\n' +
    'A Pagar R$: ' +
    valueToPay.toFixed(2)
}

var btCalculate = document.getElementById('btCalculate')
btCalculate.addEventListener('click', main)

//create a function to change Hidden boolean botton
function hiddenToShow() {
  var convenio = document.getElementById('convenio')

  if (rbYes.checked) {
    convenio.className = 'exibe'
  } else {
    convenio.className = 'oculta'
  }
}

var rbYes = document.getElementById('rbYes')
rbYes.addEventListener('change', hiddenToShow)

var rbNo = document.getElementById('rbNo')
rbNo.addEventListener('change', hiddenToShow)

//create a function to calcuate descount from

function calcularDesconto(value) {
  var inConvenio = document.getElementById('inConvenio')

  if (rbYes.checked) {
    var descountType = inConvenio.value
    var descountPercentage =
      descountType == 'amigoDosAnimais' ? value * 0.2 : value * 0.5
  } else {
    descountPercentage = value * 0.1
  }

  return descountPercentage
}
