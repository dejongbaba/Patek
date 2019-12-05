import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {about, career, contact, home, news, sustainability} from "../../../routes/routes";
import './NavigationBar.css';
import './DropdownItem.css';
import DropdownItem from "./DropdownItem";
import {Link} from "react-router-dom";

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
                        <Link className="nav-link" to={home}>Home</Link>
                        <Link className="nav-link" to={about}>About</Link>
                        <NavDropdown title="Subscidiaries" id="basic-nav-dropdown">
                            <div className="d-flex">
                                <div className="flex-item">
                                    <DropdownItem title={'Patec Foods'} link={'patec-food'} />
                                    <DropdownItem title={'Quatlity Packaging'} link={'/quality-packaging'} />
                                </div>
                                <div className="flex-item">
                                    <DropdownItem title={'Colorado Farms'} link={'colorado-farms'} />
                                    <DropdownItem title={'Golden Foods'} link={'/golden-foods'} />
                                </div>
                                <div className="flex-item">
                                    <DropdownItem title={'Trevali Food Distribution'} link={'/traveli-food-distribution'} />
                                </div>
                            </div>


                        </NavDropdown>
                        <Link className="nav-link" to={career}>Careers</Link>
                        <Link className="nav-link" to={sustainability}>Sustainability</Link>
                        <Link className="nav-link" to={news}>News/Events</Link>
                        <Link className="nav-link" to={contact}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavigationBar;