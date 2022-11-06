import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import "./NavBar.css";


export default function NavBar(){
    return(
        <Navbar className={"navbar"} bg="light" variant="light">
            <Container className={"navbar-container"}>
                <Nav className={"me-auto"}>
                    <div className={"navnav"}>
                        <div className={"Loc1"}>
                        <Nav.Link href="#/location"><button className={"Loc2"}>Locations</button></Nav.Link>
                        </div>
                    <div className={"Tra1"}>
                    <Nav.Link href="#/training"><button className={"Tra2"}>Training</button></Nav.Link>
                    </div>
                    <div className={"Sho1"}>
                    <Nav.Link href="#/shops"><button className={"Sho2"}>Shops</button></Nav.Link>
                    </div>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}