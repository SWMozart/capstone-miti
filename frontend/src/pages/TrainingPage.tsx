import './TrainingPage.css';
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-bootstrap";
import React from "react";

type TrainingPageProps = {
    logout : ()=>void
}

export default function TrainingPage(props: TrainingPageProps) {

    const navigate = useNavigate();


    return (
        <div className="background-tra">
            <div className={"button-header"}>
                <button className={"button-back"} onClick={() => navigate(-1)}>back</button>
                <NavLink href="#/"> <button className={"logout"} onClick={props.logout}>LogOut</button> </NavLink>
            </div>
            <div className="tra-header">
                <h1 className={"tra-title"}> Trainings </h1>

            </div>
        </div>
    )
}