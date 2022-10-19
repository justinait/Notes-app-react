import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CountContext } from '../../context/CountContext';
import '../Note/Note.css'

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
      <Button variant="outline-danger" onClick={handleShow}>
        <img src="/delete-svgrepo-com.svg" alt="Eliminar"  className='icons'/>
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