import { useState } from 'react'

{/*
  Ejercicio 1 – Contador simple (25 puntos)
Crea una app con un componente llamado Contador que:

Muestre un número inicial (0)

Tenga tres botones: “+1”, “-1” y “Reset”

Cada botón actualiza el valor del contador en pantalla
  
--------------------------------------------------------------------------------------

Ejercicio 2 – Lista de mensajes (25 puntos)
Crea un componente Mensajes que reciba por props un array de strings y los muestre como una lista (<ul>).

Ejemplo de uso:

js
Copiar
Editar
const mensajes = ['Hola', '¿Cómo estás?', 'Adiós'];
<Mensajes mensajes={mensajes} />
Extra (5 puntos): Agrega un botón al final de cada ítem para eliminar ese mensaje de la lista.

----------------------------------------------------------------------------------

Ejercicio 3 – Login condicional (25 puntos)
Crea un componente Login que:

Tenga un estado logueado (booleano)

Muestre un botón que dice “Iniciar sesión” o “Cerrar sesión” según el estado

Muestre un texto diferente:

Si está logueado: “Bienvenido”

Si no está logueado: “Por favor, inicia sesión”
*/}

const App = () => {
 
    const [contador, setContador] = useState(0)

  return (
    <div>
      <p>Numero: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Menos</button>
      <button onClick={()=> setContador(contador - 1)}>Rest</button>
      <button onClick={() => setContador(0)}>Cero</button>
    </div>
  )
}

export default App