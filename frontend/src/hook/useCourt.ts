import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Court} from "../model/Court";

export default function useCourt() {
    const [locations, setLocations] = useState([]);
    const getAllLocations = () => {
        axios.get("/api/locations")
            .then((response)=>{return response.data})
            .then((data)=>{setLocations(data)})

            .catch((error)=> console.error(error))
    }

    function addNewCourt(newCourt: Court){
        axios.post("/api/locations", newCourt)
            .then((response)=>console.log(response))
            .then(()=>toast.success("UR Court Is Ready"))
            .then(()=>getAllLocations())
    }

    return {locations, getAllLocations, addNewCourt}
}

