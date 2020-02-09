import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import TextLabel from "../TextLabel/TextLabel";
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";
import HeaderText from "../HeaderText/HeaderText";
import SubscriptionForm from "../SubscriptionForm/SubcriptionForm";
import Section from "../Section/Section";
import './subscription.css';

class SubscriptionSection extends Component {
    render() {
        return (
            <Section className={'subscription bg-patek-light-green py-lg-3 mh-vh-50'}>
                <Row className='py-5 text-center'>
                    <Col lg={{span: 8, offset: 2}}>
                        <TextLabel className='patek-green subscription--text-label' positionClass='justify-content-center mb-5 mb-lg-0'
                                   icon={threeCircleIcon} text='NEWSLETTERS'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green subscription--header-text'}
                                    text={'Subscribe to our Newsletters '}/>
                        <SubscriptionForm />
                    </Col>
                </Row>
            </Section>
        );
    }
}

export default SubscriptionSection;