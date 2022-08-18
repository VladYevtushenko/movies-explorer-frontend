import { MOVIE_API_URL } from "../consts/consts";

const getResponseData = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return res.json()
            .then(data => {
                throw new Error(data.error || data.message);
            });
    }
};

export const getMovies = async () => {
    const response = await fetch(MOVIE_API_URL, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return await getResponseData(response);
};