import React from 'react';
import NavBar from "../components/NavBar";
import './WayPage.css';
import {NavLink} from "react-bootstrap";

type WayPageProps = {
    logout : ()=>void
}

export default function WayPage(props: WayPageProps) {

    return (
        <div className="Way">
            <div className="Way-header">
                <h1 className={"Way-title"}> Choose UR Way </h1>
                <div className={"Navbar"}>
                <NavBar/>
                </div>
                <div>
                    <NavLink href="#/"> <button className={"logout"} onClick={props.logout}><i className="bi bi-box-arrow-left"></i></button> </NavLink>
                </div>
            </div>
        </div>
    )
}