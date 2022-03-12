function main() {
  var inName = document.getElementById('inName')
  var outPassword = document.getElementById('outPassword')
  var name = inName.value

  if (validarNome(name) == false) {
    alert('Please enter a complete name..;')
    inName.focus()
    return
  }

  outPassword.textContent =
    'Senha inicial: ' + obterSobrenome(name) + contarVogais(name)
}

var btGenerate = document.getElementById('btGenerate')
btGenerate.addEventListener('click', main)

function validarNome(name) {
  // se houver espaço no nome...
  if (name.indexOf(' ') >= 1) {
    return true // ... retorna true
  } else {
    return false
  }
}

function obterSobrenome(name) {
  var lastName = name.lastIndexOf(' ')
  return (lastName = name.substr(lastName + 1).toLowerCase())
}

function contarVogais(name) {
  var num = 0
  var letra

  for (var i = 0; i < name.length; i++) {
    letra = name.charAt(i).toUpperCase()
    if (
      letra == 'A' ||
      letra == 'E' ||
      letra == 'I' ||
      letra == 'O' ||
      letra == 'U'
    ) {
      num++
    }
  }
  return num < 10 ? '0' + num : num
}
