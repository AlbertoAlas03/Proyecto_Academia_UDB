import React from 'react';
import { Container, Stack, Button, Form, Table } from 'react-bootstrap';

const StudentTableRow = ({ number, firstName, lastName, age, course }) => (
  <tr>
    <td>{number}</td>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{age}</td>
    <td>{course}</td>
  </tr>
);

const StudentsList = () => (
  <Container fluid style={{ marginTop: 80 }}>
    <Form>
      <Stack direction="horizontal" className="justify-content-center">
        <Form.Group controlId="busqueda" className="w-75 m-3">
          <Form.Control type="text" placeholder="Buscar estudiante..." />
        </Form.Group>
        <Button variant="success" type="submit" style={{ marginRight: 10 }}>
          <i className="bi bi-search"></i> Buscar
        </Button>
        <Button variant="warning">
          <i className="bi bi-arrow-clockwise"></i> Reset
        </Button>
      </Stack>
    </Form>
    <div className="container" style={{ marginTop: 20 }}>
      <div
        className="card p-5 mb-4 bg-body-tertiary rounded-3 shadow-sm border-primary"
        style={{ overflowX: 'auto' }}
      >
        <header className="pb-3 mb-4 border-bottom border-3 border-dark text-dark">
          <span className="fs-4">
            <i className="bi bi-person-workspace"></i> Listado de tus estudiantes
          </span>
        </header>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Edad</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            <StudentTableRow
              number={1}
              firstName="Carlos José"
              lastName="Guzmán Pérez"
              age="18 años"
              course="Curso de inglés sabatino"
            />
            <StudentTableRow
              number={2}
              firstName="Daniel Alejandro"
              lastName="Kelvin Gutierrez"
              age="22 años"
              course="Curso de francés presencial"
            />
          </tbody>
        </Table>
      </div>
    </div>
  </Container>
);

export default StudentsList;

