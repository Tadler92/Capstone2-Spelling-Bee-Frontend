import { useState } from "react";
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter } from "reactstrap";

import "./ModalBox.css"


const ModalBox = ({modalName, title, body}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // const handleShow = () => setShow(true);


  return (
    <>
      <Button onClick={toggle} color="none" className="text-light">
        {/* Launch Name of Modal */}
        {modalName}
      </Button>

      <Modal isOpen={modal} toggle={toggle} fade={true}>
        <ModalHeader 
          toggle={toggle} 
          className="bg-dark"
          cssModule={{'modal-title': 'w-100 text-center'}}
        >
          {/* Modal Test Title */}
          {title}
        </ModalHeader>
        <ModalBody className="bg-dark">
          {/* Test text for test Modal */}
          {body}
        </ModalBody>
        <ModalFooter className="bg-dark">
          <Button onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};


export default ModalBox;