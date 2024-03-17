import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';
import "../index.css";
import classes from "./headNavBar.module.css";

// Navbar component, to be displayed at the top at all times

const HeadNavBar = ()  => (
    <div className={classes.navlinks}>
        <NavBar collapseOnSelect bg="success" sticky="top" expand="false">
            <Container>
                <NavBar.Brand as={NavLink} to="/home" className="navbar-brand-center">CanvaClique</NavBar.Brand>
                <NavBar.Toggle aria-controls="navbarToggleExternalContent"/>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-left me-auto text-white" >
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Home">Home</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Gallery">Gallery</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Post">Create a Post</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Profile">Profile</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Settings">Settings</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    </div>
);

export default HeadNavBar;