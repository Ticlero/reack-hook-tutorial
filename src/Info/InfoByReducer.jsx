import React, { useReducer } from "react";

const infoStateInitializer = (initState) => {
  return {
    name: "",
    nickname: "",
  };
};

const reducer = (state, action) => {
  console.log(state);
  return {
    ...state,
    [action.name]: action.value,
  };
};

function InfoByReducer() {
  const [state, dispatch] = useReducer(reducer, "", infoStateInitializer);
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} name="name" onChange={onChange} />
        <input
          type="text"
          value={nickname}
          name="nickname"
          onChange={onChange}
        ></input>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default InfoByReducer;
