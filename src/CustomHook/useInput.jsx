import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function useInput(initForm) {
  const [state, dispatch] = useReducer(reducer, initForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
