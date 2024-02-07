import { useState } from "react";
import AddProductForm from "../components/AddProductForm";
import ShowProductTable from "../components/ShowProductTable";

const HomePage = () => {
  const [, setUpdate] = useState();

  function setForceUpdate() {
    setUpdate({});
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-8">CRUD EN REACT - FIREBASE</h1>
      <AddProductForm update={setForceUpdate} />
      <ShowProductTable update={setForceUpdate} />
    </div>
  );
};

export default HomePage;
