import {useState} from "react";
import axios from "axios";

export default function useLogins() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [me, setMe] = useState("")

    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [isFlipped, setIsFlipped] = useState(false);

    const [isLoginClick, setIsLoginClick] = useState(false)
    const [isRegisterClick, setIsRegisterClick] = useState(false)


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

    return {
        handleRegister, handleRegisterButton,
        handleLogin, handleLoginButton,
        handleLogout,
        me, isLoginClick, isFlipped,
        username, setUsername, password, setPassword,
        newUsername, setNewUsername, newPassword, setNewPassword
    }
}