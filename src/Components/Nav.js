import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function Nav() {

  return (
    <NavBar bg='primary' expand='lg' varient='light'>
        <Container>
          <Link to={'/'}>Home</Link>
            <Link to={'/snacks'}>Snacks! click 🍪 here! </Link>
            <Button varient='light'>
                <Link to={'/snacks/new'}>🍪 New Snack</Link>
            </Button>
        </Container>
    </NavBar>
  );
}
