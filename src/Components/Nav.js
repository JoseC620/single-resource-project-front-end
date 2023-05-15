import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function Nav() {

  return (
    <NavBar bg='primary' expand='lg' varient='light'>
        <Container>
          <Link to={'/'} style={{color: "Black"}}>Home</Link>
            <Link to={'/snacks'} style={{color: "Black"}}>Snacks! click 🍪 here! </Link>
                <Link to={'/snacks/new'} style={{color: "Black"}}>🍪 Make A New Snack!</Link>
        </Container>
    </NavBar>
  );
}
