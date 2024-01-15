import { useState } from "react";

const Nieto = ({ counter, handleIncrement }) => {
  return (
    <div className="bg-gray-600 p-8 rounded-md text-center">
      <button
        className="bg-white-500 px-6 py-3 rounded-md hover:bg-white-800"
        onClick={handleIncrement}
      >
        Incrementar
      </button>
      <p className="text-2xl font-bold mb-6">Contador Nieto: {counter}</p>
    </div>
  );
};

const Hijo = ({ counter, handleIncrement }) => {
  return (
    <div className="bg-gray-500 p-8 rounded-md text-center">
      <button
        className="bg-sky-500 text-white px-6 py-3 rounded-md hover:bg-sky-800"
        onClick={handleIncrement}
      >
        Incrementar
      </button>
      <p className="text-2xl font-bold mb-6">Contador Hijo: {counter}</p>
      <Nieto />
    </div>
  );
};

const PadreHijoNieto = () => {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter((previous) => previous + 1);
  }

  return (
    <div className="bg-gray-400 p-8 rounded-md text-center">
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-800"
        onClick={handleIncrement}
      >
        Incrementar
      </button>
      <p className="text-2xl font-bold mb-6">Contador Padre: {counter}</p>
      <Hijo counter={counter} handleIncrement={handleIncrement}></Hijo>
    </div>
  );
};

export default PadreHijoNieto;
