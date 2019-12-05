import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumb = ({links, linkClass = '', containerClass = 'mb-lg-3'}) => {

    //TODO handle active link

    return (
        <div className={containerClass}>
            {links && links.length > 0 ?
                links.map((link, i) => {
                    return (i === links.length - 1) ?
                        <Link className={` text-white ${linkClass}`} href={link.path}>{link.name}</Link> :
                        <>
                            <Link className={` text-white ${linkClass}`} href={link.path}>{link.name}</Link>
                            <span className={'text-white mx-lg-1'}>|</span>
                        </>

                }) : ''
            }
        </div>
    );
};

export default Breadcrumb;