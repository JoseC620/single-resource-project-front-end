import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const API = process.env.REACT_APP_API_URL;

export default function SnackEditForm() {

    let { id } = useParams();
    let navigate = useNavigate();

    const [snack, setSnack] = useState({
        name: "",
        image: "",
        category: "",
        protein: "",
        fiber: "",
        sugar: "",
        serving_size: "",
        is_healthy: false
    });

    const updateSnack = (updatedSnack) => {
        axios
        .put(`${API}/snacks/${id}`, updatedSnack)
        .then(
            () => {
                navigate(`/snacks/${id}`);
              },
              (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    }

    const handleTextChange = (event) => {
        setSnack({...snack, [event.target.id]: event.target.value })
    }

    const handleCheckboxChange = () => {
        setSnack({ ...snack, is_healthy: !snack.is_healthy });
      };

    const handleCategoryChange = (event) => {
        setSnack({ ...snack, category: event.value });
      };

      useEffect(() => {
        axios
        .get(`${API}/snacks/${id}`)
        .then((res) => {
            console.log(res.data);
            setSnack(res.data);
        }).catch((e) => {
            console.warn('catch', e)
        })
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSnack(snack, id);
      };

    const options = ['cookies', 'chocolate', 'candy', 'chips']

    return(
        <div>
            <img src={snack.image} alt="snack" width='100' height='100'/>
            <form onSubmit={handleSubmit}>
                <label>Image</label>
                <input 
                id="image"
                value={snack.image}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label>Name</label>
                <input
                id="name"
                value={snack.name}
                type="text"
                onChange={handleTextChange}
                required
                />
                <label>Category</label>
                <Dropdown options={options} onChange={handleCategoryChange} value={snack.category} placeholder="Select an option" id='category'/>;
                <br />

                <input type="submit" />
            </form>
        </div>
    )
}