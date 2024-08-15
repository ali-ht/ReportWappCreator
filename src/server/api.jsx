import axios from 'axios';


const url = '';
const userID = '';


export const getData = async ({ reportID }) => {
    axios
        .get(url + "/" + reportID)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return null;
        })
}

export const sendData = async (params) => {
    return axios
        .post
}