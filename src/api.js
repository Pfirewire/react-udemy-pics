import axios from "axios";
import UNSPLASH_ACCESS_KEY from "./keys";

const searchImages = () => {
    axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
        },
        params: {

        }
    });
}