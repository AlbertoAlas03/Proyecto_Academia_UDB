import React from 'react';
import Menu from "./AdminMenu.js";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./AdminDashboard.js";
import Courses from "./Courses.js";
import Students from './Students.js';
import Managers from './Managers.js';
import Teachers from './Teachers.js';
import Admins from './Admins.js';

function AdminView() {

  return (
    <div className="app-container bg-background">
      <Menu />
      <Routes>
        <Route path='*' element={<Dashboard />}></Route>
        <Route path='/Courses' element={<Courses />}></Route>
        <Route path='/Students' element={<Students />}></Route>
        <Route path='/Managers' element={<Managers />}></Route>
        <Route path='/Teachers' element={<Teachers />}></Route>
        <Route path="/Admins" element={<Admins />}></Route>
      </Routes>
      <footer className="pt-4 mt-4 text-body-secondary border-top border-3 border-dark text-dark">
       <b>CopyRight © 2023 - Escuela de idiomas UDB</b>
      </footer>
    </div>
  )
}

export default AdminView
