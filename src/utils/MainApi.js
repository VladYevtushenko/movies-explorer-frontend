import { MAIN_API_URL } from "../consts/consts";

export const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
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

// user profile editing

export const updateUserData = async (user) => {
    const res = await fetch(`${MAIN_API_URL}/users/me`, {
        method: 'PATCH',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify({
            name: user.name,
            email: user.email,
        }),
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

export const addToSavedMovies = async (movie) => {
    const res = await fetch(`${MAIN_API_URL}/movies`, {
        method: 'POST',
        headers: headers,
        credentials: 'include',
        body: JSON.stringify(movie),
    });
    return await getResponse(res);
};

// remove movie from savedMovies 

export const deleteFromSavedMovies = async (_id) => {
    const res = await fetch(`${MAIN_API_URL}/movies/${_id}`,{
        method: 'DELETE',
        headers: headers,
        credentials: 'include',
    });
    return await getResponse(res);
};