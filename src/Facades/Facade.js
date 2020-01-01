import {IMAGE_URL} from "../Api/api";
import noImgAvail from '../assets/img/noimageavailable.png';

export const News = 'news';
export const Event = 'events';
export const Blog = 'blog';


export const getNewsArticle = (data) => {
    return data && data.length > 0 ? data.filter(d => d && d.category && d.category.name == News) : [];
};

export const getFirstFourArticles = (article) => {
    return article && article.length > 4 ? article.slice(0, 4) : article;
};
export const getFirstThreeArticles = (article) => {
    return article && article.length > 3 ? article.slice(0, 3) : article;
};
export const getEventArticle = (data) => {
    return data && data.length > 0 ? data.filter(d => d && d.category && d.category.name == Event) : [];
};
export const getBlogArticle = (data) => {
    console.log('data', data && data.length > 0 ? data : '');
    return data && data.length > 0 ? data.filter(d => d && d.category && d.category.name == Blog) : [];
};


export const getPatekFoodJobs = (jobs) => {
    return jobs && jobs.length > 0 ? jobs.filter(j => j && j.career && j.career.Name == 'Patec TraveliFood') : [];
};


export const getQualityPackageJobs = (jobs) => {
    return jobs && jobs.length > 0 ? jobs.filter(j => j && j.career && j.career.Name == 'Quality Packaging') : [];
}

export const getColoradoFarmsJobs = (jobs) => {
    return jobs && jobs.length > 0 ? jobs.filter(j => j && j.career && j.career.Name == 'Colorado Farms') : [];
}

export const getGoldenFoodJobs = (jobs) => {
    return jobs && jobs.length > 0 ? jobs.filter(j => j && j.career && j.career.Name == 'Golden Foods') : [];
}

export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

export const getImageFromArticle = (article) => {
    if (article.image == null) return  noImgAvail;
    return !isEmpty(article) && article.image.length > 0 ? `${article.image[0].url}` : noImgAvail
};

export const redirectTo = (url) => {
    return window.location.href = url;
};

export const convertDate = (date) => {
    // return moment() = url;
};

//Retrieves user inputs
export const changeHandler = (event, context = this) => {
    const name = event.target.name;
    const value = event.target.value;
    context.setState({
        [name]: value
    });
};