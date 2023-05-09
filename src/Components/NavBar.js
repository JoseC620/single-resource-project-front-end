import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function nav () {

  return (
    <NavBar bg='primary' expand='lg' varient='light'>
        <Container>
            <NavBar.Brand>Snacks! click 🍪 here! </NavBar.Brand>
            <Button varient='light'>
                <Link to={'snacks/new'}>🍪 New Snack</Link>
            </Button>
        </Container>
    </NavBar>
  );
}
