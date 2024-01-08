import { useRef, useState } from "react";

const Contador = () => {
  // VARIABLES
  const inputRef = useRef(null);
  // HOOKS
  const [counter, setCounter] = useState(0);
  // FUNCIONES
  const handleIncrement = (valor) => {
    setCounter((previousCounter) => previousCounter + valor);
  };

  const handleDecrement = () => {
    setCounter((previousCounter) => --previousCounter);
  };
  return (
    <>
      <h1>CONTADOR</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrement(inputRef.current.value)}>
        Incrementar
      </button>
      <button onClick={handleDecrement}>Decrementar</button>
      <input ref={inputRef} type="number" placeholder="Incrementar"></input>
    </>
  );
};

export default Contador;
