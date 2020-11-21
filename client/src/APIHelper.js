import axios from "axios";
import constants from "./config/constants";
axios.defaults.baseURL = constants.apiUrl;

export const createShortUrl = (obj) => {
    const requestUrl = "shorten";
    return axios.post(requestUrl, obj);
};
