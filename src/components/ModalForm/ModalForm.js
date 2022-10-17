import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../firebaseConfig';

function ModalForm() {

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [note, setNote] = useState({
    title: title,
    body: body
  })

  const clear = () => {
    setTitle('');
    setBody('');
    setNote({});
  }

  const handleNote = (e) => {
    e.preventDefault();
    // setNote({
    //   title,
    //   body
    // })
    console.log(note);
    pushData({title, body});
    clear();
  }

  const pushData = async (newNote) => {
    const noteCollection = collection(db, 'notes');
    const noteDoc = await addDoc(noteCollection, newNote);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control
              type="text"
              name="title"
              value={title}
              placeholder="Titulo"
              onChange={(e)=> setTitle(e.target.value)}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBody">
            <Form.Control
                type="text"
                name="body"
                value={body}
                placeholder="Cuerpo de la nota"
                onChange={(e)=> setBody(e.target.value)}
                autoFocus
              />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" onClick={handleNote}>
              Guardar
            </Button>
          </Modal.Footer>

        </Form>

      </Modal>
    </>


  );
}

export default ModalForm;