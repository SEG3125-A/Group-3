import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import "../index.css";

// Navbar component, to be displayed at the top at all times

const HeadNavBar = ()  => {
        return (
            <NavBar expand="lg" className="bg-success">
                <Container>
                    <NavBar.Brand as={NavLink} to="/home" ClassName="navbar-brand-center">CanvaClique</NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav"/>
                    <NavBar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/Gallery">Gallery</Nav.Link>
                            <Nav.Link as={NavLink} to="/Profile">Profile</Nav.Link>
                            <Nav.Link as={NavLink} to="/Settings">Settings</Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        );  
};

export default HeadNavBar;