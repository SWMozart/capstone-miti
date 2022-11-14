import './ShopPage.css';
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {NavLink} from "react-bootstrap";

type ShopPageProps = {
    logout : ()=>void
}

export default function ShopPage(props: ShopPageProps) {

    const navigate = useNavigate();


    return (

        <div className="background-sho">
            <div className={"button-header"}>
                <button className={"button-back"} onClick={() => navigate(-1)}><i className="fa-solid fa-backward"></i></button>
                <NavLink href="#/"> <button className={"logout"} onClick={props.logout}><i
                    className="fa-solid fa-right-from-bracket"></i></button>
                </NavLink>
            </div>
            <div className="sho-header">
                <h1 className={"sho-title"}> Shops </h1>
            </div>
            <div className={"shops"}>
                <a href="https://www.nbastore.eu/de"><img src={"https://www.nbastore.eu/content/assets/__0-313318851018.3692.svg"} className={"shop"}/></a>
                <a href="https://www.nike.com/de/jordan"><img src={"https://www.pngplay.com/wp-content/uploads/9/Air-Jordan-Logo-PNG-HD-Quality.png"} className={"shop"}/></a>
                <a href="https://www.nike.com/de/basketball"><img src={"https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"} className={"shop"}/></a>
                <a href="https://spalding-basketball.com/de/"><img src={"https://logodix.com/logo/1834307.png"} className={"shop"}/></a>
                <a href="https://www.basketballshop24.de"><img src={"https://www.basketballshop24.de/themes/Frontend/WnsBasketballShop/frontend/_public/src/img/logos/logo--tablet.png"} className={"shop"}/></a>
            </div>
        </div>
    )
}