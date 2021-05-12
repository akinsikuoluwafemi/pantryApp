
export const createPantryItem = (food) => {
    return {
        type: 'CREATE_ITEM',
        payload: food
    }
}