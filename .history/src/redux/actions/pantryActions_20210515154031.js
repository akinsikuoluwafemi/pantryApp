import pantryTypes from '../types';



export const createPantryItem = (food) => {
    return {
        type: pantryTypes.CREATE_PANTRY_ITEM,
        payload: food
    }
}

export const setQueryField = (text) => {
    return {
        type: pantryTypes.SET_QUERY,
        payload: text
    }
}

export const filteredPantryChip = (category) => {
    console.log(category.v)
    return {
        type: pantryTypes.FILTER_PANTRY_CHIP,
        payload: category
    }
}

