import Start from "./pages/Start";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}

