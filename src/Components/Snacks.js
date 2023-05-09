import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;


export default function Snacks() {

    const [snacks, setSnacks] = useState([])

    useEffect(() => {
        axios
        .get(`${API}/snacks`)
        .then((response) =>{
            setSnacks(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.warn(error)
        })
    }, [])

    return(
        <div>
            {snacks.map((snack) => {
                return (
                    <div key={snack.id}>
                        <ul>
                            <Link to={`/snacks/${snack.id}`}>
                            <img src={snack.image} width="100" height="100" alt="snack"/>
                            {snack.name}
                            </Link>
                        </ul>
                    </div>
                    
                )
            })}
        </div>
    )
}