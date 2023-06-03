import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard"
import Data from "./components/Data";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Login />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
