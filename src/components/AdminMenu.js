import React from 'react';
import "../css/style.css";
import firebaseapp from "../firebase/credentials.js";
import { signOut, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(firebaseapp);

function AdminMenu() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Bienvenido/a, Administrador/a</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">¡Eres administrador!</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link"><i className="bi bi-speedometer"></i> Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Courses' className="nav-link"><i className="bi bi-book-fill"></i> Cursos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Students' className="nav-link"><i className="bi bi-person-workspace"></i> Estudiantes</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-person-circle"></i> Usuarios
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><Link to="/Managers" className="dropdown-item"><i className="bi bi-person-lines-fill"></i> Gestores de cursos</Link></li>
                                        <li><Link to="/Teachers" className="dropdown-item"><i className="bi bi-person-video3"></i> Profesores</Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link to="/Admins" className="dropdown-item"><i className="bi bi-person-gear"></i> Administradores</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => signOut(auth)} className="nav-link" href=""><i className="bi bi-box-arrow-left"></i> Cerrar Sesión</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminMenu
