import React from 'react';
import NavBar from "../components/NavBar";
import './WayPage.css';
import {NavLink} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

type WayPageProps = {
    logout : ()=>void
}

export default function WayPage(props: WayPageProps) {

    const navigate = useNavigate();


    return (
        <div className="Way">
            <div className={"button-header"}>
                <button className={"button-back"} onClick={() => navigate(-1)}><i className="fa-solid fa-backward"></i></button>
                <NavLink href="#/"> <button className={"logout"} onClick={props.logout}><i
                    className="fa-solid fa-right-from-bracket"></i></button> </NavLink>
            </div>
            <div className="Way-header">
                <h1 className={"Way-title"}> Choose UR Way </h1>
                <NavBar/>
            </div>
        </div>
    )
}