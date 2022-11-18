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
        <>
        <body className={"background-tra"}>
            <div className={"button-header"}>
                <button className={"button-back"} onClick={() => navigate(-1)}><i className="fa-solid fa-backward"></i></button>
                <NavLink href="#/"> <button className={"logout"} onClick={props.logout}><i
                    className="fa-solid fa-right-from-bracket"></i></button> </NavLink>
            </div>
            <div className={"tra-header"}>
                <h1 className={"tra-title"}> Trainings </h1>
            </div>
            <div className={"player"}>
                <h3 className={"vid-title"}>Be A Baller</h3>
                <iframe className={"iframe"} width="400" height="300"
                    src="https://www.youtube.com/embed/videoseries?list=PL-TUzaTzchzgulFcuZRw3T4fETWtMZIsr"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            <div className={"player"}>
                <h3 className={"vid-title"}>Be A Pro</h3>
                <iframe className={"iframe"} width="400" height="300"
                    src="https://www.youtube.com/embed/7AXqXxQKBzA"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </body>
        </>
    )
}