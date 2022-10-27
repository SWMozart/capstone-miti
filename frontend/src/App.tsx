import React, {useState} from 'react';
import './App.css';
import axios from "axios";
import ReactCardFlip from 'react-card-flip';

function App() {

    const [welcomeMessage, setWelcomeMessage] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [me, setMe] = useState("")
    const [guest, setGuest] = useState("Guest")

    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [isFlipped, setIsFlipped] = useState(false);

    function fetchWelcomeMessage() {
        axios.get("/api/way")
            .then(response => response.data)
            .then(data => setWelcomeMessage(data))
    }

    function handleLogin() {
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

    function handleRegister() {
        axios.post("api/user/register", {
            username: newUsername,
            password: newPassword
        })
            .then(() => setNewUsername(""))
            .then(() => setNewPassword(""))
    }

        const onRotate = () => {
            setIsFlipped((flipped) => !flipped);
        }


        return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>
             {!me &&
             <>
                <div className={"front"} onClick={onRotate}>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleRegister}>Sign Up</button>
                </div>
                <div className={"back"} onClick={onRotate}>
                    <input value={username} onChange={event => setUsername(event.target.value)}/>
                    <input type="password" value={password}
                     onChange={event => setPassword(event.target.value)}/>

                    <input value={newUsername} onChange={event => setNewUsername(event.target.value)}/>
                    <input type="password" value={newPassword}
                     onChange={event => setNewPassword(event.target.value)}/>
                </div>
                <div>
                    <button onClick={handleLoginGuest}>Guest</button>
                </div>
                </>
                }
                {me &&
                <>
                    <p>Angemeldet: {me}</p>
                    <button onClick={handleLogout}>LogOut</button>

                    <p>{welcomeMessage}</p>
                    <button onClick={fetchWelcomeMessage}>Make It Take It</button>
                    </>
                 }
                 </ReactCardFlip>
        );
}

export default App;
