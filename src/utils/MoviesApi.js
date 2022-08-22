import { MOVIE_API_URL } from "../consts/consts";

const getResponseData = (res) => {
    try {
        if (!res.ok) {
            throw new Error ('Ошибка запроса');
        }
        return res.json()
    } catch (err) {
        return err;
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