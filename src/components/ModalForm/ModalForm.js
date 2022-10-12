import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control type="text" placeholder="Titulo de la nota" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBody">
            <Form.Control type="text" placeholder="Cuerpo de la nota" />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Guardar
            </Button>
          </Modal.Footer>

        </Form>

      </Modal>
    </>


  );
}

export default ModalForm;