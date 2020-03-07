import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from '../../assets/img/about-banner@2x.png'
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import Breadcrumb from "../../Components/Commons/Breadcrumb/Breadcrumb";
import Section from "../../Components/Commons/Section/Section";
import greenLeafBg from "../../assets/img/green-leaf-bg.svg";
import Footer from "../../Components/Commons/Footer/Footer";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import articleImage from "../../assets/img/about-art-img@2x.png";
import "./subsidiary.css";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {team} from "../../routes/routes";
import {getImageFromArticle, redirectTo} from "../../Facades/Facade";
import withData from "../../Hoc/withData";
import {getAllHomeContent} from "../../Api/api";
import Loader from "../../Components/Commons/Loader/Loader";
import ParagraphText from "../../Components/Commons/ParagraphText/ParagraphText";
import ArticleImage from "../../Components/Commons/ArticleImage/ArticleImage";
import EmptyPlaceholder from "../../Components/Commons/EmptyPlaceHolder/EmptyPlaceholder";
import {Col, Row} from "react-bootstrap";

const Subsidiary = ({data, loading}) => {

    const subsidiaries = data.slice(4, data.length);
    return (
        <>
            <Loader loading={loading}>
                <Header img={AboutBgImg} type='half'>
                    <Breadcrumb containerClass={'mb-5'}
                                links={[{name: 'home', path: '/'},
                                    {name: 'Subsidiaries', path: '/subsidiaries'}]}
                    />
                    <TextLabel positionClass={'justify-content-center'}
                               text={'we are patec'}
                    />
                    <HeaderText className={'text-white'} text={'Subsidiaries'}/>
                </Header>

                <Section bgImg={greenLeafBg} className={'py-5 pt-lg-5 pb-lg-3'}>
                    {subsidiaries && subsidiaries.length ?
                        subsidiaries.map((s, i) => {
                            if (i % 2 == 0) {
                                return (
                                    <Row key={i} className={'mb-3 mb-lg-5'}>
                                        <Col lg={{span: 4,offset:1}}>
                                            <ArticleImage imageClass={'w-100'} type={'fluid'} image={getImageFromArticle(s)}/>
                                        </Col>
                                        <Col lg={{span: 5, offset: 1}}>
                                            <HeaderText className={'mt-lg-3 pt-lg-5 fs-2-5 mh-lg-90'}
                                                        text={s.title} link={s.link}/>
                                            <ParagraphText
                                                text={s.description}
                                            />
                                        </Col>
                                    </Row>
                                )
                            }
                            return (
                                <Row key={i} className={'mb-3 mb-lg-5'}>
                                    <Col lg={{span: 6,order:6}}>
                                        <ArticleImage imageClass={'w-70'} type={'fluid'} image={getImageFromArticle(s)}/>
                                    </Col>

                                    <Col lg={{span: 5, offset: 1,order:1}}>
                                        <HeaderText className={'mt-lg-3 pt-lg-5 fs-2-5 mh-lg-90'}
                                                    text={s.title} link={s.link}/>
                                        <ParagraphText
                                            text={s.description}
                                        />
                                    </Col>

                                </Row>
                            )
                        }) : <EmptyPlaceholder/>}
                </Section>

                <CareerSection header={'Meet the Team'} button={'Meet Us'} func={() => redirectTo(team)}/>
                <SubscriptionSection/>
                <Footer/>
            </Loader>
        </>
    );
};


export default withData(Subsidiary, getAllHomeContent,null,'subsidiary');