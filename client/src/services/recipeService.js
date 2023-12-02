const baseUrl = 'http://localhost:3030/jsonstore';

export const add = async (recipeData) => {
    const response = await fetch(`${baseUrl}/recipes`, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(recipeData),
    });

    const result = await response.json();

    return result;
};