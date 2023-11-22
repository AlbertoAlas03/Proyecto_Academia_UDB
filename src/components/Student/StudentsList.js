import React from 'react';
import { Container, Stack, Button, Form, Table } from "react-bootstrap";

function StudentsList() {
    return (
        <Container fluid style={{ marginTop: 80 }}>
            <Form>
                <Stack direction="horizontal" className="justify-content-center">
                    <Form.Group controlId="busqueda" className="w-75 m-3">
                        <Form.Control type="text" placeholder="Buscar estudiante..." />
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
                        <span className="fs-4"><i className="bi bi-person-workspace"></i> Listado de tus estudiantes</span>
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
                            <tr>
                                <td>1</td>
                                <td>Carlos José</td>
                                <td>Guzmán Pérez</td>
                                <td>18 años</td>
                                <td>Curso de ingles sabatino</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Daniel Alejandro</td>
                                <td>Kelvin Gutierrez</td>
                                <td>22 años</td>
                                <td>Curso de frances presencial</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}

export default StudentsList
