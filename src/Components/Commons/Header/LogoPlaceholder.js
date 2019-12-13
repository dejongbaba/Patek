import React from 'react';
import patekFoodLogo from "../../../assets/img/patek-food-logo.svg";
import headerImage from "../../../assets/img/headr-article-img@2x.png";
import './LogoPlaceholder.css';

const LogoPlaceholder = ({type,image=headerImage,category,text,date}) => {
    if(type === 'blog'){
        return (
            <div className='bg-white position-absolute px-lg-5 py-md-5 w-500px logo-placeholder h-auto '>
                <div className="placeholder-image-cover position-relative">
                    <img src={image} className='img-fluid' alt="patek food logo "/>
                    <div className="placeholder-label position-absolute px-3 py-2 bg-black text-white">{category}</div>
                </div>
                <p className={'text-underline mt-lg-4'}>{text}</p>
                <span className='font-weight-bold'>{date}</span>
            </div>
        )
    }
    return (
        <div className='bg-white position-absolute logo-placeholder d-flex align-items-center justify-content-center'>
            <img src={patekFoodLogo} className='w-50' alt="patek food logo "/>
        </div>
    );
}

export default LogoPlaceholder;