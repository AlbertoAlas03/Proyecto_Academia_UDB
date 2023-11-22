import React, { useState } from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import AddCourse from '../../functions/AddCourses';

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

function ModalEditCourses({ ModalEdit, setModalEdit, UpdateStateCourse, CourseEdit, SetCourseEdit }) {

    function ModalEditCourse() {
        //obteniendo valores del form
        const Titulo = document.getElementById("titulo").value;
        const Tipo = document.getElementById("tipo").value;
        const Horario = document.getElementById("horario").value;
        const Inscritos = document.getElementById("inscritos").value;
        const Id = document.getElementById("id").value;
        //enviando info a firebase
        const infoCourse = { Titulo, Tipo, Horario, Id, Inscritos };
        AddCourse(infoCourse);
        //regresamos el modal a null al actulizar los datos
        SetCourseEdit(null);
        UpdateStateCourse();
        setModalEdit(false);
    }

    const [CourseState, setCourseState] = useState({ ...CourseEdit });

    return (
        <Modal show={ModalEdit} onHide={() => {
            setModalEdit(false);
            SetCourseEdit(null);
        }
        }>
            <Modal.Header>
                <Modal.Title><i class="bi bi-pencil-square"></i> Editar curso</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        <label><i class="bi bi-journal"></i> Seleccionar tipo de curso</label>
                        <Form.Select id="titulo" placeholder="Titulo" className="mb-3" required
                            value={CourseState.Titulo} onChange={(e) => {
                                setCourseState({
                                    ...CourseState,
                                    Titulo: e.target.value
                                })
                            }}
                        >
                            <option value="Curso de inglés">Curso de inglés</option>
                            <option value="Curso de frances">Curso de frances</option>
                        </Form.Select>
                        <label><i class="bi bi-journal-bookmark-fill"></i> Seleccionar programa</label>
                        <Form.Select id="tipo" placeholder="Seleccionar programa..." className="mb-3" required
                            value={CourseState.Tipo} onChange={(e) => {
                                setCourseState({
                                    ...CourseState,
                                    Tipo: e.target.value
                                })
                            }}
                        >
                            <option value="Sabatino en línea - Programa adultos">Sabatino en línea - Programa adultos</option>
                            <option value="Sabatino en línea - Programa adolescentes">Sabatino en línea - Programa adolescentes</option>
                            <option value="Intensivo en línea - Programa adultos">Intensivo en línea - Programa adultos</option>
                            <option value="Sabatino presencial - Programa adultos">Sabatino presencial - Programa adultos</option>
                            <option value="Sabatino presencial - Programa adolescentes">Sabatino presencial - Programa adolescentes</option>
                            <option value="Sabatino intensivo presencial - Programa adultos">Sabatino intensivo presencial - Programa adultos</option>
                        </Form.Select>
                        <label><i class="bi bi-alarm"></i> Seleccionar horario</label>
                        <Form.Select id="horario" placeholder="Seleccionar horario..." className="mb-3" required
                            value={CourseState.Horario} onChange={(e) => {
                                setCourseState({
                                    ...CourseState,
                                    Horario: e.target.value
                                })
                            }}
                        >
                            <option value="Sábado, 8:00-11:00 am">Sábado, 8:00-11:00 am</option>
                            <option value="Sábado, 8:00-11:40 am">Sábado, 8:00-11:40 am</option>
                            <option value="Lunes, miércoles y viernes, 7:00-8:20 am">Lunes, miércoles y viernes, 7:00-8:20 am</option>
                            <option value="Lunes, miércoles y viernes, 6:00-7:20 pm">Lunes, miércoles y viernes, 6:00-7:20 pm</option>
                            <option value="Lunes, miércoles y viernes, 7:30-9:00 am">Lunes, miércoles y viernes, 7:30-9:00 am</option>
                        </Form.Select>
                        <Form.Control id="inscritos" placeholder="Inscritos" type="number" className="mb-3" required
                            value={CourseState.Inscritos} onChange={(e) => {
                                setCourseState({
                                    ...CourseState,
                                    Inscritos: e.target.value
                                })
                            }}
                        ></Form.Control>
                        <label><i class="bi bi-123"></i> Id del curso</label>
                        <Form.Control id="id" placeholder="Id" type="text" className="mb-3" required disabled={true}
                            value={CourseState.Id} onChange={(e) => {
                                setCourseState({
                                    ...CourseState,
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
                    SetCourseEdit(null);
                }}><i class="bi bi-x"></i> Cancelar</Button>
                <Button variant="success" onClick={ModalEditCourse}><i class="bi bi-pen"></i> Editar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEditCourses;
