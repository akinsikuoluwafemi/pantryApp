import { cateredRecipes, pantryArr, categoryArr} from '../../data';
import pantryTypes from '../types';

const INITIAL_STATE = {
    query: '',
    pantryArr,
    pantryArrCopy: pantryArr,
    categoryArr,
	pantryDetail: [],
	cateredRecipes,
	cateredRecipesDetail: [],
};


const pantryReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case pantryTypes.CREATE_PANTRY_ITEM:
            return { ...state, pantryArr: [{ ...state.pantryArr }, action.payload ]}
        case pantryTypes.SET_QUERY:
            return { ...state, query: action.payload }
        case pantryTypes.FILTER_PANTRY_CHIP:
            if(action.payload.target.value === 'All'){
                return { ...state, pantryArrCopy: state.pantryArr };
            }else {
                return { ...state, pantryArrCopy: state.pantryArr.filter(item => item.category === action.payload.target.value) };
            }
        case pantryTypes.GET_PANTRY_DETAIL:
            return { ...state, pantryDetail: action.payload};
        default:
            return state;
    }
}

export default pantryReducer;