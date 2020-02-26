import React from 'react';
import bgImage from '../../../assets/img/article-bg-left-img.svg'

const ArticleImage = ({
                          image, bgImagePosition = 'left',
                          type, animation, animationDelay, animationDuration, imageClass
                      }) => {

    if (type === 'line') {
        return (
            <div>
                <img src={image} className={`w-50 ${imageClass ? imageClass : ''}`} alt="article image"/>
            </div>
        )

    }
    if (type === 'fluid') {

        return (
            <img src={image} className={`w-100 img-fluid ${imageClass ? imageClass : ''}`} alt="fluid article image"/>
        )

    }

    return (
        <div
            data-aos={`${animation ? animation : 'ease-in-out'}`}
            data-aos-easing={`ease-in-out`}
            data-aos-delay={`${animationDelay ? animationDelay : '500'}`}
            data-aos-once={`true`}
            data-aos-duration={`${animationDuration ? animationDuration : '1000'}`}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: '33%',
                backgroundPosition: bgImagePosition === "left" ? '-10% 100%' : '23% 30%',
                backgroundRepeat: 'no-repeat',
            }}>
            <img src={image} className={`w-50 ${imageClass ? imageClass : ''}`} alt="article image"/>
        </div>
    );
};

export default ArticleImage;