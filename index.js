let entrada = document.getElementById('entrada')
let problema_a_calcular = []

const insertarvalor = (valor) => {
  // Se agrega un valor al elemento de input de la calculadora, se van agregando.
  entrada.value += valor
  //Se añaden esos nuevos valores a un array que contendran toda la operación final que se hará al presionar el botón de igual.
  problema_a_calcular.push(valor)
  entrada.focus()
}

const eliminarvalor = () => {
  // Se elimina un valor
  problema_a_calcular.pop()
  recargarentrada()
  entrada.focus()
}

const recargarentrada = () => {
  entrada.value = ''
  entrada.value = problema_a_calcular.join('')
}

const limpiarentrada = () => {
  entrada.value = ''
  problema_a_calcular.values = []
  entrada.focus()
}

const calcular = () => {
  valores = problema_a_calcular.join('')
  let solucion = math.evaluate(valores)
  entrada.value = solucion
  return entrada.value
}

console.log(math.evaluate(problema_a_calcular))
/* console.log(math.evaluate(3 / 1)) */

//Para limitar la entrada de caracteres no matematicos en nuestra calculadora, se deshabilita el input al presionar cualquier tecla del teclado. Esto es mejorable para poder usar el teclado, pero por ahora lo dejamos de esta forma.
entrada.addEventListener('keydown', function (event) {
  entrada.disabled = true
})

// Habilitar el input cuando se haga clic en cualquier boton de la aplicación
entrada.addEventListener('click', function (event) {
  entrada.disabled = false
})
