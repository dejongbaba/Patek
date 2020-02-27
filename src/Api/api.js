import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
export const MAIL_CHIMP_BASE_URL = process.env.REACT_APP_MAILCHIMP_BASE_URL;
export const LIST_ID = '6fb14aa48c';


const subscribeUsertoListUrl =`${BASE_URL}subscribers`;
const getOneArticle = (id) => `${BASE_URL}articles/${id}`;
const getAllArticles = `${BASE_URL}articles?_sort=created_at:desc`;
const getAllCategories = `${BASE_URL}categories`;
const getAllPrinciples = `${BASE_URL}principles`;
export  const getAllTeam = `${BASE_URL}teams`;
const getAllJobs = `${BASE_URL}jobs`;
const getAllCareers = `${BASE_URL}careers`;
export const getAllHomeContent = `${BASE_URL}homes`;
export const getAllSocialLinks = `${BASE_URL}social-media-links`;
export const getAllMenusContent = `${BASE_URL}menus?_sort=created_at:asc`;
export const getAllDirectors = `${BASE_URL}directors`;
export const getAllAbouts = `${BASE_URL}abouts`;
export const getAllSustainabilities = `${BASE_URL}sustainabilities`;
export const postApplication = `${BASE_URL}applications`;


export const getArticles = async () => {
    try {
        return await axios.get(getAllArticles);
    } catch (e) {
        throw e.response;
    }
};

export const getPrinciples = async () => {
    try {
        return await axios.get(getAllPrinciples);
    } catch (e) {
        throw e.response;
    }
};
export const getDirectors = async () => {
    try {
        return await axios.get(getAllDirectors);
    } catch (e) {
        throw e.response;
    }
};

export const getHomes = async () => {
    try {
        return await axios.get(getAllHomeContent);
    } catch (e) {
        throw e.response;
    }
};

export const postUserApplication = async (param) => {
    try {
        return await axios.post(postApplication,param);
    } catch (e) {
        throw e.response;
    }
};

export const subscribeUser = async (params) => {
    try {
        return await axios.post(subscribeUsertoListUrl, params);
    } catch (e) {
        throw e;
    }
};


export const getArticle = async (id) => {
    try {
        return await axios.get(getOneArticle(id));
    } catch (e) {
        return e.response;
    }
};

export const getCategories = async () => {
    try {
        return await axios.get(getAllCategories);
    } catch (e) {
        return e.response;
    }
};
export const getSocialLinks = async () => {
    try {
        return await axios.get(getAllSocialLinks);
    } catch (e) {
        return e.response;
    }
};

export const getJobs = async () => {
    try {
        return await axios.get(getAllJobs);
    } catch (e) {
        return e.response;
    }
};

export const getCareers = async () => {
    try {
        return await axios.get(getAllCareers);
    } catch (e) {
        return e.response;
    }
};