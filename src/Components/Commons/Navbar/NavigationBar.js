import React, {useEffect, useRef, useState} from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {
    about,
    career,
    coloradoFarm,
    contact,
    goldenFood,
    home,
    news,
    patecFood,
    qualityPackaging,
    sustainability,
    traveliFood
} from "../../../routes/routes";
import './NavigationBar.css';
import './DropdownItem.css';
import DropdownItem from "./DropdownItem";
import {Link, NavLink} from "react-router-dom";
import inverseLogo from '../../../assets/img/patek-logo-inverse@2x.png';

const NavigationBar = ({className, logo, type}) => {


    const navEl = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let subscribe = true;
        if (subscribe) {
            window.onscroll = function () {
                changeNavBg(navEl)
            };
        }
        return () => {
            subscribe = false;
        }
    }, []);

    const changeNavBg = (el) => {
        const offset = 30;
        if (el && el.current) {
            let sticky = el.current.offsetTop;
            if (el && el.current.classList) {
                if (window.pageYOffset >= sticky + offset) {
                    el.current.classList.add("sticky-bg");
                } else {
                    el.current.classList.remove("sticky-bg");
                }
            }
        }
    };

    changeNavBg(navEl);

    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };


    return (
        <>
            <Navbar
                ref={navEl}
                className={`px-lg-5 pt-lg-3 z-index-1 ${type === 'inverse' ? 'inverse' : ''} navigation ${className ? className : ''}`}
                expand="lg">
                <Link className={'nav-brand'} to={home}>
                    {type === 'inverse' ?
                        <img src={inverseLogo} alt="patek logo" title='patek logo'/>
                        :
                        <img src={logo} alt="patek logo" title='patek logo'/>
                    }
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-lg-2 navbar-nav">
                        <NavLink exact activeClassName={'active'} className="nav-link" to={home}>Home</NavLink>
                        <NavLink activeClassName={'active'} className="nav-link" to={about}>About Us</NavLink>
                        <NavDropdown title="Subsidiaries" id="basic-nav-dropdown"
                                     onMouseEnter={handleOpen}
                                     onMouseLeave={handleClose}
                                     show={isOpen}
                        >
                            <div className="d-flex flex-column flex-md-row">
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