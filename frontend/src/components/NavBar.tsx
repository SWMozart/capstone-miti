import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import "./NavBar.css";


export default function NavBar(){
    return(
        <Navbar className={"navbar"} bg="light" variant="light">
            <Nav.Link href="#/location"><button className={"Loc"}>Courts</button></Nav.Link>
            <Nav.Link href="#/training"><button className={"Tra"}>Trainings</button></Nav.Link>
            <Nav.Link href="#/shops"><button className={"Sho"}>Shops</button></Nav.Link>
        </Navbar>
    )
}