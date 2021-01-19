import React, { useCallback, useMemo, useRef, useState } from "react";
const getAverage = (numbers) => {
  console.log("계산중");
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur, i) => {
    return acc + cur;
  });
  return sum / numbers.length;
};

function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   };

  //   const onInsert = (e) => {
  //     const nextList = list.concat(parseInt(number) || 0);
  //     setList(nextList);
  //     setNumber("");
  //   };

  // 'useCallback' Hook은 'useMemo'와 상당히 비슷한 함수
  // 컴포넌트가 리렌더링 될 때마다 선언된 함수들이 새로 다시 만들어집니다.
  // 쓸데없이 새로 만들어지는 비용을 줄이기 위해 처음 렌더링 되었을 때 생성된 함수를 재사용 하기 위해 사용된다.
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number) || 0);
    setList(nextList);
    setNumber("");
    console.log(inputEle);
    inputEle.current.focus();
  }, [number, list]);
  // 'useMemo' Hook은 특정 값이 변경 되었을 때만 연산을 수행한다.
  // 원하는 값이 변경되지 않았다면 이전 값을 그대로 사용하는 방식
  const avg = useMemo(() => getAverage(list), [list]);
  const inputEle = useRef(null);
  return (
    <div>
      <input type="number" value={number} onChange={onChange} ref={inputEle} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((val, index) => {
          return (
            <li
              key={`${index}-${val}`}
              onDoubleClick={() => {
                const nextList = list.filter((item, idx) => {
                  return `${index}-${val}` !== `${idx}-${item}`;
                });
                console.log(nextList);
                setList(nextList);
              }}
            >
              {val}
            </li>
          );
        })}
      </ul>
      <div>
        <b>평균 값: </b>
        {/* {getAverage(list) === 0 ? `계산중...` : getAverage(list)} */}
        {avg === 0 ? `계산중...` : avg}
      </div>
    </div>
  );
}

export default Average;
