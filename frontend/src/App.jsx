import { Route, Routes } from "react-router-dom";
import SelectInterests from "./pages/SelectInterests.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Landing Page</div>} />
      <Route path="/interests" element={<SelectInterests />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App
