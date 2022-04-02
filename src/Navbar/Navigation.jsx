import { Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Navigation.css';


const Navigation = () => {

    const location = useLocation()

    const setActiveKey = () => {
        return (location.pathname === "/") ? "/home" : location.pathname;
    }

    console.log(setActiveKey())

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"><h1>Aaron Cruz</h1></Navbar.Brand>
            <Nav variant="tabs" defaultActiveKey="/home" activeKey={setActiveKey()} className="flex-column">
                <Nav.Link as={Link} to="/" eventKey="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" eventKey="/about" >About</Nav.Link>
                <Nav.Link as={Link} to="/projects" eventKey="/projects">Projects</Nav.Link>
                <Nav.Link as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
            </Nav>
            <Outlet />
        </Navbar>
    )
}

export default Navigation;