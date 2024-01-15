const Basico = () => {
  // VARIABLES
  const nombre = "Jose Manuel";
  const miArray = ["Manzana", "Naranja", "Fresa"];
  const miObjeto = { nombre: "Juan", edad: 25 };
  const elementoJSX = (
    <div>
      <p>Elemento de JSX</p>
      <p>React Mola</p>
    </div>
  );
  // HOOKS
  // FUNCIONES
  const suma = (a, b) => a + b;
  return (
    <>
      <div>Nombre: {nombre}</div>
      <p>Suma de 5 y 7 = {suma(5, 7)}</p>

      <ul>
        {miArray.map((fruta) => (
          <li key={fruta}>Fruta {fruta}</li>
        ))}
      </ul>

      <div>
        <p>Nombre de persona: {miObjeto.nombre}</p>
        <p>Edad de persona: {miObjeto.edad}</p>
      </div>

      {elementoJSX}
    </>
  );
};

export default Basico;
