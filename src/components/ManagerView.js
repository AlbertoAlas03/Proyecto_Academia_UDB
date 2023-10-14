import React from 'react'
import ManagerMenu from './ManagerMenu.js';
import { Route, Routes } from 'react-router-dom';
import Courses from "./Courses.js";
import Students from './Students.js';

function ManagerView() {
  return (
    <div className="app-container bg-background">
      <ManagerMenu />
      <Routes>
        <Route path="*" element={<Courses />}></Route>
        <Route path="/Students" element={<Students />}></Route>
      </Routes>
      <footer className="pt-4 mt-4 text-body-secondary border-top border-3 border-dark text-dark">
        <b>CopyRight © 2023 - Escuela de idiomas UDB</b>
      </footer>
    </div>
  )
}

export default ManagerView