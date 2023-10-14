import React from 'react';
import Menu from "./AdminMenu.js";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./AdminDashboard.js";
import Courses from "./CoursesView.js";
function AdminView() {

  return (
    <>
      <Menu />  
      <Routes>
        <Route path='*' element={<Dashboard />}></Route>
        <Route path='/CoursesView' element={<Courses />}></Route>
      </Routes>
      <footer className="pt-3 mt-4 text-body-secondary border-top">
        CopyRight © 2023 - Escuela de idiomas UDB
      </footer>
    </>
  )
}

export default AdminView
