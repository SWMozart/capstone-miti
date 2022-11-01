import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export default function NavBar(){
    return(
        <Navbar className={"navbar"} bg="light" variant="light">
            <Container className={"navbar-container"}>
                <Nav className={"me-auto"}>
                    <Nav.Link href="#/place">Location</Nav.Link>
                    <Nav.Link href="#/school">School</Nav.Link>
                    <Nav.Link href="#/shops">Shop</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}