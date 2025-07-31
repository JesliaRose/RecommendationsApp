import { Route, Routes } from "react-router-dom";
import SelectInterests from "./pages/SelectInterests.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import Login from './pages/Login';


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<div>Landing Page</div>} />
      <Route path="/interests" element={<SelectInterests />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default App
