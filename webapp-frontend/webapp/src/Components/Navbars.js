import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{ fontSize: '26px', fontWeight: '700', textDecoration: 'None', color: 'black' }} to="/">Car Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{ fontSize: '16px', fontWeight: '700', textDecoration: 'None', color: 'black' }} className='mx-4' to="/">Home</Link>
            <Link style={{ fontSize: '16px', fontWeight: '700', textDecoration: 'None', color: 'black' }} className='mx-4' to="/about">About</Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;