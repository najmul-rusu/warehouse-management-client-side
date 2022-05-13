import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/Logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut =() =>{
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={35} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="home#services">Services</Nav.Link> */}
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="inventory-items">Inventory</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button>
                                :
                                
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;