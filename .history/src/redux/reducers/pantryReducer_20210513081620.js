import {} from '../../data'

const INITIAL_STATE = {
	pantryArr: [],
	pantryDetail: [],
	cateredRecipes: [],
	cateredRecipesDetail: [],
};


const pantryReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case "CREATE_PANTRY_ITEM":
            return [...state.pantryArr, { ...action.payload }]
        default:
            return state;
    }
}

export default pantryReducer;