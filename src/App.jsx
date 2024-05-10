import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
