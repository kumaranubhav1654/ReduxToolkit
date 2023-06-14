import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar=()=>{
    const cartProducts=useSelector(state=>state.cart);
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
            <Nav>
              <Nav.Link to="/" as={Link}>Products</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
    }
    
    export default NavBar