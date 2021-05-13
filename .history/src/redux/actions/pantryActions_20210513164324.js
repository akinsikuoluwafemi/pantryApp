import pantryR from '../types';



export const createPantryItem = (food) => {
    return {
        type: 'CREATE_PANTRY_ITEM',
        payload: food
    }
}

export const setQueryField = (text) => {
    return {
        type: ''
    }
}