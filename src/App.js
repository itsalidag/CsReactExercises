import "./styles.css";
import Counters from "./components/counter.jsx";
import { useState } from "react";

export default function App() {
  setInterval(updateMe, 1000);
  let now = new Date().toLocaleTimeString();
  const [time, updateTime] = useState(now);
  function updateMe() {
    let newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }

  return (
    <div className="App">
      <h1>Hello Ali its {time}</h1>
      <h2>Increase and Decrease number below.</h2>
      <Counters />
    </div>
  );
}
