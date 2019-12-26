import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {
    about,
    career,
    coloradoFarm,
    contact, goldenFood,
    home,
    news,
    patecFood,
    qualityPackaging,
    sustainability, traveliFood
} from "../../../routes/routes";
import './NavigationBar.css';
import './DropdownItem.css';
import DropdownItem from "./DropdownItem";
import {Link, NavLink} from "react-router-dom";
import inverseLogo from '../../../assets/img/patek-logo-inverse@2x.png';

const NavigationBar = ({className, logo, type}) => {
    return (
        <>
            <Navbar
                className={`px-lg-5 pt-lg-3 z-index-1 ${type === 'inverse' ? 'inverse' : ''} navigation ${className ? className : ''}`}
                expand="lg">
                <Link className={'nav-brand'} to={home}>
                    {type==='inverse'?
                    <img src={inverseLogo} alt="patek logo" title='patek logo'/>
                    :
                    <img src={logo} alt="patek logo" title='patek logo'/>
                    }
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-lg-2 navbar-nav">
                        <NavLink exact activeClassName={'active'} className="nav-link" to={home}>Home</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link" to={about}>About</NavLink>
                        <NavDropdown title="Subscidiaries" id="basic-nav-dropdown">
                            <div className="d-flex">
                                <div className="flex-item">
                                    <DropdownItem title={'Patec Foods'} link={patecFood}/>
                                    <DropdownItem title={'Quatlity Packaging'} link={qualityPackaging}/>
                                </div>
                                <div className="flex-item">
                                    <DropdownItem title={'Colorado Farms'} link={coloradoFarm}/>
                                    <DropdownItem title={'Golden Foods'} link={goldenFood}/>
                                </div>
                                <div className="flex-item">
                                    <DropdownItem title={'Trevali Food Distribution'}
                                                  link={traveliFood}/>
                                </div>
                            </div>

                        </NavDropdown>
                        <NavLink activeClassName={'active'} className="nav-link" to={career}>Careers</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link"
                                 to={sustainability}>Sustainability</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link" to={news}>News/Events</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link" to={contact}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavigationBar;