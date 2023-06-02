import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
