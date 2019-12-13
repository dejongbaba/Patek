import React from 'react';
import './SecondaryNav.css';

const SecondaryNav = ({type}) => {
    if(type==='blog'){
        return (
            <ul className='list-unstyled secondary-nav px-lg-5 text-uppercase d-flex mb-0 pt-lg-5'>
                <li><a href="" className={'secondary-nav__link active'}>News</a></li>
                <li><a href="" className={'secondary-nav__link'}>Event</a></li>
                <li><a href="" className={'secondary-nav__link'}>Blog</a></li>
            </ul>
        )
    }
    return (
            <ul className='list-unstyled secondary-nav text-uppercase d-flex mb-0 pt-lg-5'>
                <li><a href="" className={'secondary-nav__link active'}>Patec Foods</a></li>
                <li><a href="" className={'secondary-nav__link'}>Quality Packaging</a></li>
                <li><a href="" className={'secondary-nav__link'}>Colorado Farms</a></li>
                <li><a href="" className={'secondary-nav__link'}>Golden Foods</a></li>
                <li><a href="" className={'secondary-nav__link'}>TREVALI FOOD DISTRIBUTION</a></li>
            </ul>
    );
};

export default SecondaryNav;