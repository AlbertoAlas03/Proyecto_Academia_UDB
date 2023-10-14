import React from 'react';
import { Container, Stack, Button, Form, Table } from "react-bootstrap";

function Courses() {
  return (
    <Container fluid style={{ marginTop: 80 }}>
      <Form>
        <Stack direction="horizontal" className="justify-content-center">
          <Form.Group controlId="busqueda" className="w-75 m-3">
            <Form.Control type="text" placeholder="Buscar un curso..." />
          </Form.Group>
          <Button variant="success" type="submit" style={{ marginRight: 10 }}>
            <i className="bi bi-search"></i> Buscar
          </Button>
          <Button variant="warning"><i className="bi bi-arrow-clockwise"></i> Reset</Button>
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
                <th>Titulo</th>
                <th>Tipo</th>
                <th>Horario</th>
                <th>Inscritos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Curso de ingles sabatino</td>
                <td>Ingles</td>
                <td>sabado de 8:00 am a 12:00 md</td>
                <td>10</td>
                <td>
                  <Button variant="dark" style={{ marginRight: 5 }}><i className="bi bi-pencil-square"></i> Editar</Button>
                  <Button variant="danger"><i className="bi bi-trash"></i> Eliminar</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Curso de frances presencial</td>
                <td>Frances</td>
                <td>lunes, martes y miercoles de 9:00 am a 12:00 md</td>
                <td>5</td>
                <td>
                  <Button variant="dark" style={{ marginRight: 5 }}><i className="bi bi-pencil-square"></i> Editar</Button>
                  <Button variant="danger"><i className="bi bi-trash"></i> Eliminar</Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div>
            <Button><i className="bi bi-plus-lg"></i> Registrar un nuevo curso</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Courses
