import Modal from "react-bootstrap/Modal"
import "bootstrap/dist/css/bootstrap.min.css"
import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import "./AddNewCourtModal.css";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

import useCourt from "../hook/useCourt";
import {Court} from "../model/Court";

type AddNewCourtModalProps = {
    show : boolean
    onHide : ()=> void
}

export default function AddNewCourtModal(props: AddNewCourtModalProps) {
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0,0]);
    const [courtName, setCourtName] = useState("");
    const [courtPlace, setCourtPlace] = useState({lat:0, lon:0});
    const [isClickedPlace, setIsClickedPlace] = useState(false);
    const {addNewCourt} = useCourt()

    const icon = L.icon(
        {
            iconUrl:"./placeholder.png",
            iconSize:[15,15]
        }
    )

    const Markers = ()=> {
        useMapEvents({
            click(e){
                setSelectedPosition(
                    [e.latlng.lat, e.latlng.lng]
                )
            }
        })
        return (
            selectedPosition ?
            <Marker
                key={selectedPosition[0]}
                position={selectedPosition}
                interactive={false}
                icon={icon}
            />
                : null
        )
    }

    function handleSubmit() {
        const newCourt:Court={
            id: "",
            lat: courtPlace.lat,
            lon: courtPlace.lon,
            name: courtName,
            photo: imageSelected?.name.split(".")[0],
            rating: ""
        }
        addNewCourt(newCourt)
    }

    function handleOnClickPlace() {
        setIsClickedPlace(!isClickedPlace)
        if(isClickedPlace){
            selectedPosition ?
                setCourtPlace({lat:selectedPosition[0], lon:selectedPosition[1]})
                : setCourtPlace({lat:0, lon:0})
        }
    }
    const [imageSelected, setImageSelected] = useState<File>()
    function uploadImage() {

            const formData = new FormData();
            const imgName: string | undefined = imageSelected?.name.split(".")[0]
            formData.append("file", imageSelected!)
            formData.append("public_id", imgName!);
            formData.append("upload_preset", "zdn4stge")

            axios.post("https://api.cloudinary.com/v1_1/ds9ndbe2v/image/upload", formData)
                .then((response) => console.log(response))
                .then(()=>toast.success("️The Court Is URs"))
    }

    return (
        <Modal show={props.show} animation={true}
           size="xl"
           aria-labelledby="contained-modal-title-vcenter"
           centered>

        <Modal.Header>
            <Modal.Title>Add UR Own Court!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className={"div-map-modal"}>
                <MapContainer className={"map"} center={[51.07380881233824, 10.366612768843467] || selectedPosition}  zoom={5}
                              style={{height:200}}
                >
                    <Markers />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=Kbj8H7YVAHDxxoLRTnz3"
                    />
                </MapContainer>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        UR Court
                    </label>
                    <input type="text" className="form-control"
                           placeholder="Enter name of your Court"
                           value={courtName}
                           onChange={(event)=>setCourtName(event.target.value)}/>
                    <label>Court Place</label>
                    <input type="text" className="form-control"
                           placeholder="Choose UR Court"
                           value={`${courtPlace.lat}, ${courtPlace.lon}`}
                           onClick={handleOnClickPlace}
                           readOnly={true}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03"
                                onClick={uploadImage} >Upload
                        </button>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile03"
                               aria-describedby="inputGroupFileAddon03"
                               onChange={(event)=>setImageSelected(event.target.files![0])}/>

                        <label className="custom-file-label" htmlFor="inputGroupFile03">Choose your thumbnail</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" id={"btn-submit-add-route"}>Submit</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <form>
                <input type={"button"} onClick={props.onHide} value={"Close"}/>
            </form>
        </Modal.Footer>
    </Modal>
)
}
