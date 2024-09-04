import axios from 'axios';

const url = 'https://example.com/api';

export const getData = async ({ reportID }) => {
    try {
        const response = await axios.get(`${url}/${reportID}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export const sendData = async ({ userId, status, description }) => {
    const token = 'original jwt token';
    try {
        const response = await axios.post(
            url,
            {
                status: status,
                description: description,
                userId: userId
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        const reportId = response.data.type === "SUCCESS" ? response.data.reportId : '';
        return reportId;
    } catch (error) {
        console.error('Error sending data:', error);
        return null;
    }
}
