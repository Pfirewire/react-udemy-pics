import axios from "axios";
import UNSPLASH_ACCESS_KEY from "./keys";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);
    return response;
}

export default searchImages;