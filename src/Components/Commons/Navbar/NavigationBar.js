import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {about, career, contact, home, news, sustainability} from "../../../routes/routes";

const NavigationBar = ({className,logo}) => {
    return (
        <>
            <Navbar className={`px-lg-5 pt-lg-3 z-index-1 navigation ${className ? className : ''}`} expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="patek logo" title='patek logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={home} className="ml-auto mr-lg-2 navbar-nav">
                        <Nav.Link href={home}>Home</Nav.Link>
                        <Nav.Link href={about}>About</Nav.Link>
                        <NavDropdown title="Subscidiaries" id="basic-nav-dropdown">
                            <div className="d-flex">
                                <div className="flex-item">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </div>
                                <div className="flex-item">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </div>
                                <div className="flex-item">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                </div>
                            </div>


                        </NavDropdown>
                        <Nav.Link href={career}>Careers</Nav.Link>
                        <Nav.Link href={sustainability}>Sustainability</Nav.Link>
                        <Nav.Link href={news}>News/Events</Nav.Link>
                        <Nav.Link href={contact}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavigationBar;