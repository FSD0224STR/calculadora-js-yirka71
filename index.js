let entrada = document.getElementById('entrada')
let problema_a_calcular = []
//let memoria = document.getElementById('memoria')

const insertarvalor = (valor) => {
  // Se van agregando elementos al input según se pulsan las teclas de la calculadora.
  entrada.value += valor
  //Se añaden esos nuevos valores a un array que contendran toda la operación final que se hará al presionar el botón de igual.
  problema_a_calcular.push(valor)

  entrada.focus()
}

const eliminarvalor = () => {
  // Se elimina un digito del array que contiene toda la operación
  problema_a_calcular.pop()

  //Tras eliminar ese digito se vuelve a insertar en el input los digitos que quedan en el array
  recargarentrada()
}

const recargarentrada = () => {
  entrada.value = problema_a_calcular.join('')
  entrada.focus()
}

const limpiarmemoria = () => {
  problema_a_calcular = []
  entrada.value = problema_a_calcular
  entrada.focus()
}

const calcular = () => {
  valores = problema_a_calcular.join('')
  let solucion = math.evaluate(valores)
  entrada.value = solucion
  problema_a_calcular = []
  problema_a_calcular.push(solucion)
  entrada.focus()
  return solucion
}

//Para limitar la entrada de caracteres no matematicos en nuestra calculadora, se deshabilita el input al presionar cualquier tecla del teclado. Esto es mejorable para poder usar el teclado, pero por ahora lo dejamos de esta forma.
entrada.addEventListener('keydown', function (event) {
  entrada.disabled = true
})

// Habilitar el input cuando se haga clic en cualquier boton de la aplicación
entrada.addEventListener('click', function (event) {
  entrada.disabled = false
})
