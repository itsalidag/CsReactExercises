import React, { useState } from "react";
import "../styles.css";

export default function Counters() {
  const [val, updateVal] = useState(0);
  function valup() {
    return updateVal(val + 1);
  }
  function valDown() {
    return updateVal(val - 1);
  }

  return (
    <div>
      <h1 className="ali">{val}</h1>
      <button className="button" onClick={valup}>
        +
      </button>
      <button className="button" onClick={valDown}>
        -
      </button>
    </div>
  );
}
