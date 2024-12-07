import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  const count = 20;

  return (
    <>
      <div className={`w-full ${show ? "" : "hidden"}`}>
        <h1>{`The Count is ${count}`}</h1>
        <h1>HI</h1>
        <h1>HI</h1>
        <h1>HI</h1>
      </div>
    </>
  );
};

export default App;
