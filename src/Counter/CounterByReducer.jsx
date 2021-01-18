import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case `INCREMENT`:
      return { value: state.value + 1 };
    case `DECREMENT`:
      return { value: state.value - 1 };
    default:
      break;
  }
  return state;
}

const stateInitializer = (initState) => {
  return {
    value: initState,
  };
};

function CounterByReducer() {
  const [state, dispatch] = useReducer(reducer, 0, stateInitializer);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: `INCREMENT` });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: `DECREMENT` });
        }}
      >
        -1
      </button>
    </div>
  );
}

export default CounterByReducer;
