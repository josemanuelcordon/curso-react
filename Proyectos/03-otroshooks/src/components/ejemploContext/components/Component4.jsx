import { useContext } from "react";
import AppCont from "../context/AppCont";

const Component4 = () => {
  const { appState, setAppState } = useContext(AppCont);
  return (
    <>
      <div>Component4</div>
      <p>Count: {appState.count}</p>
    </>
  );
};

export default Component4;
