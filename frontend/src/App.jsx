import { Route, Routes } from "react-router-dom";
import SelectInterests from "./pages/SelectInterests.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Landing Page</div>} />
      <Route path="/interests" element={<SelectInterests />} />
    </Routes>
  );
}

export default App;
