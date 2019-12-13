import React from 'react';
import HeaderText from "../Commons/HeaderText/HeaderText";
import './contactinfo.css';

const ContactInfo = ({icon, title, children}) => {
    return (
        <div>
            {icon && <img src={icon} alt="contact icon"/>}
            <HeaderText className={'contact-info-header'} text={title}/>
            {children}
        </div>
    );
};

export default ContactInfo;