import "leaflet/dist/leaflet.css";
import './LocationPage.css';
import React, { useState } from "react";
import {Court} from "../model/Court";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import L from "leaflet";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-bootstrap";
import AddNewCourtModal from "../components/AddNewCourtModal";
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {AdvancedImage} from "@cloudinary/react";


type LocationPageProps = {
    locations: Court[]
    logout: () => void
}


export default function LocationPage(props: LocationPageProps) {

    const [filterText, setFilterText] = useState("")
    const filteredNames = props.locations.filter((names) => names.name.toLowerCase().includes(filterText.toLowerCase()))
    console.log(filteredNames)
    let hasInput:boolean = filteredNames.length > 0;

    const navigate = useNavigate();

    const [isDisplay, setIsDisplay] = useState(true);
    const [addNewCourtModalOn, setAddNewCourtModalOn] = useState(false);

    const cld = new Cloudinary({cloud: {cloudName:"ds9ndbe2v"}})


    const addNewCourt = ()=>{
        setIsDisplay(!isDisplay)
        setAddNewCourtModalOn(true)
    }
    const resetOnHide = ()=>{
        setAddNewCourtModalOn(false)
        setIsDisplay(!isDisplay)
    }

    console.log(props.locations)

    function ResetCenterView(){

        const map = useMap();
        map.setView(
            L.latLng(51.07380881233824, 10.366612768843467),
            map.getZoom(),{animate:true}
        )
        return null;
    }

    const icon = L.icon({
        iconUrl:"./placeholder.png",
        iconSize: [20,20]
    })


    return (
        <div className={"background"}>
            <div className={"button-header"}>
                <button className={"button-back"} onClick={() => navigate(-1)}><i className="fa-solid fa-backward"></i></button>
                <NavLink href="#/"> <button className={"logout"} onClick={props.logout}><i
                    className="fa-solid fa-right-from-bracket"></i></button> </NavLink>
            </div>

            <div className={"loc-header"}>
                <h1 className={"loc-title"}> Courts </h1>
            </div>

            <div>
            {hasInput ?
                <h4 className="title-city"> Choose UR City </h4>
                    :
                <h4 className="title-city"> Currently No Court Created! </h4>}

                <input className={"field"} onChange={(event) => setFilterText(event.target.value)}/>

                <button className={"addcourt"} onClick={addNewCourt}>
                    Marks UR Court
                </button>
                <div>
                    {
                        !isDisplay &&
                        <div>
                            <AddNewCourtModal show={addNewCourtModalOn} onHide={resetOnHide}/>
                        </div>
                    }
                </div>

                {hasInput ?
                    <>

                    <div className={"map-list"}>
                    <MapContainer  className={"map-container"} center={[51.07380881233824, 10.366612768843467]} zoom={5}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {filteredNames.map((filteredName)=>{
                                const myImage = cld.image(filteredName.photo)
                                myImage.resize(thumbnail().width(170).height(150))
                                    .roundCorners(byRadius(20))
                            return(
                                <>
                                    <Marker position={[filteredName.lat, filteredName.lon]} icon={icon}>
                                        <Popup className={"Popup"}>
                                            <p className={"loc-name"}>{filteredName.name}</p>
                                            <AdvancedImage cldImg={myImage} />
                                        </Popup>
                                    </Marker>
                                </>
                            )
                        }
                        )}
                            <ResetCenterView/>
                    </MapContainer>
                        <div className={"citylist"}>
                            {filteredNames.map((filteredName)=>{
                                return (
                                    <ul>
                                        <li>
                                            {filteredName.name}
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>

                    </>
                    :
                    <div className={"map"}>
                        <MapContainer className={"map-container"} center={[51.07380881233824, 10.366612768843467]} zoom={5}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {props.locations.map((location)=> {
                                return <>
                                    <Marker position={[location.lat, location.lon]} icon={icon}>
                                        <Popup className={"Popup"}>
                                            <p className={"loc-name"}>{location.name}</p>
                                            <img className={"photo"} src={location.photo} alt={"courts"}/>
                                        </Popup>
                                    </Marker>
                                </>
                            })}
                            <ResetCenterView/>
                        </MapContainer>
                    </div>
                }
            </div>
        </div>
    )
}