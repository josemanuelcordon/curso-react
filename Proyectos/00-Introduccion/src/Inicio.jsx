import "./Inicio.css";
import ComponentesProps from "./components/props/ComponentesProps.jsx";
import PadreHijoNieto from "./components/props/PadreHijoNieto.jsx";
import Buscador from "./components/useState/Buscador.jsx";
import Contador from "./components/useState/Contador.jsx";
import RegistrarFormulario from "./components/useState/RegistrarFormulario.jsx";
import TodoListBasicTailWindCss from "./components/useState/TodoListBasicTailWindCss.jsx";
import UseEffectBasic from "./components/useEffect/UseEffectBasic.jsx";
import ResizeListener from "./components/useEffect/ResizeListener.jsx";
import GitHubUserCard from "./components/useEffect/GitHubUserCard/GitHubUserCard.jsx";

const Inicio = () => {
  return (
    <>
      {/*<Contador /> */}
      {/* <RegistrarFormulario /> */}
      {/* <Buscador /> */}
      {/* <TodoListBasicTailWindCss /> */}
      {/* <ComponentesProps /> */}
      {/* <PadreHijoNieto /> */}
      {/* <UseEffectBasic /> */}
      {/* <ResizeListener /> */}
      <GitHubUserCard />
    </>
  );
};

export default Inicio;
