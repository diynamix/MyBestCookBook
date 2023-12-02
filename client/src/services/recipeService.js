import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore';

export const getAll = async () => {
    const result = await request.get(`${baseUrl}/recipes`);

    console.log(result);

    return Object.values(result);
};

export const add = async (recipeData) => {
    const result = await request.post(`${baseUrl}/recipes`, recipeData);

    return result;
};