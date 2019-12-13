import React, {Component} from 'react';
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";

class CircleIcon extends Component {
    render() {
        return (
            <img src={threeCircleIcon} className={'mb-lg-3'} alt="circle icon"/>
        );
    }
}

export default CircleIcon;