import React from 'react';
import {Link} from "react-router-dom";
import dropdownIcon from "../../../assets/img/dropdown-item-icon.svg";

const DropdownItem = ({title, icon = dropdownIcon, linkClass, link = '#'}) => {
    return (
        <div>
            <a href={link} className={`${linkClass? linkClass :''} dropdown-item align-items-center`}>
                {/*<img src={icon} className='mr-lg-1 mr-3' alt="dropdown icon"/>*/}
                <span>{title}</span>
            </a>
        </div>
    );
};

export default DropdownItem;