const elementsList = [
  { id: 1, name: 'Jose' },
  { id: 2, name: 'Juan' },
  { id: 3, name: 'Manolo' },
];

const Ejercicio2 = () => {
  return (
    <>
      {elementsList.map((element) => (
        <li key={element.id}>
          <p>
            <strong>id: {element.id}</strong>
          </p>
          <p>
            <strong>Nombre: {element.name}</strong>
          </p>
        </li>
      ))}
    </>
  );
};

export default Ejercicio2;