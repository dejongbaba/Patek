import React from 'react';
import {Link} from 'react-router-dom';
import ParagraphText from "../ParagraphText/ParagraphText";
import './articleLayout.css';



const ArticleLayout = ({img, className, category, topic, text, type, link, date}) => {

    if (type === 'line') {
        return (
            <>
                <div
                     className="mb-5 border-top-line pt-5">
                    <div className={`d-flex flex-column flex-lg-row align-items-lg-center 
                    ${topic?'justify-content-lg-between':'justify-content-lg-start' } 
                    mb-5`}>
                        <h3 className='quenales-bold text-capitalize patek-deep-green'>
                            {topic}
                        </h3>
                        <p className='bg-patek-green px-5 py-3 br-2 text-white-80 mb-0'>
                            {category}
                        </p>
                    </div>
                    <ParagraphText className='mb-3' text={text}/>
                    {link ? <Link className={'patek-link'} to={link}>Read More</Link> : ''}
                </div>
            </>
        )
    }

    if (type === 'intent') {
        return (
            <>
                <div className='d-flex align-items-center'>
                    {img && <img src={img} className='w-150px mr-2' alt="intent icon"/>}
                    <h3 className='flex-basis-250px mb-0 position-relative mr-5'>{topic}</h3>
                    <ParagraphText className='mb-0 px-5 border-left-green' text={text}/>
                </div>
            </>
        )
    }

    if (type === 'blog') {
        return (
            <div className="mb-5 border-top-line-only pt-5">
                <div className="position-relative">
                    <div className="h-250 overflow-hidden"
                         style={{
                             backgroundImage: `url(${img})`,
                             backgroundSize: 'cover',
                             backgroundPosition: 'center center',
                             backgroundRepeat: 'no-repeat'
                         }}
                    />
                    <div className="position-absolute ls-0-5 fs-0-7 text-uppercase text-white
                     z-index-1 left-bottom-2-10 py-lg-2 px-lg-4 bg-black ">
                        {category}
                    </div>
                </div>
                <h3 className='quenales-bold mt-3 fs-1-5 text-capitalize patek-deep-green'>
                    {topic}
                </h3>
                <ParagraphText className='mb-3 patek-deep-green' text={text}/>
                <div className="d-flex justify-content-between">
                    <p className='font-weight-bold fs-1 patek-deep-green'>{date}</p>
                    {link ? <Link className={'patek-link'} to={link}>Read More</Link> : ''}
                </div>

            </div>
        )
    }

    return (
        <>
            <div style={{background: `url(${img})`, backgroundSize: 'cover'}}
                 className={`position-relative ${className ? className : ''}`}>
                <div
                    className="position-absolute ls-0-5 fs-0-7 text-uppercase text-white
                     z-index-1 left-bottom-10-40 py-2 px-4 bg-black bottom-center">
                    {category}
                </div>
                <div
                    className="position-absolute text-white height-40 py-lg-4 px-lg-4
                    bottom-center bg-faded-black w-100">
                    <h5 className='text-white'>{topic}</h5>
                    <p className='text-gray'>{text}</p>
                </div>
            </div>
        </>
    );
};

export default ArticleLayout;