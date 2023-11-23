import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./Components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:username" element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}


export default App;
