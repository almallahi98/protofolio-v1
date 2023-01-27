import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/home/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
