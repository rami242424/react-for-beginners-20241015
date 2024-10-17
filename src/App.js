import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");

  useEffect(() => {
    console.log("call the api");
  }, []); // 처음 한번만 실행한다.

  useEffect(() => {
    if (keyword !== "") {
      // 빈값이 아닐때만 keyword 검색하자
      console.log("서치중...", keyword);
    }
  }, [keyword]); // keyword가 변할때만 실행한다.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
