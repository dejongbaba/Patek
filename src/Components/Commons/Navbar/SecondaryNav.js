import React from 'react';
import './SecondaryNav.css';
import {NavLink} from "react-router-dom";
import {blog, coloradoFarm, event, goldenFood, news, patecFood, traveliFood} from "../../../routes/routes";
import GridLiner from "../GridLines/GridLiner";

const SecondaryNav = ({type, className}) => {
    if (type === 'blog') {
        return (
            <ul className={`${className ? className : ''} list-unstyled position-relative secondary-nav px-lg-5 text-uppercase d-flex flex-column flex-lg-row mb-0 pt-lg-5`}>
                <li>
                    <NavLink activeClassName={'active'} to={news} className={'secondary-nav__link'}>News</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={'active'} to={event} className={'secondary-nav__link'}>Event</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={'active'} to={blog} className={'secondary-nav__link'}>Blog</NavLink>
                </li>
            </ul>
        )
    }
    return (
        <ul className={`${className ? className : ''} list-unstyled secondary-nav text-uppercase d-flex flex-column flex-lg-row mb-0 pt-lg-5`}>
            <li>
                <NavLink activeClassName={'active'} to={patecFood} className={'secondary-nav__link active'}>Patec Foods</NavLink>
            </li>
            <li>
                <NavLink activeClassName={'active'} to={patecFood} className={'secondary-nav__link'}>Quality Packaging</NavLink>
            </li>
            <li>
                <NavLink activeClassName={'active'} to={coloradoFarm} className={'secondary-nav__link'}>Colorado Farms</NavLink>
            </li>
            <li>
                <NavLink activeClassName={'active'} to={goldenFood} className={'secondary-nav__link'}>Golden Foods</NavLink>
            </li>
            <li><NavLink activeClassName={'active'} to={traveliFood} className={'secondary-nav__link'}>TREVALI FOOD DISTRIBUTION</NavLink>
            </li>
        </ul>
    );
};

export default SecondaryNav;