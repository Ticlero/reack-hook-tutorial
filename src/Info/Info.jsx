// 'useEffect'는 componentDidMount와 componentDidUpdate 기능을 합친 형태로 봐도 무방
// 'useEffect'는 랜더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 기능
import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log("랜더링 되었습니다.");
    console.log(name, nickname);

    //useEffect의 cleaner 기능 영역, 업데이트가 되기 직전 또는 컴포넌트가 언마운트 될 때 수행 됨
    return () => {
      console.log(`cleanup!, componentDidMount와 componentDidUpdate`);
      console.log(name);
    };
  }, [name, nickname]);
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname}></input>
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
};

export default Info;
