import { useEffect, useState } from "react";

const stateInitial = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const ResizeListener = () => {
  const [windowSize, setWindowSize] = useState(stateInitial);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", () => handleResize());

    return () => {
      window.removeEventListener("resize", () => handleResize());
    };
  });

  return (
    <div>
      <p>
        Width: {windowSize.width}
        <br />
        Height: {windowSize.height}
      </p>
    </div>
  );
};

export default ResizeListener;
