import { useState } from "react";

const initialState = ["manzana", "platano", "fresa", "arandano"];

//TODO no me convence el uso de useState aqui para el formulario, preguntar a Isaias
const Buscador = () => {
  const [searchForm, setSearchForm] = useState("");
  const [filteredItems, setFilteredItems] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hola");
  }

  function handleInputChange(event) {
    const searchString = event.target.value;
    setSearchForm(searchString);
    searchFruits(searchString);
  }

  function searchFruits(searchString) {
    setFilteredItems(
      initialState.filter((fruta) => fruta.includes(searchString))
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fruta</label>
          <input
            type="text"
            name="fruta"
            value={searchForm}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <ul>
        {filteredItems.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};

export default Buscador;
