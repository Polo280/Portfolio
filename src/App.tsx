// import { useState } from 'react'
import {Routes, Route } from "react-router-dom";
import "./index.css"

// Pages
import HomePage from './pages/Homepage/HomePage'
import ProjectsPage from "./pages/Project Pages/ProjectsPage";
import Elyos from './pages/Project Pages/Elyos';
import Horus from './pages/Project Pages/Horus';
import Telemetry from './pages/Project Pages/Telemetry';
import ScorchFinder from "./pages/Project Pages/ScorchFinder";
import Intel from "./pages/Project Pages/Intel";

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intelcorp" element={<Intel />} />
        <Route path="/elyos" element={<Elyos />} />
        <Route path="/horus" element={<Horus />} />
        <Route path="/telemetry" element={<Telemetry />}/>
        <Route path="/scorchfind" element={<ScorchFinder />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
  )
}

export default App
