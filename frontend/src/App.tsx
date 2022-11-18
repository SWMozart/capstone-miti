/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LocationPage from "./pages/LocationPage";
import TrainingPage from "./pages/TrainingPage";
import ShopPage from "./pages/ShopPage";
import WayPage from "./pages/WayPage";
import LoginPage from "./pages/LoginPage";
import useLogins from "./hook/useLogins";
import {ToastContainer} from "react-toastify";
import useCourt from "./hook/useCourt";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const {handleLogout} = useLogins()
    const {locations, getAllLocations} = useCourt()

    useEffect(()=>{
        getAllLocations()
    },[])

    return (
        <div>
            <ToastContainer/>
        <HashRouter>
            <Routes>
                <Route path ={"/"} element = {<LoginPage/>}/>
                <Route path ={"/way"} element = {<WayPage logout={handleLogout}/>}/>
                <Route path ={"/location"} element = {<LocationPage locations={locations} logout={handleLogout}/>}/>
                <Route path ={"/training"} element = {<TrainingPage logout={handleLogout}/>}/>
                <Route path ={"/shops"} element = {<ShopPage logout={handleLogout}/>}/>
            </Routes>
        </HashRouter>
        </div>
    );
}
export default App;