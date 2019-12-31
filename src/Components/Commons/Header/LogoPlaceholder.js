import React from 'react';
import patekFoodLogo from "../../../assets/img/patek-food-logo.svg";
import headerImage from "../../../assets/img/headr-article-img@2x.png";
import './LogoPlaceholder.css';
import moment from "moment";

const LogoPlaceholder = ({type,image=headerImage,category,text,date}) => {
    if(type === 'blog'){
        return (
            <div className='bg-white position-absolute d-none d-lg-block px-2 py-2 px-lg-5 py-lg-5 w-500px header-card logo-placeholder h-auto '>
                <div className="placeholder-image-cover position-relative">
                    <img src={image} className='w-100' alt="patek food logo "/>
                    <div className="placeholder-label position-absolute px-3 py-2 bg-black text-white">{category}</div>
                </div>
                <p className={'text-underline mt-2 mt-lg-4'}>{text}</p>
                <span className='font-weight-bold'>{moment(date).format('ll')}</span>
            </div>
        )
    }
    return (
        <div className='bg-white position-absolute d-none d-lg-flex logo-placeholder align-items-center justify-content-center'>
            <img src={patekFoodLogo} className='w-50' alt="patek food logo "/>
        </div>
    );
};

export default LogoPlaceholder;