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
  // console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []); // 처음만 실행한다.

  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]); // keyword가 변할때만 실행한다.

  useEffect(() => {
    console.log("I run when 'counter' changes..");
  }, [counter]); // counter가 변할때만 실행한다.

  useEffect(() => {
    console.log("I run when keyword & counter changes!!");
  }, [keyword, counter]);

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
