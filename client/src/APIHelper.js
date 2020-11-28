import axios from "axios";

export const createShortUrl = (obj) => {
    const requestUrl = "api/shorten";
    return axios.post(requestUrl, obj);
};
