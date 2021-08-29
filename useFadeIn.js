// import "./styles.css";
// import ReactDOM from "react-dom";
// import { useEffect, useState, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    // return element
    return { ref: element, style: { opacity: 0 } };
};

// const App = () => {
//     // const el = useFadeIn();
//     const fadeInH1 = useFadeIn(1, 2);
//     const fadeInP = useFadeIn(5, 10);
//     return (
//         <div className="App">
//             <h1 {...fadeInH1}>Hello</h1>
//             <p {...fadeInP}>ldfjldfkdjflfj</p>
//             {/* <h1 ref={el} style={{ opacity: 0 }}>Hello</h1> */}
//         </div>
//     );
// };
// export default App;
