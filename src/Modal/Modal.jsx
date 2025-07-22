import Modal from 'react-bootstrap/Modal';

export const ModalApp = ({ show, handleClose, title, content }) => {
  
  return (
   <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content}</p>
      </Modal.Body>
    </Modal>
  );
};