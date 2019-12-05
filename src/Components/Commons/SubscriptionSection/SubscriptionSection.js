import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import TextLabel from "../TextLabel/TextLabel";
import threeCircleIcon from "../../../assets/img/three-circle-icon.svg";
import HeaderText from "../HeaderText/HeaderText";
import SubscriptionForm from "../SubscriptionForm/SubcriptionForm";
import Section from "../Section/Section";

class SubscriptionSection extends Component {
    render() {
        return (
            <Section className={'bg-patek-light-green py-lg-5 mh-vh-50'}>
                <Row className='py-lg-5 text-center'>
                    <Col lg={{span: 8, offset: 2}}>
                        <TextLabel className='patek-green' positionClass='justify-content-lg-center'
                                   icon={threeCircleIcon} text='NEWSLETTERS'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '}
                                    text={'Subscribe to our Newsletters'}/>
                        <SubscriptionForm/>
                    </Col>
                </Row>
            </Section>
        );
    }
}

export default SubscriptionSection;