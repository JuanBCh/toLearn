import "./App.sass";
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Figth from "./Components/Figth/Figth";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main score={score} />} />
        <Route path="/figth" element={<Figth score={score} />} />
      </Routes>
    </div>
  );
}

export default App;
