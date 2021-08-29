//탭을 닫을때 실행되는 함수
// import "./styles.css";
// import ReactDOM from "react-dom";
// import { useEffect, useState, useRef } from "react";

export const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
};

// const App = () => {
//   const begForLife = () => console.log("Pls dont leave.");
//   useBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// };
// export default App;
