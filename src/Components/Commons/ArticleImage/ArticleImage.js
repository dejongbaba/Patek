import React from 'react';
import bgImage from '../../../assets/img/article-bg-left-img.svg'
import LinebgImage from '../../../assets/img/line-bg-image.svg'

const ArticleImage = ({image, bgImagePosition = 'left',type}) => {

    if(type==='line'){
        return (
            <div>
                <img src={image}  alt="article image"/>
            </div>
        )

    }
    if(type==='fluid'){
        return (
            <img src={image} className={'img-fluid'} alt="article image"/>
        )

    }

    return (
        <div style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize:'33%',
            backgroundPosition: bgImagePosition === "left" ? '-10% 100%' : '23% 30%',
            backgroundRepeat:'no-repeat',
        }}>
            <img src={image} alt="article image"/>
        </div>
    );
};

export default ArticleImage;