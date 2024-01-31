import { useState, useRef } from "react";

const EjemploUseRef3 = () => {
    const [contador, setContador] = useState(0);
    const btnRef = useRef();

    function handleClick() {
        setContador((prev) => prev + 1);
        btnRef.current.style.backgroundColor = "red";
    }
  return (
    <div>
        <p>Contador: {contador}</p>
        <button ref={btnRef} onClick={handleClick}>Pulsar{" "}</button>
    </div>
  )
}

export default EjemploUseRef3