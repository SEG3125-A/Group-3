import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';
import "../index.css";
import classes from "./headNavBar.module.css";
import { useTranslation } from "react-i18next";

// Navbar component, to be displayed at the top at all times



function HeadNavBar () {
    const [ t , i18n ] = useTranslation("global");

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (

    

    <div className={classes.navlinks}>
        <NavBar collapseOnSelect bg="success" sticky="top" expand="false">
            <Container>
                <NavBar.Brand as={NavLink} to="/home" className="navbar-brand-center">CanvaClique</NavBar.Brand>
                <NavBar.Toggle aria-controls="navbarToggleExternalContent"/>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-left me-auto text-white" >
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Home">{t("nav.home")}</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Gallery">{t("nav.gallery")}</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/CreatePost">{t("nav.createPost")}</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Profile">{t("nav.profile")}</Nav.Link>
                        <Nav.Link activeClassName={classes.active} as={NavLink} to="/Settings">{t("nav.settings")}</Nav.Link>
                        <button class="button-language" onClick={()=>handleChangeLanguage("en")}>EN</button>
                        <button class="button-language" onClick={()=>handleChangeLanguage("fr")}>FR</button>
                    </Nav>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    </div>
    );
};

export default HeadNavBar;