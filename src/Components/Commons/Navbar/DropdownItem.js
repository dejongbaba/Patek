import React from 'react';
import {Link} from "react-router-dom";
import dropdownIcon from "../../../assets/img/dropdown-item-icon.svg";

const DropdownItem = ({title, icon = dropdownIcon, linkClass, link = '#'}) => {
    return (
        <div>
            <a href={link} className={`${linkClass? linkClass :''} dropdown-item align-items-center`}>
                <span>{title}</span>
            </a>
        </div>
    );
};

export default DropdownItem;