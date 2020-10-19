import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function Socials(){
    return (
        <Navbar bg="light" expand="lg" fixed="bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <Nav.Link href="#">Instagram</Nav.Link>
            <Nav.Link href="#">Facebook</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}