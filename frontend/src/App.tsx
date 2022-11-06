import React from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import LocationPage from "./pages/LocationPage";
import TrainingPage from "./pages/TrainingPage";
import ShopPage from "./pages/ShopPage";
import WayPage from "./pages/WayPage";
import LoginPage from "./pages/LoginPage";
import useLogins from "./hook/useLogins";

function App() {

    const {handleLogout} = useLogins()

    return (
        <HashRouter>
            <Routes>
                <Route path ={"/"} element = {<LoginPage/>}/>
                <Route path ={"/way"} element = {<WayPage logout={handleLogout}/>}/>
                <Route path ={"/location"} element = {<LocationPage/>}/>
                <Route path ={"/training"} element = {<TrainingPage/>}/>
                <Route path ={"/shops"} element = {<ShopPage/>}/>
            </Routes>
        </HashRouter>
    );
}
export default App;