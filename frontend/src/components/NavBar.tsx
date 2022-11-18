import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import "./NavBar.css";


export default function NavBar(){
    return(
        <Navbar className={"navbar"}>
            <Nav.Link href="#/location"><button className={"Loc"}>Courts</button></Nav.Link>
            <Nav.Link href="#/training"><button className={"Tra"}>School</button></Nav.Link>
            <Nav.Link href="#/shops"><button className={"Sho"}>Shops</button></Nav.Link>
        </Navbar>
    )
}