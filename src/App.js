import React from "react";
function App(props) {
  console.log(props);
  return (
    <div className="App">
      value:<span>{props.value}</span>
      <div>
        <button onClick={() => props.onAdd1()}>+1</button>
        <button onClick={() => props.onAdd2()}>+2</button>
        <button onClick={() => props.onAddIfOdd()}>如果是奇数就+1</button>
        <button onClick={() => props.onAddAsync()}>两秒后+1</button>
      </div>
    </div>
  );
}
export default App;
