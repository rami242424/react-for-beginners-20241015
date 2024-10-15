import { useState, useEffect } from "react";

function Hello() {
  // 방법1
  function byeFn(){
    console.log("Bye :(");
  }
  function HiFn(){
    console.log("Hi :)");
    return byeFn;
  }
  useEffect(HiFn, []);

  // 방법2
  // useEffect(() => {
  //   console.log("Hi :)");
  //   return () => console.log("Bye :(");
  // }, []);
  
  // 방법3
  // useEffect(function(){
  //   console.log("Hi :)");
  //   return function() {
  //     console.log("Bye :(");
  //   }
  // }, []);
  
  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      { showing? <Hello/> : null}
      <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
    </div>

  )
}

export default App;
