import { useRef, useState } from "react";

const EjemploUseRef2 = () => {
    const [nombre, setNombre] = useState("");
    const ref = useRef();

    function handleFocus() {
        if(ref.current) {
            ref.current.focus();
        }
    }
  return (
    <div>
        <label htmlFor="">
            <input type="text"
            value={nombre}
            ref={ref}
            onChange={(e) => setNombre(e.target.value)}/>
        </label>
        <button onClick={handleFocus}>Change Focus</button>
    </div>
  )
}

export default EjemploUseRef2