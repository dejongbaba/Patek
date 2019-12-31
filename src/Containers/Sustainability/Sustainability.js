import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from '../../assets/img/sustainability-banner@2x.png'
import {Col, Row} from "react-bootstrap";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import meetMeBg from "../../assets/img/Meet-me-bg@2x.png";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Button from "../../Components/Commons/Button/Button";
import manWorking from "../../assets/img/man-working@2x.png";
import womanInOffice from "../../assets/img/woman-in-office@2x.png";
import "./sustainability.css";
import {contact, home, sustainability, team} from "../../routes/routes";
import leafBGImg from "../../assets/img/green-leaf-bg-right.svg";
import SectionText from "../../Components/Commons/Section/SectionText";
import leafInCircle from "../../assets/img/white-leaf-in-circle.svg";
import beverageImage from "../../assets/img/golden-food-beverage-image@2x.png";
import susImg2 from "../../assets/img/sustainability-art-img-2@2x.png";
import susImg1 from "../../assets/img/sustainability-art-img-1@2x.png";
import susImg3 from "../../assets/img/sustainability-img-3@2x.png";
import ArticleLayout from "../../Components/Commons/ArticleLayout/ArticleLayout";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import CircleIcon from "../../Components/Commons/ArticleImage/CircleIcon";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {redirectTo} from "../../Facades/Facade";

const Sustainability = () => {
    return (
        <>
            <Header img={AboutBgImg} type='half' align={'center'}>

                        <Breadcrumb containerClass={'mb-5'}
                                    links={
                                        [
                                            {name: 'home', path: home},
                                            {name: 'Sustainability', path: sustainability},
                                        ]
                                    }/>
                        <TextLabel positionClass={'justify-content-center mb-3 mb-lg-0'} text={'SUSTAINABILTY'}/>
                        <HeaderText className={'text-white with-square'} text={'Sustainability'}/>
            </Header>
            <Section className={'py-lg-5'}
                     bgImg={leafBGImg}
            >
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6, offset: 3}}>
                        <HeaderText className={'text-center mb-5 my-lg-3 fs-1-5 fs-lg-2 patek-deep-green '}
                                    text={'We are Committed to building\n' +
                                    'a global sustainable future for all by infusing\n' +
                                    'sustainable practices in our work'}/>
                    </Col>
                </Row>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 6}}>
                        <img src={womanInOffice} className='mt-lg-5 mb-5 mb-lg-0 pt-lg-5 img-fluid' alt="woman in office"/>
                    </Col>
                    <Col lg={{span: 5}}>
                        <img src={manWorking} className='img-fluid mb-5 mb-lg-0' alt="man working"/>
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Aquaculture'}
                            type={'imageTitle'}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 6}}>
                        <ArticleImage image={susImg1} type={'fluid'}/>
                    </Col>
                    <Col lg={{span: 5}}>
                        <ArticleLayout
                            type={'line'}
                            category={'Our Commitment'}
                            text={'As a leading supplier of feed and nutrition for the \n' +
                            'international aquaculture industry, we are committed \n' +
                            'to the use of responsible and sustainable practices \n' +
                            'that support increasing global consumption of fish \n' +
                            'and seafood, protect the environment and help \n' +
                            'farmers succeed.\n'}
                        />
                        <ArticleLayout
                            type={'line'}
                            category={'Our Progress'}
                            text={'Our focus on research, nutrition and innovation \n' +
                            'enables farmers to grow the supply of healthy fish\n' +
                            'and seafood, improve food production efficiency \n' +
                            'and reduce the environmental impact of aquaculture. \n' +
                            'We provide sustainable solutions for farmers of \n' +
                            'pangasius fish, heteroclarious fish, barramundi fish, \n' +
                            'hake, Korean mackerel, blue-whiting, herring, horse \n' +
                            'mackerel and other species of fish and seafood'}
                        />
                    </Col>
                </Row>
            </Section>
            <Section className={'bg-gray-gradient-30 py-lg-5 '}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 4}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Cattle Farm'}
                            type={'imageTitle'}
                        />
                    </Col>
                </Row>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 7,order:7}}>
                        <ArticleImage image={susImg2} type={'fluid'}/>
                    </Col>
                    <Col lg={{span: 5,order:1}}>
                        <ArticleLayout
                            type={'line'}
                            category={'Our Commitment'}
                            text={'As a leading supplier of feed and nutrition for the \n' +
                            'international aquaculture industry, we are committed \n' +
                            'to the use of responsible and sustainable practices \n' +
                            'that support increasing global consumption of fish \n' +
                            'and seafood, protect the environment and help \n' +
                            'farmers succeed.\n'}
                        />
                        <ArticleLayout
                            type={'line'}
                            category={'Our Progress'}
                            text={'Our focus on research, nutrition and innovation \n' +
                            'enables farmers to grow the supply of healthy fish\n' +
                            'and seafood, improve food production efficiency \n' +
                            'and reduce the environmental impact of aquaculture. \n' +
                            'We provide sustainable solutions for farmers of \n' +
                            'pangasius fish, heteroclarious fish, barramundi fish, \n' +
                            'hake, Korean mackerel, blue-whiting, herring, horse \n' +
                            'mackerel and other species of fish and seafood'}
                        />
                    </Col>
                </Row>
            </Section>

            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 7}}>
                        <ArticleImage image={susImg3} type={'fluid'}/>
                    </Col>
                    <Col lg={{span: 4}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Quality Packaging'}
                            type={'imageTitle'}
                        />
                        <ParagraphText
                            text={'From a purely business perspective, discarding plastic makes \n' +
                            'zero sense. Plastic packaging waste represents an $80-$120 \n' +
                            'billion loss to the global economy every year according \n' +
                            'to the World Economic Forum. A more circular approach \n' +
                            'is needed, where we not only use less packaging, but \n' +
                            'design the packaging we do use so it can be reused, \n' +
                            'recycled or composted.'}
                        />
                        <CircleIcon />
                        <ParagraphText
                            className={'mt-3'}
                            text={'We minimise waste by reducing, reusing and recycling our \n' +
                            'own waste and encouraging consumers to do the same. \n' +
                            'We want to move towards a more circular economy, \n' +
                            'enabling more packaging to either remain in loops or \n' +
                            'have the best possible opportunity to be recycled'}
                        />
                    </Col>
                </Row>
            </Section>

            <Section className={'bg-gray-gradient-30 py-lg-5 '}>
                <Row className='pt-lg-5'>
                    <Col lg={{span: 6,order:6}}>
                        <ArticleImage image={beverageImage} type={'fluid'}/>
                    </Col>
                    <Col lg={{span: 6,order:1}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Golden Food and Beverage'}
                            type={'imageTitle'}
                        />
                        <ParagraphText
                            text={'Our food and beverage sustainability is the balance between \n' +
                        'economy, ecology and social issues. Sustainability is a priority \n' +
                        'at all levels: In the context of sustainable development. \n' +
                        'The raw material utilization takes place in a unique production \n' +
                        'almost completely in the main and by-products. '}
                        />
                    </Col>

                </Row>
            </Section>

            <Section className={'bg-patek-light-green py-lg-5 '}>
                <Row className={'py-lg-5'}>
                    <Col lg={{span: 7}}>
                        <ArticleImage image={susImg3} type={'fluid'}/>
                    </Col>
                    <Col lg={{span: 5}}>
                        <SectionText
                            iconClass={'w-25'}
                            icon={leafInCircle}
                            title={'Trevali Food Distribution'}
                            type={'imageTitle'}
                        />
                        <ParagraphText
                            text={'The global transportation industry is facing an increasingly \n' +
                            'challenging environment, with trade disruptions and regulatory \n' +
                            'uncertainty weighing on freight markets. At Patec Group, \n' +
                            'however, we see this as an opportunity and we are adapting \n' +
                            'our food service distribution business to transition towards \n' +
                            'a more sustainable future'}
                        />
                    </Col>
                </Row>
            </Section>

            <CareerSection
                header={'" An Amazing Company at the frontiers of agro allied \n' +
                'Development in West AFrica "'}
                button={'CONTACT US'}
                func={() => redirectTo(contact)}
            />
            <SubscriptionSection/>
            <Footer/>
        </>
    );
};

export default Sustainability;