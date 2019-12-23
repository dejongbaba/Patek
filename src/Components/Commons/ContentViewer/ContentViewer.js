import React from 'react';
import {Col, Row} from "react-bootstrap";
import Section from "../Section/Section";

const ContentViewer = ({content}) => {
    return (
        <Section className={'bg-patek-light-green'}>
            <Row>
                <Col lg={{span: 8, offset: 2}}>
                    <div className="article-content">
                        {content}
                    </div>
                </Col>
            </Row>
        </Section>
    );
};

export default ContentViewer;