import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import L,{LatLngExpression} from "leaflet";
import "leaflet/dist/leaflet.css";

export default function LocationPage() {

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

    const location: LatLngExpression = [50.95648438956642, 6.977469044747556]

    return (
        <div className={"location"}>
            <p> Location </p>
            <MapContainer className={"map"} center={location} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={location} icon={icon}>
                    <Popup>
                        The Court is Yours!
                    </Popup>
                </Marker>
                <ResetCenterView/>
            </MapContainer>
        </div>
    )
}