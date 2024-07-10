import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useContext } from "react";
// import CurrUserContext from "./CurrUserContext";
import './NavBar.css'

import ModalBox from "./ModalBox";


const NavBar = ({logout}) => {
  // const {currentUser} = useContext(CurrUserContext);
  let user = 'test';

  // if (currentUser) user = currentUser.user;

  return (
    // <nav className="NavBar">
    <div className="NavBar">
      <Navbar className="navbar navbar-expand-md">
        {/* <NavLink id="NavBar-Home" className='navbar-brand' to='/'>Jobly</NavLink> */}
        {/* <NavLink className='navbar-brand' to='/'>
        ✏️ Spelling Bee 🐝
        </NavLink> */}
        <h6 className='navbar-brand text-light py-0'>
        ✏️ Spelling Bee 🐝
        </h6>

        <Nav className="ml-auto" navbar>
          {/* <Modal>
            <ModalHeader><p>Modal Test</p></ModalHeader>

            <ModalBody>
              <p>Text of Modal</p>
            </ModalBody>

            <ModalFooter>
              <Button>Close</Button>
            </ModalFooter>
          </Modal> */}
          <ModalBox 
            modalName='Stats' 
            title='Stats'
            body='Here are your stats:'
          />
          <ModalBox 
            modalName='About' 
            title='About'
            body='Uses the Merriam-Webster Dictionary API'
          />
          <ModalBox 
            modalName='How to Play' 
            title='How to Play'
            body='This is how to play the Spelling Bee'
          />
          {/* {currentUser ?  */}

          {/* {user ? 
            <>
              <NavItem>
              <NavLink className='mx-2' to='/companies'>Stats</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='mx-2' to='/jobs'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='mx-2' to='/profile'>
                  How to Play 
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="logout" className='mx-2' to='/login' onClick={logout}>
                  Logout, {user.username}
                </NavLink>
              </NavItem> 
            </> :
            <>
              <NavItem>
                <NavLink className='mx-2' to='/login'>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='mx-2' to='/signup'>Signup</NavLink>
              </NavItem>
            </>
          } */}

          {/* <NavItem>
            <NavLink className='mx-2' to='/login'>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='mx-2' to='/signup'>Signup</NavLink>
          </NavItem> */}
          {/* // <NavItem>
          //   <NavLink className='mx-2' to='/companies'>Companies</NavLink>
          // </NavItem>
          // <NavItem>
          //   <NavLink className='mx-2' to='/jobs'>Jobs</NavLink>
          // </NavItem>
          // <NavItem>
          //   <NavLink className='mx-2' to='/profile'>Profile</NavLink>
          // </NavItem>
          // <NavItem>
          //   <NavLink id="logout" className='mx-2' to='/login' onClick={logout}>
          //     Logout, {user.username}
          //   </NavLink>
          // </NavItem> */}
        </Nav>
      </Navbar>
    </div>

    // <nav className="NavBar">
    //     {/* <NavLink id="NavBar-Home" className='navbar-brand' to='/'>Jobly</NavLink> */}
    //     <NavLink className='navbar-brand' to='/'>Jobly</NavLink>

    //         <NavLink to='/login'>Login</NavLink>
    //         <NavLink to='/signup'>Signup</NavLink>
    // </nav>
  )
};


export default NavBar;