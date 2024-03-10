import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >ERP</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to ="/">Dashboard</NavLink>
            <NavLink to="/order">Order</NavLink>
            <NavLink to="/product">Product</NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';


// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand>ERP</Navbar.Brand>
//           <Nav className="me-auto">
//             {/* Use Link components for navigation */}
//             <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
//             <Nav.Link as={Link} to="/order">Order</Nav.Link>
//             <Nav.Link as={Link} to="/product">Product</Nav.Link>

//             {/* Add other Nav.Link elements as needed */}
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;