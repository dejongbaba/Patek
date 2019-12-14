import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {about, career, contact, home, news, sustainability, team} from "../../../routes/routes";
import './NavigationBar.css';
import './DropdownItem.css';
import DropdownItem from "./DropdownItem";
import {Link, NavLink} from "react-router-dom";

const NavigationBar = ({className, logo}) => {
    return (
        <>
            <Navbar className={`px-lg-5 pt-lg-3 z-index-1 navigation ${className ? className : ''}`} expand="lg">
                <Link className={'nav-brand'} to={home}>
                    <img src={logo} alt="patek logo" title='patek logo'/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-lg-2 navbar-nav">
                        <NavLink exact activeClassName={'active'} className="nav-link" to={home}>Home</NavLink>
                        <NavDropdown title="About" id="first-nav-dropdown">
                            <DropdownItem activeClassName={'active'} title={'about us'} link={about}/>
                            <DropdownItem activeClassName={'active'} title={'team'} link={team}/>
                        </NavDropdown>
                        <NavDropdown title="Subscidiaries" id="basic-nav-dropdown">
                            <div className="d-flex">
                                <div className="flex-item">
                                    <DropdownItem title={'Patec Foods'} link={'patec-food'}/>
                                    <DropdownItem title={'Quatlity Packaging'} link={'/quality-packaging'}/>
                                </div>
                                <div className="flex-item">
                                    <DropdownItem title={'Colorado Farms'} link={'colorado-farms'}/>
                                    <DropdownItem title={'Golden Foods'} link={'/golden-foods'}/>
                                </div>
                                <div className="flex-item">
                                    <DropdownItem title={'Trevali Food Distribution'}
                                                  link={'/traveli-food-distribution'}/>
                                </div>
                            </div>


                        </NavDropdown>
                        <NavLink activeClassName={'active'} className="nav-link" to={career}>Careers</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link" to={sustainability}>Sustainability</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link" to={news}>News/Events</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link" to={contact}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavigationBar;