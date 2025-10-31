import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
