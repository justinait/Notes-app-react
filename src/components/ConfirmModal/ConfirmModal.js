import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CountContext } from '../../context/CountContext';

function ConfirmModal({id}) {

  const {deleteNote} = useContext(CountContext)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    handleClose();
    deleteNote(id);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Eliminar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Estas seguro que deseas eliminar esta nota?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;