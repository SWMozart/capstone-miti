import ReactCardFlip from "react-card-flip";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

export default function LoginPage() {

    const [welcomeMessage, setWelcomeMessage] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [me, setMe] = useState("")
    const [guest, setGuest] = useState("Guest")

    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [isFlipped, setIsFlipped] = useState(false);

    const [isLoginClick, setIsLoginClick] = useState(false)
    const [isRegisterClick, setIsRegisterClick] = useState(false)

    function fetchWelcomeMessage() {
        axios.get("/api/way")
            .then(response => response.data)
            .then(data => setWelcomeMessage(data))
    }

    function handleLoginButton() {
        setIsLoginClick(!isLoginClick)
        setIsFlipped((flipped) => !flipped)
    }
    function handleLogin() {
        if(username.length>0 && password.length>0)
            axios.get("api/user/login", {auth: {username, password}})
                .then(response => response.data)
                .then((data) => setMe(data))
                .then(() => setUsername(""))
                .then(() => setPassword(""))

                .catch(() => alert("AIRBALL! Check UR Username/Password"))
    }

    function handleLoginGuest() {
        axios.get("api/user/guest")
            .then(response => response.data)
            .then((data) => setGuest(data))
    }

    function handleLogout() {
        axios.get("api/user/logout")
            .then(() => setMe(""))
    }

    function handleRegisterButton() {
        setIsRegisterClick(!isRegisterClick)
        setIsFlipped((flipped) => !flipped)
    }

    function  handleRegister() {
        axios.post("api/user/register", {
            username: newUsername,
            password: newPassword
        })
            .then(() => setNewUsername(""))
            .then(() => setNewPassword(""))
    }


    return (
        <>
            {!me &&
    <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
    <div>
        <div className={"front"}>
    <button onClick={handleLoginButton}>Login</button>
        <button onClick={handleRegisterButton}>Sign Up</button>
    </div>
    </div>

    <div>
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
    <button onClick={handleRegister}>Done</button>
        </div>
}
    </div>
    </div>

    </ReactCardFlip>
}
    {me &&
    <>
        <p>Angemeldet: {me}</p>
    <button onClick={handleLogout}>LogOut</button>

        <p>{welcomeMessage}</p>
        <button onClick={fetchWelcomeMessage}>Make It Take It</button>
    </>
    }
    </>
        )
}