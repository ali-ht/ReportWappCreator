import axios from 'axios';


const url = '';
const userId = '';
const reportId = '';

export const getData = async ({ reportID }) => {
    axios
        .get(url + "/" + reportID, null)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return null;
        })
}

export const sendData = async ({ userId, status, description }) => {
    return axios
        .post(
            url,
            {
                "status": status,
                "description": description,
                "userId": userId
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then(response => {
            response.type == "SUCCSESS" ? reportId = response.body.reportId : reportId = '';
            return reportId;
        })
        .catch(error => {
            console.log(error);
        })
}