import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/Logo.png'

const Header = () => {
    

    const [user] = useAuthState(auth)
    const handleSignOut =() =>{
        signOut(auth)
    }
    const [menu, setMenu] = useState(false);
    // const [mobileMenu, setMobileMenu] = useState(false);
    const navigate = useNavigate();
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
                            <Nav.Link as={Link} to="add-item">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="manage-items">Manage Items</Nav.Link>
                        </Nav>
                        <div>
                            {
                                user?
                                    <div>
                                        <button className='btn btn-link text-white text-decoration-none' onClick={() => navigate('/my-item')}>
                                            My Item
                                        </button>
                                        <button className='btn btn-link text-white text-decoration-none' onClick={() => navigate('/add-item')}>
                                            Add Item
                                        </button>
                                        <button className='btn btn-link text-white text-decoration-none' onClick={() => navigate('/manage-items')}>
                                            Manage Item
                                        </button>
                                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Log Out</button>
                                    </div>
                                :
                                
                                <Nav.Link className="text-light" as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;