import "./styles.css";
import ReactDOM from "react-dom";
import { useEffect, useState, useRef } from "react";

const useNotification = (title, option) => {
    if (!("Notification" in window)) {
        //Notification API
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, option);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, option);
        }
    };
    return fireNotif;
};
const App = () => {
    const triggerNotif = useNotification("i can do it!");
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
};
export default App;
