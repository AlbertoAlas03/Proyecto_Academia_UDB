import React from 'react';
import "../css/style.css";
import student from "../img/student.png";
import book from "../img/book.png";
import user from "../img/user.png";

function AdminDashboard() {
    return (
        <div className="container py-4 fixAdmin">
            <header className="pb-3 mb-4 border-bottom">
                <span className="fs-4"><i className="bi bi-speedometer2"></i> Dashboard</span>
            </header>
            <div className="card p-5 mb-4 bg-body-tertiary rounded-3 shadow-sm border-primary">
                <div className="container-fluid py-5 text-center">
                    <h1 className="display-5 fw-bold">Cantidad de estudiantes activos</h1>
                    <img src={student} className="icon-fixed" />
                </div>
                <p className="text-center fw-bold font-size">300 estudiantes</p>
            </div>
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-body-tertiary rounded-3 shadow-sm border-primary card text-center">
                        <h1 className="display-5 fw-bold">Cursos activos</h1>
                        <img src={book} className="icon-fixed  mx-auto d-block" />
                        <p className="font-courses fw-bold">20 cursos</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-body-tertiary border rounded-3 shadow-sm border-primary card text-center">
                        <h1 className="display-5 fw-bold">Usuarios activos</h1>
                        <img src={user} className="icon-fixed  mx-auto d-block" />
                        <p className="font-courses fw-bold">5 usuarios</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
