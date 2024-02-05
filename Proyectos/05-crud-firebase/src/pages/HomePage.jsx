import AddProductForm from "../components/AddProductForm";
import ShowProductTable from "../components/ShowProductTable";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-8">CRUD EN REACT - FIREBASE</h1>
      <AddProductForm />
      <ShowProductTable />
    </div>
  );
};

export default HomePage;
