import React from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import AddStudent from '../../functions/AddStudents';

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return String(choices[index]);
}

function generarRandom(num) {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = [];
    let char;
    for (var i = 0; i < num; i++) {
        if (characters.length == 0) { break; }
        char = choose(characters);
        characters = characters.replace(char, '');
        result.push(char);

    }
    return result.join('');
}

function ModalAddStudents({ ModalAdd, setModalAdd, UpdateStateStudent }) {

    function ModalAddStudents() {
        //obteniendo valores del form
        const Nombres = document.getElementById("nombres").value;
        const Apellidos = document.getElementById("apellidos").value;
        const Edad = document.getElementById("edad").value;
        const Id = generarRandom(20);
        const Curso = document.getElementById("curso").value;
        //enviando info a firebase
        const infoStudent = { Nombres, Apellidos, Edad, Id, Curso };
        AddStudent(infoStudent);
        UpdateStateStudent();
        setModalAdd(false);
    }

    return (
        <Modal show={ModalAdd} onHide={() => setModalAdd(false)}>
            <Modal.Header>
                <Modal.Title><i class="bi bi-person-add"></i> Registrar un nuevo estudiante</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <label><i class="bi bi-file-earmark-person"></i> Nombres del estudiante</label>
                        <Form.Control id="nombres" placeholder="nombres" type="text" className="mb-3"></Form.Control>
                        <label><i class="bi bi-file-earmark-person-fill"></i> Apellidos del estudiante</label>
                        <Form.Control id="apellidos" placeholder="apellidos" type="text" className="mb-3"></Form.Control>
                        <label><i class="bi bi-person-arms-up"></i> Edad del estudiante</label>
                        <Form.Control id="edad" placeholder="edad" type="number" className="mb-3"></Form.Control>
                        <label><i class="bi bi-journal"></i> Seleccionar tipo de curso</label>
                        <Form.Select id="curso" className="mb-3" required>
                            <option value="Curso de inglés">Curso de inglés</option>
                            <option value="Curso de frances">Curso de frances</option>
                        </Form.Select>
                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => setModalAdd(false)}><i class="bi bi-x"></i> Cancelar</Button>
                <Button variant="success" onClick={ModalAddStudents}><i class="bi bi-plus"></i> Añadir</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddStudents
