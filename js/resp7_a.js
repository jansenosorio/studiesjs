//we need to creat a function to count the number of letters of name and put "-" under the name
var completeName = []

function retornarTracos() {
  //reference the element HTML through DOM elements
  var inName = document.getElementById('inName')
  var outMensage = document.getElementById('outMensage')

  //create a var that will receive the name

  var name = inName.value

  //verify if the camp are filled

  if (name == '') {
    alert('Please, insert a name...')
    inName.focus()
    return
  }

  var concat = '' //var to concat the name with "-"
  var tam = name.length //
  var category = categorizarAluno()

  //console.log(tam)

  for (var i = 0; i < tam; i++) {
    if (name.charAt(i) != ' ') {
      concat += '-'
    } else {
      concat += ' '
    }
  }
  outMensage.textContent =
    name + '\n' + concat + '\n' + 'Categoria: ' + category
}
var btCategorize = document.getElementById('btCategorize')
btCategorize.addEventListener('click', retornarTracos)

//function to categorize age

function categorizarAluno() {
  var inAge = document.getElementById('inAge')

  var age = Number(inAge.value)

  var category = ''

  if (age <= 12) {
    category = 'Infantil'
  } else if (age >= 13 && age <= 18) {
    category = 'Juvenil'
  } else {
    category = 'Adulto'
  }

  return category
}
