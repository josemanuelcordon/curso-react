import { useState } from "react";

const initialState = {
  nombre: "",
  email: "",
  password: "",
};
//TODO Hacer Componente Buscador -- initalState = ["manzana"...]
const RegistrarFormulario = () => {
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Los datos del formulario se han enviado");
  }

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Registrar Usuario</button>
    </form>
  );
};

export default RegistrarFormulario;
