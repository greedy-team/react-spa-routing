import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchNews(apiKey, category) {
    const params = {
        apiKey,
        country: 'us',
    };

    if (category && category !== 'All') {
        params.category = category.toLowerCase();
    }

    try {
        const response = await axios.get(BASE_URL, { params });
        if(response.status === 200) {
            return response.data;
        }
        else {
            alert(response.statusText);
        }
    } catch (error) {
        alert(error.message);
    }
}
