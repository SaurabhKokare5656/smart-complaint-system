import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function NavbrAdmin() {

  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link as={Link} to="/Home">Home</Nav.Link>

            <Nav.Link as={Link} to="/Complaint">
              Complaint
            </Nav.Link>

            <Nav.Link as={Link} to="/CheckStatus">
              CheckStatus
            </Nav.Link>

            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>

            

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbrAdmin;