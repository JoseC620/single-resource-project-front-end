import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Dropdown from 'react-dropdown';
import { Container, Col, Row, Form } from "react-bootstrap";
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

    
    const handleIsHealthy = () => {
        if((snack.protein >= 5 || snack.fiber >= 5) && snack.sugar <= 5){
            snack.is_healthy = true
        } else {
            snack.is_healthy = false
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleIsHealthy();
        updateSnack(snack, id);
      };
    
    const options = ['cookies', 'chocolate', 'candy', 'chips']

    return(
        <div>
            <img src={snack.image} alt="snack" width='300' height='300'/>
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
                <br />
                <label>Category</label>
                <Dropdown 
                className="drop"
                options={options} 
                onChange={handleCategoryChange} 
                value={snack.category} 
                placeholder="Select an option" 
                id='category'
                />
                <label>Protein</label>
                <input 
                id="protein"
                value={snack.protein}
                type="number"
                onChange={handleTextChange}
                required
                />
                <label>Fiber</label>
                <input 
                id="fiber"
                value={snack.fiber}
                type="number"
                onChange={handleTextChange}
                required
                />
                <label>Sugar</label>
                <input 
                id="sugar"
                value={snack.sugar}
                type="number"
                onChange={handleTextChange}
                required
                />
                <label>Serving Size</label>
                <input 
                id="serving_size"
                value={snack.serving_size}
                type="text"
                onChange={handleTextChange}
                required
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}