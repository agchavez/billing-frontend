import React from 'react'
import { Navbar, Container, Nav,NavDropdown  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Link  } from 'react-router-dom';
import { startLogOut } from '../state/action-creators/authActionCreators';
import { RootState } from '../state/reducers';

export const NavBar = () => {
    const dispatch = useDispatch();
    const name = useSelector((state:RootState) => state.auth.name)
    const handleLogout = ()=>{
        dispatch(startLogOut())
    }
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
                <NavDropdown title={name} id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">Mi cuenta</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout} >Cerrar sesion</NavDropdown.Item>
                </NavDropdown>
                
                </Container>
            </Navbar>
        </>
    )
}
