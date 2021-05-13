import { cateredRecipes, pantryArr} from '../../data';
import pantryTypes from '../types';

const INITIAL_STATE = {
    query: '',
	pantryArr,
	pantryDetail: [],
	cateredRecipes,
	cateredRecipesDetail: [],
};


const pantryReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case pantryTypes.CREATE_PANTRY_ITEM:
            return [...state.pantryArr, { ...action.payload }]
    cse
        default:
            return state;
    }
}

export default pantryReducer;