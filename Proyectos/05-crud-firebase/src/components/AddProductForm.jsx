import { useState } from "react";
import { addProduct } from "../firebase/productosApi";
import Swal from "sweetalert2";

const AddProductForm = ({ update }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [urlImg, setUrlImg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const idProducto = await addProduct({
        name,
        stock,
        description,
        img: urlImg,
      });
      console.log("hola");
      console.log(idProducto);
      Swal.fire({
        icon: "success",
        title: "Inserción Correcta",
        text: "Datos insertados correctamente en la Colección",
      });

      clearForm();
      update({});
    } catch (err) {
      console.log(err);
    }
  }

  function clearForm() {
    setName("");
    setStock(0);
    setDescription("");
    setUrlImg("");
  }

  return (
    <div className="w-1/2 mx-10 mt-8">
      <form
        className="bg-white shadow-md rounded p-8 mb-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold my-4">Añadir nuevo producto</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="stock"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Stock
          </label>
          <input
            type="text"
            value={stock}
            id="stock"
            onChange={(e) => setStock(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="stock"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            value={description}
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="img"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Imagen
          </label>
          <input
            type="text"
            value={urlImg}
            id="img"
            onChange={(e) => setUrlImg(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue:700 text-white font-bold py-2 px-4 rounded focus:outline-none
            hover:shadow hover:shadow-slate-700"
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
