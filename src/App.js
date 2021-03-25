import React from "react";
import "./App.css";
import FruitList from "./components/FruitList";
import Form from "./components/Form";
import logo from "./assets/screenshot-logo.png";

function App() {
  return (
    <>
      <img src={logo} alt="logo" className="logo-img" />
      <FruitList></FruitList>
      <Form></Form>
    </>
  );
}

export default App;
