import React from 'react';
import bannerImage from '../../../assets/img/bannerBg.svg';
import bannerImageLeft from '../../../assets/img/bannerBgLeft.svg';


const BannerSection = ({image, bgImagePosition = 'left'}) => {
    return (
        <div className='text-center py-5 px-5 ' style={{
            backgroundImage: `url(${bgImagePosition === 'left' ? bannerImageLeft : bannerImage})`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: bgImagePosition === 'left' ? '0% 0%' : '100% 0%'
        }}>
            <img src={image} className='img-fluid w-75 mb-10 bs-1 br-5' alt="banner image"/>
        </div>
    );
};

export default BannerSection;