import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import CounterByReducer from "./Counter/CounterByReducer";
import Info from "./Info/Info";
import InfoByReducer from "./Info/InfoByReducer";

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = (e) => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div>
      <hr></hr>
      <h3>Counter1</h3>
      <Counter></Counter>
      <hr></hr>
      <h3>Info</h3>
      <button onClick={onClick}>Visible</button>
      {visible && <Info></Info>}
      <hr></hr>
      <h3>Counter2</h3>
      <CounterByReducer></CounterByReducer>
      <hr></hr>
      <h3>Info2</h3>
      <InfoByReducer></InfoByReducer>
    </div>
  );
}

export default App;
