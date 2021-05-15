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
            // return [...state.pantryArr, { ...action.payload }]
            return { ...state, pantryArr: [{ ...state.pantryApp }, action.payload ]}
        case pantryTypes.SET_QUERY:
            // return { ...state.query, query: action.payload }
            return { ...state, query: action.payload }
        case pantryTypes.FILTER_PANTRY_CHIP:
            return {.state, }

        default:
            return state;
    }
}

export default pantryReducer;