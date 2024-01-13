import { useState } from "react";

const Ejercicio3 = () => {
    const [count, setCount] = useState(1)

    const handleClick = (e) => {
        e.preventDefault();
        console.log(`click numero ${count}`)
        setCount((previous) => previous + 1)
    }

    return (
        <button onClick={(e) => handleClick(e)}>Console Log</button>
    )
}

export default Ejercicio3