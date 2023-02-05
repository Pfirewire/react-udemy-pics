import axios from "axios";
import UNSPLASH_ACCESS_KEY from "./keys";

const searchImages = async (query) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
        },
        params: {
            query: query
        }
    });

    return response.data.results;
}

export default searchImages;