import React, { useEffect, useState } from 'react';
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import GetAllCourses from "../functions/GetAllCourses";
import ModalAddCourses from './Modals/ModalAddCourses';
import deleteCourse from '../functions/DeleteCourse';
import ModalEditCourses from './Modals/ModalEditCourse';
import SearchData from '../functions/SearchData';

function Courses() {

  const [course, setCourses] = useState([]);
  const [ModalAdd, setModalAdd] = useState(false);
  const [ModalEdit, setModalEdit] = useState(false);
  const [CourseEdit, SetCourseEdit] = useState({});

  async function SearchCourseHandler(e) { //funcion para buscar los cursos
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const NewDoc = await SearchData(busqueda);
    setCourses(NewDoc);
  }

  function UpdateStateCourse() { //funcion para actualizar el estado, recibimos los cursos y los guardamos en el UseState
    GetAllCourses().then((course) => {
      setCourses(course);
    });
  }

  function AddCourse() {
    setModalAdd(true);
  }

  useEffect(() => { //iniciado desde el inicio
    UpdateStateCourse();
  }, []);

  return (
    <Container fluid style={{ marginTop: 80 }}>
      <ModalAddCourses ModalAdd={ModalAdd} setModalAdd={setModalAdd} UpdateStateCourse={UpdateStateCourse} />
      {CourseEdit && (<ModalEditCourses  //si existe que lo muestre
        ModalEdit={ModalEdit}
        setModalEdit={setModalEdit}
        UpdateStateCourse={UpdateStateCourse}
        CourseEdit={CourseEdit}
        SetCourseEdit={SetCourseEdit}
      />)}
      <Form onSubmit={SearchCourseHandler}>
        <Stack direction="horizontal" className="justify-content-center">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar un curso..." />
          </Form.Group>
          <Button variant="success" type="submit" style={{ marginRight: 10 }}>
            <i className="bi bi-search"></i> Buscar
          </Button>
          <Button variant="warning" onClick={() => {
            const input = document.getElementById("busqueda");
            input.value = "";
            UpdateStateCourse();
          }}><i className="bi bi-arrow-clockwise"></i> Reset</Button>
        </Stack>
      </Form>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="card p-5 mb-4 bg-body-tertiary rounded-3 shadow-sm border-primary" style={{ overflowX: 'auto' }}>
          <header className="pb-3 mb-4 border-bottom border-3 border-dark text-dark">
            <span className="fs-4"><i className="bi bi-book"></i> Cursos activos</span>
          </header>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tipo</th>
                <th>Programa</th>
                <th>Horario</th>
                <th>Id</th>
                <th>Inscritos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {course && course.map((curso, index) => ( //mapeo de los cursos, aca traemos todos los cursos que estan en la base de datos
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{curso.Titulo}</td>
                  <td>{curso.Tipo}</td>
                  <td>{curso.Horario}</td>
                  <td>{curso.Id}</td>
                  <td>{curso.Inscritos}</td>
                  <td>
                    <Button variant="dark" style={{ marginRight: 5 }} onClick={() => {
                      SetCourseEdit(curso);
                      setModalEdit(true)
                    }}><i className="bi bi-pencil-square"></i> Editar</Button>
                    <Button variant="danger" onClick={() => {
                      deleteCourse(curso).then(confirm => {
                        UpdateStateCourse();
                      });
                    }}><i className="bi bi-trash"></i> Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            <Button onClick={AddCourse}><i className="bi bi-plus-lg"></i> Registrar un nuevo curso</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Courses;
