import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {
    const [ snack, setSnack ] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
    const { id } = useParams();
    const navigate = useNavigate();
    
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
        <h2>{snack.name}</h2>
        <img src={snack.image} alt="snack" height='100' width='100'/>
        <ul>
        <li>
        <span><b>Protein: </b>{snack.protein}</span>
        </li>
        <li>
        <span><b>Protein: </b>{snack.fiber}</span>
        </li>
        <li>
        <span><b>Protein: </b>{snack.sugar}</span>
        </li>
        <li>
        <span>Is this snack healthy?: {snack.is_healthy ? <span>✅</span> : <span>❌</span>}</span>
        </li>
        </ul>
    
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/snacks`} >
          <button>BACK</button>
          </Link>

          <Link to={`/snacks/${id}/edit`} >
          <button>EDIT</button>
          </Link>
          <button onClick={showModal}>DELETE</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this snack?</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>CANCEL</button>
          <button onClick={handleDelete}>DELETE</button>
        </Modal.Footer>
      </Modal>
        </div>
        </div>
    </Container>
  </div>
  );
};