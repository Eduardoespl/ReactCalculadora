import { useState } from "react"
import './index.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChange1 = (e) => {
    setNum1(e.target.value);
  }

  const handleChange2 = (e) => {
    setNum2(e.target.value);
  }

  const handleSumar = () => {
    setResultado(parseInt(num1) + parseInt(num2));
  }

  const handleRestar = () => {
    setResultado(parseInt(num1) - parseInt(num2));
  }

  const handleMultiplicar = () => {
    setResultado(parseInt(num1) * parseInt(num2));
  }

  const handleDividir = () => {
    setResultado(parseInt(num1) / parseInt(num2));
  }

  return (
    <>
      <body>
        <h1>Calculadora</h1>
        <input type="number" placeholder="numero 1" value={num1} onChange={handleChange1}/>
        <input type="number" placeholder="numero 2" value={num2} onChange={handleChange2}/>
        <div className="botones">
          <button onClick={handleSumar}>+</button>
          <button onClick={handleRestar}>-</button>
          <button onClick={handleMultiplicar}>x</button>
          <button onClick={handleDividir}>/</button>
        </div>
        <p>Resultado: {resultado}</p>
      </body>
    </>
  )
}

export default App
