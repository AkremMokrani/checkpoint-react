
import './Navbarrr.css';
import { Navbar , Nav , Container } from 'react-bootstrap';

function Navbarrr(){
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">NIKE</Navbar.Brand>
        <Nav className="me-auto nav">
          <Nav.Link href="#home" className="link">Home</Nav.Link>
          <Nav.Link href="#features" className="link">Features</Nav.Link>
          <Nav.Link href="#pricing"className="link">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )

}


export default Navbarrr
