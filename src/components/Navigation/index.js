import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'

export default function () {

    return (
        <Navbar className='sticky-top bg-whitesmoke' expand="sm">
            <Navbar.Brand href="#/">Kyle Whittemore</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#/blog">Blog</Nav.Link>
                    <Nav.Link href="#/projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}