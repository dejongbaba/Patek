import axios from 'axios';

export const BASE_URL = 'http://localhost:1337/';
export const IMAGE_URL = 'http://localhost:1337';


const getAllArticles = `${BASE_URL}articles`;
const getOneArticle = (id) => `${BASE_URL}articles/${id}`;
const getAllCategories = `${BASE_URL}categories`;
const getAllJobs = `${BASE_URL}jobs`;
const getAllCareers = `${BASE_URL}careers`;


export const getArticles = async () => {
    try {
        return await axios.get(getAllArticles);
    } catch (e) {
        return e.response;
    }
};export const getArticle = async (id) => {
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