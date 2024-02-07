import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { deleteProduct, getProducts } from "../firebase/productosApi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowProductTable = ({ update }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(true);

  const fetchProducts = async () => {
    const productData = await getProducts();
    setProducts(productData);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [update]);

  async function handleDelete(e, idProduct) {
    e.preventDefault();
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, borrar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(idProduct);
        update();
        Swal.fire("¡Eliminado!", "El producto ha sido eliminado.", "success");
      }
    });
  }

  return (
    <div className="w-2/3 mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4">Lista de Productos</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">Id</th>
                <th className="py-2 px-4 border-b">Nombre</th>
                <th className="py-2 px-4 border-b">Stock</th>
                <th className="py-2 px-4 border-b">Descripcion</th>
                <th className="py-2 px-4 border-b">Imagen</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 ">{product.id}</td>
                  <td className="py-2 px-4">{product.name}</td>
                  <td className="py-2 px-4">{product.stock}</td>
                  <td className="py-2 px-4">{product.description}</td>
                  <td className="py-2 px-4">
                    <img className="h-10 w-10 object-cover" src={product.img} />
                  </td>
                  <td className="py-2 px-4 flex justify-between">
                    <Link>
                      <button
                        className="bg-red-500 hover:bg-red-800 text-white font-bold py-1 px-2
                      rounded focus:outline-none hover:shadow hover:shadow-slate-500"
                        onClick={(e) => handleDelete(e, product.id)}
                      >
                        Eliminar
                      </button>
                    </Link>
                    <Link>
                      <button
                        className="bg-sky-500 hover:bg-sky-800 text-white font-bold py-1 px-2
                      rounded focus:outline-none hover:shadow hover:shadow-slate-500"
                      >
                        Editar
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductTable;
