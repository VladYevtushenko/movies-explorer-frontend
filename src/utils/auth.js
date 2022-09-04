import { MAIN_API_URL } from "../consts/consts";
import { getResponse } from './MainApi';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};
// registration 

export const register = async ({ email, password, name }) => {
    const res = await fetch(`${MAIN_API_URL}/signup`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({email, password, name}),
        credentials: 'include',
    });
    return await getResponse(res);
};

// auth

export const authorize = async ({ email, password }) => {
    const res = await fetch (`${MAIN_API_URL}/signin`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({email, password}),
        credentials: 'include',
    })
    return await getResponse(res);
}

// check auth validity

export const getContent = async (token) => {
    const res = await fetch(`${MAIN_API_URL}/users/me`, {
        method: 'GET',
        headers: headers,
        credentials: 'include',
    });
    
    return await getResponse(res);
};

//signout 

export const logOut = async () => {
    const res = await fetch(`${MAIN_API_URL}/signout`, {
        method: 'GET',
        headers: headers,
        credentials: 'include'
    });
    return await getResponse(res);
};