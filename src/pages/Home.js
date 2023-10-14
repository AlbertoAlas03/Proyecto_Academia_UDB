import React from 'react'
import AdminView from "../components/AdminView.js";
import TeacherView from "../components/TeacherView.js";
import ManagerView from "../components/ManagerView.js";
import "../css/style.css";

function Home({ user }) {
  return (
    <>
      {user.rol === "admin" ? <AdminView /> : user.rol === "profesor" ? <TeacherView /> : <ManagerView />}
    </>
  )
}

export default Home
