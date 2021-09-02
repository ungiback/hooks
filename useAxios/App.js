import "./styles.css";
import ReactDOM from "react-dom";
import { useEffect, useState, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  console.log(
    `Loading :${loading}\nError :${error}\nData :${JSON.stringify(data)}`
  );
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading..."}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
export default App;
