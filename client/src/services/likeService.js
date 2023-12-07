import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';

export const like = async (recipeId) => {
    const newLike = await request.post(baseUrl, { recipeId });

    return newLike;
}

export const unlike = async (likeId) => request.remove(`${baseUrl}/${likeId}`);

export const isLikedByUser = async (userId, recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    const isLiked = result.some(like => like?._ownerId === userId);

    return isLiked;
}

export const getLikeId = async (userId, recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    const like = result.find(like => like?._ownerId === userId);

    const likeId = like?._id;

    return likeId;
}

export const allLikesByRecipeId = async (recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}&count`);

    return result;
}