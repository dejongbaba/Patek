import React from 'react';
import PropTypes from 'prop-types';
import {useApi} from "../../Effects/Effects";
import {getAllBannerLinks} from "../../Api/api";
import BannerSection from "../../Components/Commons/BannerSection/BannerSection";
import {coloradoFarm, goldenFood, patecFood, qualityPackaging} from "../../routes/routes";
import {getImageFromArticle} from "../../Facades/Facade";

BannerContainer.propTypes = {

};

function BannerContainer(props) {

    const[banners,loading] = useApi(getAllBannerLinks,null,"banners");


    const setBannerImage = (banners) => {
        switch (window.location.pathname) {
            case patecFood:
                return getImageFromArticle(banners[0]);

            case qualityPackaging:
                return banners[1] && getImageFromArticle(banners[1]);

            case goldenFood:
                return banners[2] && getImageFromArticle(banners[2]);

            case coloradoFarm:
                return banners[3] && getImageFromArticle(banners[3]);
            default:
                return null;
        }
    };

    const bannerImage = banners.length && setBannerImage(banners);

    return (props.children({bannerImage,loading}));
}

export default BannerContainer;