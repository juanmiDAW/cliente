import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //se declara la variable count y la funcion se llamará setCount que se iniciará a 0
  const [count, setCount] = useState(0)

  //devuelve un elemento padre que es el div
  return (
      <div className="card">
        {/*boton que al ser pulsado se llama a la funcion que modifica el estado de la variable count*/ }
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
  )
}

export default App
