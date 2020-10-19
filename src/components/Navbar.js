import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function NavbarComponent(){
    return (
        <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">Yerli</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="ml-auto">
            <Nav.Link href="/">Feed</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}