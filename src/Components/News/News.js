import React from 'react';
import Header from "../Commons/Header/Header";
import AboutBgImg from "../../assets/img/about-bg-image.svg";
import newsHeader from "../../assets/img/news-header-img@2x.png";
import {Col, Row} from "react-bootstrap";
import Breadcrumb from "../Commons/Breadcrumb/Breadcrumb";
import {home, patecFood} from "../../routes/routes";
import HeaderText from "../Commons/HeaderText/HeaderText";
import LogoPlaceholder from "../Commons/Header/LogoPlaceholder";
import SecondaryNav from "../Commons/Navbar/SecondaryNav";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import TextLabel from "../Commons/TextLabel/TextLabel";
import threeCircleIcon from "../../assets/img/three-circle-icon.svg";
import threeWhiteDots from "../../assets/img/three-white-dots.svg";
import ArticleLayoutImg from "../../assets/img/article-layout-image@2x.png";
import Section from "../Commons/Section/Section";
import ArticleLayout from "../Commons/ArticleLayout/ArticleLayout";
import Button from "../Commons/Button/Button";
import SubscriptionSection from "../Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../Commons/Footer/Footer";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import CareerSection from "../Commons/CareerSection/CareerSection";

const News = () => {
    return (
        <>
            <Header img={AboutBgImg}
                    type='half'
                    align={'left'}
                    logo={true}
                    logoText={'Corn Harvest Only 30% Complete, USDA Says'}
                    logoType={'blog'}
                    logoDate={'8 | 11 | 2019'}
                    category={'NEWS'}
            >
                        <TextLabel className='text-white' positionClass={'mt-5'}  icon={threeWhiteDots} text='NEWS & EVENTS'/>
                        <HeaderText className={'text-left text-white'} text={'News & Events'}/>
            </Header>

            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav type={'blog'} />
            </div>

            <Section className={'bg-patek-light-green'}
                     rightBgImg={leafBGImg}>
                <Row className='pt-lg-5 mt-5'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='IN THE NEWS'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'News '}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col> <Col lg={{span: 4}}>
                    <ArticleLayout
                        type={'blog'}
                        text={'We are up to date with current technology trends \n' +
                        'in food production, processing and packaging. '}
                        category={'News'}
                        topic={'Corn Harvest Only 30% Complete, USDA \n' +
                        'Says and so does EFCC'}
                        date={'8th Jun, 2019'}
                        img={ArticleLayoutImg}
                    />
                </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 4}}>
                       <Button className={'bg-patek-green'}  text={'See More'}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'} rightBgImg={leafBGImg}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='Events'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Events '}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col> <Col lg={{span: 4}}>
                    <ArticleLayout
                        type={'blog'}
                        text={'We are up to date with current technology trends \n' +
                        'in food production, processing and packaging. '}
                        category={'News'}
                        topic={'Corn Harvest Only 30% Complete, USDA \n' +
                        'Says and so does EFCC'}
                        date={'8th Jun, 2019'}
                        img={ArticleLayoutImg}
                    />
                </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 4}}>
                       <Button className={'bg-patek-green'}  text={'See More'}/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30'} rightBgImg={leafBGImg}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <TextLabel className='patek-green' icon={threeCircleIcon} text='IN THE NEWS'/>
                        <HeaderText className={'my-lg-3 fs-2-5 patek-deep-green '} text={'Blog '}/>
                    </Col>
                </Row>
                <Row className={'mt-5'}>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col> <Col lg={{span: 4}}>
                    <ArticleLayout
                        type={'blog'}
                        text={'We are up to date with current technology trends \n' +
                        'in food production, processing and packaging. '}
                        category={'News'}
                        topic={'Corn Harvest Only 30% Complete, USDA \n' +
                        'Says and so does EFCC'}
                        date={'8th Jun, 2019'}
                        img={ArticleLayoutImg}
                    />
                </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                    <Col lg={{span: 4}}>
                        <ArticleLayout
                            type={'blog'}
                            text={'We are up to date with current technology trends \n' +
                            'in food production, processing and packaging. '}
                            category={'News'}
                            topic={'Corn Harvest Only 30% Complete, USDA \n' +
                            'Says and so does EFCC'}
                            date={'8th Jun, 2019'}
                            img={ArticleLayoutImg}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 4}}>
                       <Button className={'bg-patek-green'}  text={'See More'}/>
                    </Col>
                </Row>
            </Section>

            <CareerSection
                header={'" An Amazing Company at the frontiers of agro allied \n' +
            'Development in West AFrica "'}
            />
            <SubscriptionSection/>
            <Footer/>

        </>
    );
};

export default News;