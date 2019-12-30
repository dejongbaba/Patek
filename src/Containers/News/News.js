import React from 'react';
import Header from "../../Components/Commons/Header/Header";
import AboutBgImg from "../../assets/img/about-bg-image.svg";
import HeaderText from "../../Components/Commons/HeaderText/HeaderText";
import SecondaryNav from "../../Components/Commons/Navbar/SecondaryNav";
import TextLabel from "../../Components/Commons/TextLabel/TextLabel";
import threeWhiteDots from "../../assets/img/three-white-dots.svg";
import SubscriptionSection from "../../Components/Commons/SubscriptionSection/SubscriptionSection";
import Footer from "../../Components/Commons/Footer/Footer";
import CareerSection from "../../Components/Commons/CareerSection/CareerSection";
import {useGetArticles} from "../../Effects/Effects";
import {blog, event, news} from "../../routes/routes";
import ArticleSectionLayout from "../../Components/Commons/ArticleSectionLayout/ArticleSectionLayout";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import {IMAGE_URL} from "../../Api/api";
import {isEmpty} from "../../Facades/Facade";


const News = ({location}) => {

    const {pathname} = location;
    const [allArticles] = useGetArticles();
    const getFirstArticle = (a) => {
        return a && a.length > 0 ? a[0] : {};
    };
    const firstArticle = getFirstArticle(allArticles);
    console.log('first article',firstArticle);

    return (
        <>
            <Header img={AboutBgImg}
                    type='half'
                    align={'left'}
                    logo={!isEmpty(firstArticle)}
                    logoText={!isEmpty(firstArticle) ?
                        <Link className={'gray-link'} to={`/view/${firstArticle.id}`}>{firstArticle.title}</Link> : ''}
                    logoImg={!isEmpty(firstArticle) ? `${IMAGE_URL}${firstArticle.image[0].url}` : ''}
                    logoType={'blog'}
                    logoDate={!isEmpty(firstArticle) ? firstArticle.date : ''}
                    category={!isEmpty(firstArticle) && firstArticle.category ? firstArticle.category.name : ''}
            >
                <TextLabel className='text-white'
                           positionClass={'mt-5'}
                           icon={threeWhiteDots}
                           text='NEWS & EVENTS'
                />
                <HeaderText className={'text-left text-white'}
                            text={'News & Events'}
                />
            </Header>
            <div className={'py-lg-5 bg-patek-light-green'}>
                <SecondaryNav type={'blog'}/>
            </div>

            <Route path={news}
                   render={(props) => <ArticleSectionLayout {...props} pathname={pathname} articles={allArticles}/>}/>
            <Route path={blog}
                   render={(props) => <ArticleSectionLayout {...props} pathname={pathname} articles={allArticles}/>}/>
            <Route path={event}
                   render={(props) => <ArticleSectionLayout {...props} pathname={pathname} articles={allArticles}/>}/>

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