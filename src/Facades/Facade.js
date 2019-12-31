export const News = 'news';
export const Event = 'events';
export const Blog = 'blog';


export const getNewsArticle = (data) => {
    return data && data.length > 0 ? data.filter(d => d && d.category && d.category.name == News) : [];
};

export const getFirstFourArticles = (article) => {
    return article && article.length > 4  ? article.slice(0,4):article;
};
export const getFirstThreeArticles = (article) => {
    return article && article.length > 3  ? article.slice(0,3):article;
};
export const getEventArticle = (data) => {
    return data && data.length > 0 ? data.filter(d => d && d.category && d.category.name == Event) : [];
};
export const getBlogArticle = (data) => {
    console.log('data', data && data.length > 0 ? data : '');
    return data && data.length > 0 ? data.filter(d => d && d.category && d.category.name == Blog) : [];
};

export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
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