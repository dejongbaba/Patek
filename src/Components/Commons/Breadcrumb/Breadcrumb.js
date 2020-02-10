import React from 'react';
import './breadcrumb.css';

const Breadcrumb = ({links, linkClass = '', containerClass = 'mb-lg-3'}) => {

    //TODO handle active link
    const currentPath = window.location.pathname;

    return (
        <div className={containerClass + ' nav-breadcrumb'}>
            {links && links.length > 0 ?
                links.map((link, i) => {
                    return (i === links.length - 1) ?
                        <a key={i}
                           className={`text-uppercase ${linkClass} ${link.path === currentPath ? 'text-white font-weight-bold' : 'text-gray'}`}
                           href={link.path}>{link.name}</a> :
                            <span key={i}>
                                <a className={`text-uppercase text-gray ${linkClass}`} href={link.path}>{link.name}
                                </a>&nbsp;<span key={i} className={'text-white mx-lg-1'}>|</span>&nbsp;
                            </span>
                }) : ''
            }
        </div>
    );
};

export default Breadcrumb;