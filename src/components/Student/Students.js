import React, {useState, useEffect} from 'react';
import { Container, Stack, Button, Form, Table } from "react-bootstrap";
import GetAllStudents from '../../functions/GetAllStudents';
import ModalAddStudents from '../Modals/ModalAddStudents';
import deleteStudent from "../../functions/DeleteStudent";
import ModalEditStudents from "../Modals/ModalEditStudent";
import SearchStudent from "../../functions/SearchStudent";

function Students() {

  const [student, setStudents] = useState([]);
  const [ModalAdd, setModalAdd] = useState(false);
  const [ModalEdit, setModalEdit] = useState(false);
  const [StudentEdit, SetStudentEdit] = useState({});

  async function SearchStudentHandler(e) { //funcion para buscar los cursos
    e.preventDefault();
    const busqueda = e.target.busqueda.value;
    const NewDoc = await SearchStudent(busqueda);
    setStudents(NewDoc);
  }

  function UpdateStateStudent() { //funcion para actualizar el estado, recibimos los cursos y los guardamos en el UseState
    GetAllStudents().then((student) => {
      setStudents(student);
    });
  }

  function AddStudent() {
    setModalAdd(true);
  }

  useEffect(() => { //iniciado desde el inicio
    UpdateStateStudent();
  }, []);

  return (
    <Container fluid style={{ marginTop: 80 }}>
      <ModalAddStudents ModalAdd={ModalAdd} setModalAdd={setModalAdd} UpdateStateStudent={UpdateStateStudent} />
      {StudentEdit && (<ModalEditStudents  //si existe que lo muestre
        ModalEdit={ModalEdit}
        setModalEdit={setModalEdit}
        UpdateStateStudent={UpdateStateStudent}
        StudentEdit={StudentEdit}
        SetStudentEdit={SetStudentEdit}
      />)}
      <Form onSubmit={SearchStudentHandler}>
        <Stack direction="horizontal" className="justify-content-center">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar un estudiante..." />
          </Form.Group>
          <Button variant="success" type="submit" style={{ marginRight: 10 }}>
            <i className="bi bi-search"></i> Buscar
          </Button>
          <Button variant="warning"
            onClick={() => {
              const input = document.getElementById("busqueda");
              input.value = "";
              UpdateStateStudent();
            }}
          ><i className="bi bi-arrow-clockwise"></i> Reset</Button>
        </Stack>
      </Form>
      <div className="container" style={{ marginTop: 20 }}>
        <div className="card p-5 mb-4 bg-body-tertiary rounded-3 shadow-sm border-primary" style={{ overflowX: 'auto' }}>
          <header className="pb-3 mb-4 border-bottom border-3 border-dark text-dark">
            <span className="fs-4"><i className="bi bi-person-workspace"></i> Estudiantes activos</span>
          </header>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Edad</th>
                <th>Id</th>
                <th>Curso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {student && student.map((estudiante, index) => ( //mapeo de los cursos, aca traemos todos los cursos que estan en la base de datos
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{estudiante.Nombres}</td>
                  <td>{estudiante.Apellidos}</td>
                  <td>{estudiante.Edad} años</td>
                  <td>{estudiante.Id}</td>
                  <td>{estudiante.Curso}</td>
                  <td>
                    <Button variant="dark" style={{ marginRight: 5 }} onClick={() => {
                      SetStudentEdit(estudiante);
                      setModalEdit(true)
                    }}><i className="bi bi-pencil-square"></i> Editar</Button>
                    <Button variant="danger" onClick={() => {
                      deleteStudent(estudiante).then(confirm => {
                        UpdateStateStudent();
                      });
                    }}><i className="bi bi-trash"></i> Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            <Button onClick={AddStudent}><i className="bi bi-person-plus"></i> Registrar un nuevo estudiante</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Students
