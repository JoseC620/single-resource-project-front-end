import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Snack( { snack } ) {

  return (
   <Container>
     <span>{snack.is_healthy ? '❤️' : null}</span>
     <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
     <Link to={`/snacks/${snack.id}`}>
     <img className="rounded mx-auto d-block" src={snack.image} alt='snack' width='150' height='150'/>
     </Link>
   </Container>
  );
}