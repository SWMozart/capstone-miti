import ReactCardFlip from "react-card-flip";
import {Link, useNavigate} from "react-router-dom";
import React from "react";
import useLogins from "../hook/useLogins";
import logo_makeittakeit from "../images/logo_makeittakeit.png"

export default function LoginPage() {

    const {
        handleRegister, handleRegisterButton,
        handleLogin, handleLoginButton,
        handleLogout,
        me, isLoginClick, isFlipped,
        username, setUsername, password, setPassword,
        newUsername, setNewUsername, newPassword, setNewPassword
    } = useLogins()

    const navigate = useNavigate()


    function onLogin() {
        handleLogin(() => navigate("/way"))
    }

    function onRegister() {
        handleRegister(() => navigate("/way"))
    }

    return (
        <div className={"Start"}>

            <div className={"logo"}>
                <img src={logo_makeittakeit} alt={"logo"}/>
            </div>

            {!me &&
    <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>

        <div className={"front-side"}>
    <button className={"LB"} onClick={handleLoginButton}>Login</button>
        <button className={"RB"} onClick={handleRegisterButton}>Sign Up</button>
            <Link to={"/way"}><button className={"GB"}>Guest</button></Link>
        </div>


    <div className={"back-side"}>
        {
            isLoginClick ?
                <div className={"register"}>
                    <input value={username} onChange={event => setUsername(event.target.value)}/>
                    <input type="password" value={password}
           onChange={event => setPassword(event.target.value)}/>
                    <button className={"done"} onClick={onLogin}>Done</button>
                </div>
:
            <div className={"register"}>
                <input value={newUsername} onChange={event => setNewUsername(event.target.value)}/>
                <input type="password" value={newPassword}
                       onChange={event => setNewPassword(event.target.value)}/>
                <Link to={"/way"}><button className={"done"} onClick={onRegister}>Done</button></Link>
            </div>
        }
    </div>
    </ReactCardFlip>
            }
    {me &&
    <>
    <div>
        <p>{me}</p>
        <button className={"login-as"} onClick={handleLogout}>LogOut</button>
    </div>
    </>
    }
    </div>
        )
}