const Ejercicio1 = ({ isLogged }) => {
  return (
    <>
    {isLogged ? <p>Bienvenido</p> : <a>Registrese por favor</a>}
    </>
  )
}

export default Ejercicio1