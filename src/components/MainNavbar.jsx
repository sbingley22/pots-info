import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"

const MainNavbar = () => {
  return (
    <Navbar expand="lg" style={{borderBottom: "solid 2px black", marginBottom: "15px"}}>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/glycocaylx" className='nav-link'>Glycocaylx</Link>
          <Link to="/immune-cells" className='nav-link'>Immune Cells</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNavbar
