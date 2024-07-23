import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'reactstrap';
import { useContext } from "react";
import CurrUserContext from "./CurrUserContext";
import {modalData} from './helpers';
import './NavBar.css'

import ModalBox from "./ModalBox";


const NavBar = ({logout}) => {
  const {currentUser} = useContext(CurrUserContext);
  let user;

  if (currentUser) user = currentUser.user;

  const howToPlay = modalData.howTo;
  const about = modalData.about;
  const stats = modalData.stats;

  return (
    // <nav className="NavBar">
    <div className="NavBar">
      <Navbar className="navbar navbar-expand-md">
        {/* <NavLink id="NavBar-Home" className='navbar-brand' to='/'>Jobly</NavLink> */}
        <div>
        <h4 className="d-inline mx-2">✏️</h4>
        <NavLink className='navbar-brand text-light link-opacity-25-hover py-0' to='/'>
        {/* ✏️ Spelling Bee 🐝 */}
         Spelling Bee
        </NavLink>
        <h4 className="d-inline">🐝</h4>
        </div>
        {/* <h6 className='navbar-brand text-light py-0'>
        ✏️ Spelling Bee 🐝
        </h6> */}

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
            modalName={stats.name} 
            title={stats.title}
            body1='Here are your stats:'
            body4={stats.body4}
            logout={logout}
          />
          <ModalBox 
            modalName={about.name} 
            title={about.title}
            body1={about.body1}
            body2={about.body2}
            body3={about.body3}
            body4={about.body4}
          />
          {/* <ModalBox 
            modalName='How to Play' 
            title='How to Play'
            body='This is how to play the Spelling Bee'
          /> */}
          <ModalBox 
            modalName={howToPlay.name} 
            title={howToPlay.title}
            body1={howToPlay.body1}
            body2={howToPlay.body2}
            body3={howToPlay.body3}
            body4={howToPlay.body4}
          />
          {currentUser ? 
            <NavItem className="mt-2 link-opacity-25-hover">
              <NavLink to='/challenges'>Challenges</NavLink>
            </NavItem> : 
            null}
          {currentUser && user.isAdmin ? 
            <NavItem className="mt-2">
              <NavLink to='/add-new-word'>Add New Word</NavLink>
            </NavItem> : 
            null}

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