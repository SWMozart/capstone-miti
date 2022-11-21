import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

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
    function handleLogin(onSucces: () => void) {
            return axios.get("api/user/login", {auth: {username, password}})
                .then(response => response.data)
                .then((data) => setMe(data))
                .then(() => setUsername(""))
                .then(() => setPassword(""))
                .then(onSucces)
                .then(() => toast.success ("U Checked In", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }))
                .catch(() => toast.error("AIRBALL! Check UR Username/Password", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }))

    }

    function handleLogout() {
        axios.get("api/user/logout")
            .then(() => setMe(""))
            .then(() => toast.success ("U Checked Out", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }))
    }

    function handleRegisterButton() {
        setIsRegisterClick(!isRegisterClick)
        setIsFlipped((flipped) => !flipped)
    }
    function  handleRegister(onSucces: () => void) {
        return axios.post("api/user/register", {
            username: newUsername,
            password: newPassword
        })
            .then(() => setNewUsername(""))
            .then(() => setNewPassword(""))
            .then(onSucces)
            .then(() => toast.success ("Make It Take It", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }))
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