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
        <table>
        <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
          </table>
        </div>
    )
}