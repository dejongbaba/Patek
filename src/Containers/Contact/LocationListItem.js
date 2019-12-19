import React from 'react';
import Button from "../../Components/Commons/Button/Button";
import './locationlistItem.css';

const LocationListItem = ({number, text, func, locationTitle}) => {
    return (
        <div className='mb-3'>
            <div className="d-flex align-items-center mb-3">
                <div className="number-template text-center bg-patek-light-green mr-2">{number}</div>
                <p className={'mb-0 text-capitalize'}>{text}</p>
            </div>
            <Button className={'patek-light-bg text-patek-green'}
                    onClick={func}
                    text={locationTitle}
            />
        </div>
    );
};

export default LocationListItem;