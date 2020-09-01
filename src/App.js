import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormContainer from "./components/FormContainer";
import Message from "./components/Message";
import GetApi from "./components/GetApi";

function App() {
  return (
    <div>
      <FormContainer />
      <GetApi />
    </div>
  );
}

export default App;
