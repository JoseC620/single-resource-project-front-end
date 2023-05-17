import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Nav() {

  return (
    <Navbar bg='primary' expand='lg' varient='light'>
        <Container>
          <Link to={'/'} style={{color: "Black"}}>Home</Link>
            <Link to={'/snacks'} style={{color: "Black"}}>Snacks! click 🍪 here! </Link>
                <Link to={'/snacks/new'} style={{color: "Black"}}>🍪 Make A New Snack!</Link>
        </Container>
    </Navbar>
  );
}
