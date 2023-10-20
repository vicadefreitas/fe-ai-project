import React from "react";
import "./App.css";
import WebcamComponent from "../components/WebcamComponent/WebcamCompoent";
import { TextareaAutosize } from "@mui/material";


const App = () => {
  return (
    <>
      <div className="App">
        <WebcamComponent />
      </div>
      <TextareaAutosize className="TextArea" minRows={20}/>
    </>
  );
}

export default App;
