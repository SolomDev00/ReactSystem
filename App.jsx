import React from "react";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import SignUp from "./Register";
import Header from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}
