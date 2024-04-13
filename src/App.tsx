import { useState } from "react";
import "./App.css";
import RegistrationComponent from "./components/registration/RegistrationComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegistrationComponent />
    </>
  );
}

export default App;
