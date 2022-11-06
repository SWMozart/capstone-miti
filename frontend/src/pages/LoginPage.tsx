import ReactCardFlip from "react-card-flip";
import {Link} from "react-router-dom";
import React from "react";
import useLogins from "../hook/useLogins";

export default function LoginPage() {

    const {
        handleRegister, handleRegisterButton,
        handleLogin, handleLoginButton,
        handleLogout,
        me, isLoginClick, isFlipped,
        username, setUsername, password, setPassword,
        newUsername, setNewUsername, newPassword, setNewPassword
    } = useLogins()


    return (
        <div className={"buttonflipper"}>
            {!me &&
    <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>

        <div className={"front"}>
    <button className={"LB"} onClick={handleLoginButton}>Login</button>
        <button className={"RB"} onClick={handleRegisterButton}>Sign Up</button>
            <button className={"GB2"}>Guest</button>
            <div className={"GB1"}>
            </div>
        </div>


    <div className={"back"}>
        {
            isLoginClick ?
                <div className={"login-field"}>
                    <input value={username} onChange={event => setUsername(event.target.value)}/>
                    <input type="password" value={password}
           onChange={event => setPassword(event.target.value)}/>
                    <Link to={"/way"}><button onClick={handleLogin}>Done</button></Link>
                </div>
:
            <div className={"register-field"}>
                <input value={newUsername} onChange={event => setNewUsername(event.target.value)}/>
                <input type="password" value={newPassword}
                       onChange={event => setNewPassword(event.target.value)}/>
                <Link to={"/way"}><button onClick={handleRegister}>Done</button></Link>
            </div>
        }
    </div>
    </ReactCardFlip>
            }
    {me &&
    <>
    <div >
        <p>{me}</p>
    <button className={"login-as"} onClick={handleLogout}>LogOut</button>
    </div>
    </>
    }
    </div>
        )
}