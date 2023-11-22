import React from 'react';
import Menu from "./AdminMenu.js";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./AdminDashboard.js";
import Courses from "../Courses.js";
import Students from '../Student/Students.js';
import Users from "../Users.js";

function AdminView() {

  return (
    <div className="app-container bg-background">
      <Menu />
      <Routes>
        <Route path='*' element={<Dashboard />}></Route>
        <Route path='/Courses/' element={<Courses />}></Route>
        <Route path='/Students/' element={<Students />}></Route>
        <Route path='/Users/' element={<Users />}></Route>
      </Routes>
      <footer className="pt-4 mt-4 text-body-secondary border-top border-3 border-dark text-dark">
        <b>CopyRight © 2023 - Escuela de idiomas UDB</b>
      </footer>
    </div>
  )
}

export default AdminView
