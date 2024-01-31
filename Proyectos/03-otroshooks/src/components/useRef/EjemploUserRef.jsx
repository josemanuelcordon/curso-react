import { useEffect, useRef } from "react";

const EjemploUserRef = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
  return (
    <div>
        <label htmlFor="">
            Nombre:
            <input type="text" ref={inputRef}/>
        </label>
    </div>
  )
}

export default EjemploUserRef