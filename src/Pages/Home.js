import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
      <div className="Home">
        <Container>
          <h1>
            Welcome to Our <span className="blue">Snacks React App</span>
          </h1>
          <br></br> <br></br>
          <h3 className="italic">Changing the world 1 Snack at a time ❤️.</h3>
          <img
            src="https://www.oh-snack.com/wp-content/uploads/2021/07/logo-header.png"
            alt="oh snack"
          />
          <p>
            A snack a day keeps the Doctor Away.
          </p>
          <Link to="/snacks">
            <Button variant="primary">Visit Our Snacks 🍪</Button>
          </Link>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <img className='spinner'
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/snacks-in-america.jpg?quality=82&strip=1&w=640"
            alt="best of snacks"
          />
        </Container>
      </div>
    );
  }
