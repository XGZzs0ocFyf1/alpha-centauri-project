import "./App.css";
import NewRegisterComponent from "./components/registration/NewRegisterComponent";
import RegistrationComponent from "./components/registration/RegistrationComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<RegistrationComponent />} />
        <Route path="/registration" element={<NewRegisterComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
