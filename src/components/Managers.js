import React from 'react';
import { Container, Stack, Button, Form, Table } from "react-bootstrap";

function Managers() {
    return (
        <Container fluid style={{ marginTop: 80 }}>
            <Form>
                <Stack direction="horizontal" className="justify-content-center">
                    <Form.Group controlId="busqueda" className="w-75 m-3">
                        <Form.Control type="text" placeholder="Buscar gestor..." />
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
                        <span className="fs-4"><i className="bi bi-person-lines-fill"></i> Gestores de cursos activos</span>
                    </header>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Carnet</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mauricio José</td>
                                <td>Rivera Pérez</td>
                                <td>MR226789</td>
                                <td>MR@gmail.com</td>
                                <td>1234</td>
                                <td>
                                    <Button variant="dark" style={{ marginRight: 5 }}><i className="bi bi-pencil-square"></i> Editar</Button>
                                    <Button variant="danger"><i className="bi bi-trash"></i> Eliminar</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lucas Jorge</td>
                                <td>Hernandez Martinez</td>
                                <td>LH987353</td>
                                <td>HL@gmail.com</td>
                                <td>1234</td>
                                <td>
                                    <Button variant="dark" style={{ marginRight: 5 }}><i className="bi bi-pencil-square"></i> Editar</Button>
                                    <Button variant="danger"><i className="bi bi-trash"></i> Eliminar</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div>
                        <Button><i className="bi bi-person-plus"></i> Registrar un nuevo gestor</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Managers
