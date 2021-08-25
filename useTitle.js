// import "./styles.css";
// import ReactDOM from "react-dom";
// import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
    const [title, settitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        //document.querySelector "title"와 같은 요소(텍스트?)를 갖는 첫번째를 선택 그러므로 <title>제목</title>를 선택하고 
        htmlTitle.innerText = title;
        //innerText title태그 안에 '제목'을 읽어 온다. <title>title</title> 로 바꿔준다. 
    };
    useEffect(updateTitle, [title]);
    return settitle;
};
// const App = () => {
//   const titleUpdater = useTitle("Loding...");
//   setTimeout(() => titleUpdater("Home"), 5000); 
//     //useTitle 리턴값이 settitle(useState의 변경해주는 값)이므로 titleUpdater("Home")표현으로 사용할수있음.
//   return (
//     <div className="App">
//       <h2>HEllow</h2>
//     </div>
//   );
// };
// export default App;
