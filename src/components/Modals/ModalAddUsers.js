import React from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import AddUser from '../../functions/AddUsers';

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

function ModalAddUsers({ ModalAdd, setModalAdd, UpdateStateUser }) {

    function ModalAddUser() {
        //obteniendo valores del form
        const Nombres = document.getElementById("nombres").value;
        const Apellidos = document.getElementById("apellidos").value;
        const Id = generarRandom(20);
        const Correo = document.getElementById("email").value;
        const Contraseña = document.getElementById("password").value;
        //enviando info a firebase
        const infoStudent = { Nombres, Apellidos, Correo, Id, Contraseña };
        AddUser(infoStudent);
        UpdateStateUser();
        setModalAdd(false);
    }

    return (
        <Modal show={ModalAdd} onHide={() => setModalAdd(false)}>
            <Modal.Header>
                <Modal.Title><i class="bi bi-person-add"></i> Registrar un nuevo usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <label><i class="bi bi-file-earmark-person"></i> Nombres del usuario</label>
                        <Form.Control id="nombres" placeholder="nombres" type="text" className="mb-3"></Form.Control>
                        <label><i class="bi bi-file-earmark-person-fill"></i> Apellidos del usuario</label>
                        <Form.Control id="apellidos" placeholder="apellidos" type="text" className="mb-3"></Form.Control>
                        <label><i class="bi bi-person-arms-up"></i> Correo del usuario</label>
                        <Form.Control id="email" placeholder="edad" type="email" className="mb-3"></Form.Control>
                        <label><i class="bi bi-person-arms-up"></i> Contraseña</label>
                        <Form.Control id="password" placeholder="edad" type="password" className="mb-3"></Form.Control>
                        <label><i class="bi bi-journal"></i> Seleccionar rol</label>
                        <Form.Select id="rol" className="mb-3" required>
                            <option value="admin">admin</option>
                            <option value="manager">manajer</option>
                            <option value="profesor">profesor</option>
                        </Form.Select>
                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={() => setModalAdd(false)}><i class="bi bi-x"></i> Cancelar</Button>
                <Button variant="success" onClick={ModalAddUser}><i class="bi bi-plus"></i> Añadir</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddUsers
