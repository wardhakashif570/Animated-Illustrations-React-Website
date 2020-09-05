import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './images/favicon.ico'
import Home from './components/Home'
import Courses from './components/Courses'
import NotFound from './components/NotFound'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function App() {
  
  return (
    <div >
      <Router>
        <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark" className="tex">
          <Navbar.Brand >
            <img src={logo} alt='Logo' id='logo' height="30px" />
             <b className="tex1">PYTHON</b>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" id='nav_links'>
              <Nav.Link eventKey={1} as={Link} to="/" ><b  className="tex">Home</b></Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="courses" className="tex"> <b  className="tex">Courses</b></Nav.Link>
              {/* <Nav.Link eventKey={3} as={Link} to="about">About</Nav.Link> */}
              <Nav.Link eventKey={4} href="#contact" className="tex"><b  className="tex">Contact</b></Nav.Link>
            </Nav>

            
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <div id='footer'>
          <h3 id='contact'>
            Contact Us
          </h3>
          <div id='icons_div'>
            <FaFacebook className='foot_icons' id='fb' />
            <FaTwitter className='foot_icons' id='twitter' />
            <FaInstagram className='foot_icons' id='insta' />
            <FaYoutube className='foot_icons' id='youtube' />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;