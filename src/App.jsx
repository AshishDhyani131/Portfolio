import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
function App() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <main>
        <About></About>
      </main>
    </>
  );
}

export default App;
