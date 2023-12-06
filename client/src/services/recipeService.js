import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/recipes';

export const getAll = async () => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getAllByUserId = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const getByRecipeId = async (recipeId) => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}/${recipeId}?${query}`);

    return result;
};

export const add = async (recipeData) => {
    const result = await request.post(baseUrl, recipeData);

    return result;
};

export const edit = async (recipeId, recipeData) => {
    const result = await request.put(`${baseUrl}/${recipeId}`, recipeData);

    return result;
};

export const remove = async (recipeId) => request.remove(`${baseUrl}/${recipeId}`);