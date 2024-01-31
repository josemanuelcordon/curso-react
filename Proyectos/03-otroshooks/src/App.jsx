import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EjemploUserRef from './components/useRef/EjemploUserRef'
import EjemploUseRef2 from './components/useRef/EjemploUseRef2'
import EjemploUseRef3 from './components/useRef/EjemploUseRef3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div><hr/>
        <h2>Uso de userRef</h2>
        <EjemploUserRef/>
        <EjemploUseRef2/>
        <EjemploUseRef3/>
    </>
  )
}

export default App
