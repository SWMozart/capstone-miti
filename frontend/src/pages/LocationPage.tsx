import "leaflet/dist/leaflet.css";
import './LocationPage.css';
import React from "react";
import {Location} from "../model/Location";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import L from "leaflet";

type LocationPageProps = {
    locations: Location[]
}

export default function LocationPage(props: LocationPageProps) {
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
            <div className={"loc-header"}>
            <div className={"title"}>
                <h1> Locations </h1>
            </div>
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
                                        <p>{location.name}</p>
                                        <img className={"photo"} src={location.photo} alt={"Location"}/>
                                    </Popup>
                                </Marker>
                        </>
                    })}
                    <ResetCenterView/>
                </MapContainer>
            </div>
            </div>
        </div>
    )
}