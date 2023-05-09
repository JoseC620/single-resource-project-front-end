import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
// const { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack } = require('../queries/snacks');

export default function SnackDetails() {
    const [ snack, setSnacks ] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios
        .get(`${API}/snacks/${id}`)
        .then((res) => {
            console.log(res.data);
            setSnacks(res.data);
        }).catch((e) => {
            console.warn('catch', e)
        })
    }, [id, API]);


    const deleteSnack = () => {
        axios.delete(`${API}/snacks/${id}`)
        .then(() => {
            navigate(`/snacks`);
        },
        (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    };

    const handleDelete = () => {
        deleteSnack();
    }

  return (
    <div className='snack-details'>
    <Container>
        <h2>{snacks}</h2>
        <p>{snacks}</p>
        <p>{snacks}</p>
        <p>{snacks}</p>
        <p>{snacks.is_healthy ? <span>♥️</span> : null} {snacks.name}</p>
    
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/snacks`} >
          <button>BACK</button>
          </Link>

          <Link to={`/snacks/${id}/edit`} >
          <button>EDIT</button>
          </Link>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </Container>
  </div>
  );
};