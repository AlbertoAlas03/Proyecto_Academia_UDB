import React, { useState } from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import AddStudent from '../../functions/AddStudents';

function ModalEditStudent({ ModalEdit, setModalEdit, UpdateStateStudent, StudentEdit, SetStudentEdit }) {

    function ModalEditStudent() {
        //obteniendo valores del form
        const Nombres = document.getElementById("nombres").value;
        const Apellidos = document.getElementById("apellidos").value;
        const Edad = document.getElementById("edad").value;
        const Curso = document.getElementById("curso").value;
        const Id = document.getElementById("id").value;
        //enviando info a firebase
        const infoStudent = { Nombres, Apellidos, Edad, Id, Curso };
        AddStudent(infoStudent);
        //regresamos el modal a null al actulizar los datos
        SetStudentEdit(null);
        UpdateStateStudent();
        setModalEdit(false);
    }

    const [StudentState, setStudentState] = useState({ ...StudentEdit });

    return (
        <Modal show={ModalEdit} onHide={() => {
            setModalEdit(false);
            SetStudentEdit(null);
        }
        }>
            <Modal.Header>
                <Modal.Title><i class="bi bi-pencil-square"></i> Editar estudiante</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <label><i class="bi bi-file-earmark-person"></i> Nombres del estudiante</label>
                        <Form.Control id="nombres" placeholder="Nombres" type="text" className="mb-3"
                            value={StudentState.Nombres} onChange={(e) => {
                                setStudentState({
                                    ...StudentState,
                                    Nombres: e.target.value
                                })
                            }}
                        ></Form.Control>
                        <label><i class="bi bi-file-earmark-person-fill"></i> Apellidos del estudiante</label>
                        <Form.Control id="apellidos" placeholder="Apellidos" type="text" className="mb-3"
                            value={StudentState.Apellidos} onChange={(e) => {
                                setStudentState({
                                    ...StudentState,
                                    Apellidos: e.target.value
                                })
                            }}
                        ></Form.Control>
                        <label><i class="bi bi-person-arms-up"></i> Edad del estudiante</label>
                        <Form.Control id="edad" placeholder="Edad" type="text" className="mb-3"
                            value={StudentState.Edad} onChange={(e) => {
                                setStudentState({
                                    ...StudentState,
                                    Edad: e.target.value
                                })
                            }}
                        ></Form.Control>
                        <label><i class="bi bi-journal"></i> Curso del estudiante</label>
                        <Form.Select id="curso" className="mb-3" required 
                        value={StudentState.Curso} onChange={(e) => {
                            setStudentState({
                                ...StudentState,
                                Curso: e.target.value
                            })
                        }}
                        >
                            <option value="Curso de inglés">Curso de inglés</option>
                            <option value="Curso de frances">Curso de frances</option>
                        </Form.Select>
                        <label><i class="bi bi-123"></i> Id del estudiante</label>
                        <Form.Control id="id" placeholder="Id" type="text" className="mb-3" required disabled={true}
                            value={StudentState.Id} onChange={(e) => {
                                setStudentState({
                                    ...StudentState,
                                    Id: e.target.value
                                })
                            }}
                        ></Form.Control>
                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => {
                    setModalEdit(false)
                    SetStudentEdit(null);
                }}><i class="bi bi-x"></i> Cancelar</Button>
                <Button variant="success" onClick={ModalEditStudent}><i class="bi bi-pen"></i> Editar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEditStudent;
