// import "./styles.css";
// import ReactDOM from "react-dom";
// import { useEffect, useState, useRef } from "react";

export const useClick = (onclick) => {
    if (typeof onclick !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onclick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onclick);
            }
        };
    }, []);
    return element;
};

// const App = () => {
//   const sayHello = () => console.log("say HEllo.");
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };
// export default App;
