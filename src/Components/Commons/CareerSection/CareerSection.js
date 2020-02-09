import React from 'react';
import Section from "../Section/Section";
import {Col, Row} from "react-bootstrap";
import HeaderText from "../HeaderText/HeaderText";
import ParagraphText from "../ParagraphText/ParagraphText";
import Button from "../Button/Button";
import meetMeBg from "../../../assets/img/Meet-me-bg@2x.png";
const CareerSection = ({button,func,text,header}) => {
    return (
        <Section className={'bg-patek-light-green py-5 meet-me-bg '}>
            <Row className={'py-lg-5 text-center'}>
                <Col lg={{span: 6, offset: 3}}>
                    <div className="mt-lg-5">
                        {header ? <HeaderText className='text-white fs-1-5 mt-lg-5 pt-lg-5 position-relative z-index-1'
                                              text={header}/> :''}
                        {text ?
                            <ParagraphText className={'text-white mb-lg-5 pb-lg-1 text-center position-relative z-index-1'}
                                           text={text}/>:''
                        }
                        {button ?<Button text={button} onClick={func} className={'position-relative z-index-1'}/>:''}
                    </div>
                </Col>
            </Row>
            <img src={meetMeBg} className='position-absolute w-lg-75 filter-brightness-0-3 d-none d-md-block center-center'
                 alt="meet me background"
            />
        </Section>
    );
};

export default CareerSection;