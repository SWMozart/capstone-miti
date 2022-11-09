import React, {useEffect, useState} from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LocationPage from "./pages/LocationPage";
import TrainingPage from "./pages/TrainingPage";
import ShopPage from "./pages/ShopPage";
import WayPage from "./pages/WayPage";
import LoginPage from "./pages/LoginPage";
import useLogins from "./hook/useLogins";
import axios from "axios";

function App() {

    const {handleLogout} = useLogins()
    const [locations, setLocations] = useState([]);
    const getAllLocations = () => {
        axios.get("/api/locations")
            .then((response)=>{return response.data})
            .then((data)=>{setLocations(data)})

            .catch((error)=> console.error(error))
    }
    useEffect(()=>{
        getAllLocations()
    },[])


    return (
        <HashRouter>
            <Routes>
                <Route path ={"/"} element = {<LoginPage/>}/>
                <Route path ={"/way"} element = {<WayPage logout={handleLogout}/>}/>
                <Route path ={"/location"} element = {<LocationPage locations={locations} logout={handleLogout}/>}/>
                <Route path ={"/training"} element = {<TrainingPage logout={handleLogout}/>}/>
                <Route path ={"/shops"} element = {<ShopPage logout={handleLogout}/>}/>
            </Routes>
        </HashRouter>
    );
}
export default App;