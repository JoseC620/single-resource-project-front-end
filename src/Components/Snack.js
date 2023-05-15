import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Snack( { snack } ) {

  return (
   <Container>
    <table>
     <td>{snack.is_healthy ? '❤️' : null}</td>
     <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
     <img class="rounded mx-auto d-block" src={snack.image} alt='snack' width='150' height='150'/>
     </table>
   </Container>
  );
}