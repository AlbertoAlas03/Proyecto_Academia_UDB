import React, { useState } from 'react'
import firebaseapp from "../firebase/credentials.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import '../css/style.css';
import facebook from "../img/logo.png";
import twitter from "../img/twitter.png";
import insta from "../img/instagram.png";
import logo_academia from "../img/academia.jpg";

const auth = getAuth(firebaseapp);
const fireStore = getFirestore(firebaseapp);
//Cambiar credenciales de base de datos nueva
function Login() {

  const [isRegister, setIsRegister] = useState(false);
  const [Error, setError] = useState(null);

  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value; //recopilamos informacion de los input
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    try {
      if (isRegister) { //si no esta registrado
        await RegisterUser(email, password, rol);
      } else { //esta registrado y quiere iniciar sesion
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError("Error, usted no esta registrado en el sistema. Por favor, comuníquese con la universidad para resolver este problema.");
    }
  }

  async function RegisterUser(email, password, rol) {
    const infoUser = await createUserWithEmailAndPassword(auth, email, password).then((userFirebase) => {
      return userFirebase;
    });
    const docRef = doc(fireStore, `Users/${infoUser.user.uid}`); //para ingresar al documento(escribiendo en la BD) que queremos 
    setDoc(docRef, { correo: email, rol: rol }); //esto estamos guardando en el doc especifico que queremos
  }

  return (
    <>
      <div className="bg-img">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-sm-11 push-sm-1">
            <div className="card cardFixed">
              <div className="card-block">
                <h2 className="card-header text-center">
                  <img src={logo_academia} className="imgFixed" />
                </h2>
                <div className="card-body">
                  <div className="loginerrors mt-3">
                    <div className="alert alert-success" role="alert">
                      Si ya estas registrado en el sistema puedes ingresar con el correo electrónico y contraseña que se te ah proporcionado, si no posees nada de esto, solicita a la universidad que hagan el proceso de registro.
                      <br /><b>Si tienes problemas de acceso verifica que tu contraseña ingresada sea la que se te ah proporcionado junto con el correo electrónico</b>.
                    </div>
                  </div>
                  <div className="loginerrors mt-3">
                    {Error && <div className="alert alert-danger" role="alert">{Error}</div>}
                  </div>
                  <div className="row justify-content-md-center">
                    <div className="col-md-5">
                      <form className="mt-3" onSubmit={submitHandler}>
                        <div className="form-group">
                          <label className="sr-only">
                            Correo electronico
                          </label>
                          <input type='email' id="email" className="form-control" aria-describedby="emailHelp" placeholder="Ingresa tu correo..." required />
                        </div>
                        <div className="form-group">
                          <label className="sr-only fix">
                            Contraseña
                          </label>
                          <input type='password' id="password" className="form-control" placeholder="Ingresa tu contraseña..." required />
                        </div>
                        <div className="form-group">
                          <label className="sr-only">
                            Rol:
                            <select id="rol">
                              <option value="admin">Administrador</option>
                              <option value="user">Usuario</option>
                            </select>
                          </label>
                        </div>
                       <input type="submit" value={isRegister ? "Registrate" : "Acceder"} className="btn btn-success btn-block mt-3"></input> 
                      </form>
                    </div>
                    <div className="col-md-5">
                      <div className="mt-3">
                        <p>
                          <a href="#">¿La contraseña no funciona? (Comuniquese con algún administrador)</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-body-secondary text-center text-small">
                  <p className="mb-1"><b>INFORMACIÓN</b></p>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://www.udb.edu.sv/udb/" target="_blank">Página Oficial UDB</a></li>
                    <li className="list-inline-item"><a href="https://admacad.udb.edu.sv/portalweb" target="_blank">Portal Web</a></li>
                    <li className="list-inline-item"><a href="https://www.udb.edu.sv/udb/pagina/escidiomas" target="_blank">Escuela de Idiomas</a></li>
                  </ul>
                  <p className="mb-1"><b>CONTACTOS</b></p>
                  <ul className="list-inline">
                    <li className="list-inline-item"><i className="bi bi-telephone-fill"></i><b> Teléfono: +503 2251-8219</b></li>
                    <li className="fix"><i className="bi bi-envelope-fill"></i><b> E-mail: idiomas@udb.edu.sv</b></li>
                  </ul>
                  <p className="mb-1"><b>NUESTRAS REDES SOCIALES</b></p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/escueladeidiomas.udb" target="_blank">
                        <img src={facebook} alt="Facebook" width="30" height="30" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/UDBelsalvador?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                        <img src={twitter} alt="Twitter" width="30" height="30" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/idiomasudb/?hl=es" target="_blank">
                        <img src={insta} alt="Twitter" width="30" height="30" />
                      </a>
                    </li>
                  </ul>
                  <p className="mb-1">CopyRight © 2023 - Escuela de idiomas UDB</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
