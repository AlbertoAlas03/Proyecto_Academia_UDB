import React from 'react'
import AdminView from "../components/Admin/AdminView.js";
import TeacherView from "../components/Teacher/TeacherView.js";
import ManagerView from "../components/Manager/ManagerView.js";
import "../css/style.css";

function Home({ user }) {
  return (
    <>
      {user.rol === "admin" ? <AdminView /> : user.rol === "profesor" ? <TeacherView /> : <ManagerView />}
    </>
  )
}

export default Home
