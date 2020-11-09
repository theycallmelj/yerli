import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { GrInstagram, GrFacebook } from 'react-icons/gr'

export default function Socials(){
    return (
        <Navbar bg="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mx-auto'>
            <Nav.Link href="#">
                <GrInstagram size="20" color='black'/>
            </Nav.Link>
            <Nav.Link href="#">
                <GrFacebook size="20" color='black'/>
            </Nav.Link>
            <Nav.Link href="#" style={{color: 'black'}}>
                <u>Suggest a Business</u>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}