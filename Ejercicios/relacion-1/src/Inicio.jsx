import Ejercicio1 from "./components/Ejercicio1"
import Ejercicio2 from "./components/Ejercicio2"
import Ejercicio3 from "./components/Ejercicio3"
import Ejercicio4 from "./components/Ejercicio4"
import Ejercicio5 from "./components/Ejercicio5"



const Inicio = () => {
  return (
    <>
        {/* Ejercicio 1 */}
        <Ejercicio1 isLogged={true} />
        <Ejercicio1 isLogged={false} />

        {/* Ejercicio 2 */}
        <Ejercicio2 />

        {/* Ejercicio 3 */}
        <Ejercicio3/>

        {/* Ejercicio 4 */}
        <Ejercicio4 />

        {/* Ejercicio 5 */}
        <Ejercicio5 />
    </>
  )
}

export default Inicio