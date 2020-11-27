import axios from "axios";
import constants from "./config/constants";
// axios.defaults.baseURL = constants.apiUrl;
axios.defaults.baseURL = process.env.BASE_URL + "api/";

export const createShortUrl = (obj) => {
    const requestUrl = "shorten";
    return axios.post(requestUrl, obj);
};
