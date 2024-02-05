import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <div className="flex ">Header</div>
      <main className="flex-col flex-l bg-gradient-to-b from-gray-500 to-purple-200 min-h-screen">
        <Outlet />
      </main>
      <div>Footer</div>
    </>
  );
};

export default RootPage;
