import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/likes';

export const like = async (recipeId) => {
    const newLike = await request.post(baseUrl, { recipeId });

    return newLike;
}

// export const isLikedByUser = async (userId, recipeId) => {
//     const query = new URLSearchParams({
//         where: `_ownerId="${userId}"`,
//     });

//     const result = await request.get(`${baseUrl}?${query}&count`);

//     const isLiked = result.;
//     console.log('number: ' + result);
//     console.log('bool: ' + isLiked);
//     return isLiked;
// }

export const allLikesByRecipeId = async (recipeId) => {
    const query = new URLSearchParams({
        where: `recipeId="${recipeId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}&count`);

    return result;
}