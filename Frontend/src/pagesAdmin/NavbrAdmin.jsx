import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';



function Navbr() {
  const location = useLocation();
  if(location.pathname === '/'){
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
           
            <Nav.Link as={Link} to="/HomeAdmin">Home</Nav.Link>

            <Nav.Link as={Link} to="/CheckComplaint">
              Check Complaint
            </Nav.Link>

            <Nav.Link as={Link} to="/Actioncomplaint">
              Action Complaint
            </Nav.Link>

            <Nav.Link as={Link} to="/ViewStatus">
              View Status
            </Nav.Link>

            <Nav.Link as={Link} to="/ContactMessages">
              Contact Messages
            </Nav.Link>
            
              
              




            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbr;