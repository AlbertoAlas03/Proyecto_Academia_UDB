import React from 'react';
import TeacherMenu from './TeacherMenu.js';
import { Route, Routes } from 'react-router-dom';
import TeacherCourses from './TeacherCourses.js';
import StudentsList from './StudentsList.js';

function TeacherView() {
  return (
    <div className="app-container bg-background">
      <TeacherMenu />
      <Routes>
        <Route path="*" element={<TeacherCourses />}></Route>
        <Route path="/StudentsList" element={<StudentsList />}></Route>
      </Routes>
      <footer className="pt-4 mt-4 text-body-secondary border-top border-3 border-dark text-dark">
        <b>CopyRight © 2023 - Escuela de idiomas UDB</b>
      </footer>
    </div>
  )
}

export default TeacherView
