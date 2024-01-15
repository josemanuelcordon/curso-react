import { useEffect, useState } from "react";

const UseEffectBasic = () => {
  console.log("hola");

  const [counter, setCounter] = useState(0);

  //*Primer useEffect, se ejecuta cada vez que se renderiza el componente
  // useEffect(() => {
  //   console.log("hola desde el useEffect");
  // });

  //* Segundo, se ejecuta solo la primera vez que se renderiza el componente
  // useEffect(() => {
  //   console.log("hola desde el useEffect");
  // }, []);

  //* Tercera, se ejecuta cada vez que cambia la dependecia (counter)
  // useEffect(() => {
  //   console.log("hola desde el useEffect");
  // }, [counter]);

  //* Cuarta,
  useEffect(() => {
    console.log("adsasdasdasdasd");

    return () => {};
  });
  // FUNCIONES
  const handleIncrement = () => {
    setCounter((previousCounter) => ++previousCounter);
  };

  const handleDecrement = () => {
    setCounter((previousCounter) => --previousCounter);
  };
  return (
    <>
      <h1>CONTADOR</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </>
  );
};

export default UseEffectBasic;
