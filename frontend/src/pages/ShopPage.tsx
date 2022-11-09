import './ShopPage.css';
import React from "react";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-bootstrap";

type ShopPageProps = {
    logout : ()=>void
}

export default function ShopPage(props: ShopPageProps) {

    const navigate = useNavigate();


    return (
        <div className="background-sho">
            <div className={"button-header"}>
                <button className={"button-back"} onClick={() => navigate(-1)}>back</button>
                <NavLink href="#/"> <button className={"logout"} onClick={props.logout}>LogOut</button> </NavLink>
            </div>
            <div className="sho-header">
                <h1 className={"sho-title"}> Trainings </h1>

            </div>
        </div>
    )
}