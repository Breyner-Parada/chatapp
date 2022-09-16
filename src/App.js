import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Chat, Join } from "./Components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
