import Component1 from "./components/Component1";
import Component4 from "./components/Component4";
import AppProvider from "./context/AppProvider";

const AppContext = () => {
  return (
    <>
      <div>AppContext</div>
      <AppProvider>
        <Component1 />
        <Component4 />
      </AppProvider>
    </>
  );
};

export default AppContext;
