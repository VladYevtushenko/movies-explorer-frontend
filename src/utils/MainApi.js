import { MAIN_API_URL } from "../consts/consts";

export const headers = {
    'Content-Type': 'application/json',
};

export const getResponse = (res) => {
    try {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    } catch (err) {
        return err;
    }
};

// get user's info

export const getUserInfo = async () => {
    const res = await fetch(`${MAIN_API_URL}/users/me`, {
        headers: headers,
        credentials: 'include',

    });
    return await getResponse(res);
};

// collect info about savedMovies

export const getMovies = async () => {
    const res = await fetch(`${MAIN_API_URL}/movies`, {
        headers: headers,
        credentials: 'include',
    });
    return await getResponse(res);
};

// add movie to savedMovies

export const addToSavedMovies = async (movieData) => {
    const res = await fetch(`${MAIN_API_URL}/movies`, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify(movieData),
    });
    return await getResponse(res);
};

// remove movie from savedMovies 

export const deleteFromSavedMovies = async (id) => {
    const res = await fetch(`${MAIN_API_URL}/movies/${id}`,{
        method: 'DELETE',
        headers: headers,
        credentials: 'include',
    });
    return await getResponse(res);
};