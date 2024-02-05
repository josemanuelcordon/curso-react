import { useContext } from "react";
import AppCont from "../context/AppCont";

const Component3 = () => {
  const { appState, setAppState } = useContext(AppCont);
  function handleClick(e) {
    e.preventDefault();
    setAppState({ ...appState, count: appState.count + 1 });
  }

  return <button onClick={handleClick}>Sumar</button>;
};

export default Component3;
