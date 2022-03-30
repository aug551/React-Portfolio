import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Aaron Cruz</Navbar.Brand>
                <Nav variant="tabs" defaultActiveKey="home" className="flex-column">
                    <Nav.Link as={Link} to="/home" eventKey="home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about" eventKey="about" >About</Nav.Link>
                    <Nav.Link as={Link} to="/projects" eventKey="projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/contact" eventKey="contact">Contact</Nav.Link>
                    <Outlet />
                </Nav>
            </Navbar>

        )
    }
}
