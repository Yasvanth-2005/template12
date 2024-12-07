import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  const count = 20;

  return (
    <>
      <div className={`w-full ${show ? "" : "hidden"}`}>okok</div>
    </>
  );
};

export default App;
