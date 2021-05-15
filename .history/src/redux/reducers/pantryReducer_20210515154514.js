import { cateredRecipes, pantryArr, categoryArr} from '../../data';
import pantryTypes from '../types';

const INITIAL_STATE = {
    query: '',
    pantryArr,
    pantryArrCopy: [],
    categoryArr,
	pantryDetail: [],
	cateredRecipes,
	cateredRecipesDetail: [],
};


const pantryReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case pantryTypes.CREATE_PANTRY_ITEM:
            // return [...state.pantryArr, { ...action.payload }]
            return { ...state, pantryArr: [{ ...state.pantryArr }, action.payload ]}
        case pantryTypes.SET_QUERY:
            // return { ...state.query, query: action.payload }
            return { ...state, query: action.payload }
        case pantryTypes.FILTER_PANTRY_CHIP:
            if(action.payload.target.value === 'All'){
                return { ...state, pantryArrCopy:  };
                
            }
            
        

        default:
            return state;
    }
}

export default pantryReducer;