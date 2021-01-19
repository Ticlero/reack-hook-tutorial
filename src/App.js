import React, { useState } from "react";
import "./App.css";
import Average from "./Average/Average";
import Counter from "./Counter/Counter";
import CounterByReducer from "./Counter/CounterByReducer";
import CustomHookInfo from "./CustomHook/CustomHookInfo";
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
      {/* <hr></hr>
      <h3>Counter1</h3>
      <Counter></Counter>
      <hr></hr>
      <h3>Info</h3>
      <button onClick={onClick}>Visible</button>
      {visible && <Info></Info>}
      <hr></hr>
      <h3>CounterByReducer</h3>
      <CounterByReducer></CounterByReducer>
      <hr></hr>
      <h3>InfoByReducer</h3>
      <InfoByReducer></InfoByReducer>
      <hr></hr> */}
      <h3>Average</h3>
      <Average></Average>
      <hr></hr>
      <CustomHookInfo></CustomHookInfo>
    </div>
  );
}

export default App;
