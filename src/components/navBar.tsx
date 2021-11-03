import React from 'react'
import { Navbar, Container, Nav,  } from 'react-bootstrap';

import { Link  } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light" className="shadow-sm bg-white rounded navbar__container">
                <Container>
                <Nav className="me-auto">
                <Nav.Link as={Link} to={"./home"}>Inicio</Nav.Link>
                <Nav.Link as={Link} to={"./product"}>Productos</Nav.Link>
                <Nav.Link as={Link} to={"./billing"}>Facturas</Nav.Link>
                <Nav.Link as={Link} to={"./client"}>Clientes</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}
