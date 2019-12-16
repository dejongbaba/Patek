import React from 'react';
import HeaderText from "../Commons/HeaderText/HeaderText";
import './contactinfo.css';

const ContactInfo = ({icon, title, children}) => {
    return (
        <div className='mb-3 mb-lg-0'>
            {icon && <img src={icon} className={'w-35 mb-3 mb-lg-0'} alt="contact icon"/>}
            <HeaderText className={'contact-info-header'} text={title}/>
            {children}
        </div>
    );
};

export default ContactInfo;