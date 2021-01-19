import React from "react";
import useInput from "./useInput";

function CustomHookInfo() {
  const [state, onChange] = useInput({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

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

export default CustomHookInfo;
