import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";
import Stats from "./Stats";

import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter } from "reactstrap";

import "./ModalBox.css"


const ModalBox = ({modalName, title, body1, body2, body3, body4, logout=null}) => {
  const {currentUser} = useContext(CurrUserContext);
  let user;

  if (currentUser) user = currentUser.user;

  const navigate = useNavigate();
  // const [modal, setModal] = useState(false);
  const [modal, setModal] = ((!currentUser) && title === 'How to Play') ? useState(true) : useState(false);

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
          {(title === 'Stats' && currentUser) ?
            `${user.username} ${title}` :
            title 
          }
        </ModalHeader>
        <ModalBody className="bg-dark">
          {/* Test text for test Modal */}
          {title === 'Stats' ? 
            <Stats /> : 
            <>
              <p>{body1}</p>
              <p>{body2}</p>
              <p>{body3}</p>
              <p>{body4}</p>
            </>}
          {/* <p>{body1}</p>
          <p>{body2}</p>
          <p>{body3}</p>
          <p>{body4}</p> */}

          {currentUser ? 
            (logout ?
              <button 
                onClick={logout} 
                className="btn btn-sm btn-danger mx-2"
              >
                Logout
              </button> : 
              null) :
            (body4.includes('sign up') ? 
              <>
                <Link 
                  to='/signup' 
                  className="btn btn-sm btn-primary"
                  onClick={toggle}
                >
                  Sign up
                </Link>
                <Link 
                  to='/login' 
                  className="btn btn-sm btn-primary mx-3"
                  onClick={toggle}
                >
                  Login
                </Link>
              </> :
              null)
          }

          {((!currentUser) && title === "How to Play") ? 
              <>
                <p>You can sign up/login to keep track of your stats by clicking below.</p>
                <Link 
                  to='/signup' 
                  className="btn btn-sm btn-primary"
                  onClick={toggle}
                >
                  Sign up
                </Link>
                <Link 
                  to='/login' 
                  className="btn btn-sm btn-primary mx-3"
                  onClick={toggle}
                >
                  Login
                </Link>
              </> :
              null
          }

          {/* {logout ? 
            <button onClick={logout} className="btn btn-sm btn-danger mx-2">Logout</button> :
            null
          }

          {body4.includes('sign up') ? 
            <Link to='/signup' className="btn btn-sm btn-primary">Sign up</Link> : 
            null
          }
          {body4.includes('sign up') ? 
            <Link to='/login' className="btn btn-sm btn-primary mx-3">Login</Link> : 
            null
          } */}
        </ModalBody>
        <ModalFooter className="bg-dark">
          <Button onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};


export default ModalBox;