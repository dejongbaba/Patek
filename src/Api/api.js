import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
export const MAIL_CHIMP_BASE_URL = process.env.REACT_APP_MAILCHIMP_BASE_URL;
export const LIST_ID = '6fb14aa48c';


const subscribeUsertoListUrl =`${BASE_URL}subscribers`;
const getOneArticle = (id) => `${BASE_URL}articles/${id}`;
const getAllArticles = `${BASE_URL}articles?_sort=created_at:desc`;
const getAllCategories = `${BASE_URL}categories`;
const getAllJobs = `${BASE_URL}jobs`;
const getAllCareers = `${BASE_URL}careers`;


export const getArticles = async () => {
    try {
        return await axios.get(getAllArticles);
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