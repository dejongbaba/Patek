import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import twitter from "../../../assets/img/patek-twitter.png";
import facebook from "../../../assets/img/patek-facebook.png";
import TextLabel from "../TextLabel/TextLabel";
import GridLiner from "../GridLines/GridLiner";

const ArticleBio = () => {
    return (
        <div className='border-top-line-only bg-patek-light-green' >
            <GridLiner/>
            <Container>
                <Row>
                    <Col lg={{span: 8, offset: 2}}>
                        <div className="article-bio">
                            <div className="mt-5">
                                <div className="flex">
                                    <img src="" alt=""/>
                                    <div className="article-user-info">
                                        <p>Slyvester Anuchi</p>
                                        <TextLabel positionClass={'mb-4'} text={'Author'} icon={false}/>
                                        <div className={'mb-4'}>
                                            <img src={twitter} className={'mr-3'} alt=""/>
                                            <img src={facebook} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default ArticleBio;