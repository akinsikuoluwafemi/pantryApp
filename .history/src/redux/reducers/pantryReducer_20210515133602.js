import { cateredRecipes, pantryArr, categoryArr} from '../../data';
import pantryTypes from '../types';

const INITIAL_STATE = {
    query: '',
    pantryArr,
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
            console.log(state.pantryArr)
            return {...state , pantryArr: state.pantryArr.filter(item => {
                if(item.category === action.payload){
                    console.log(item)
                }
                return item.category === action.payload
            })
            }
        case pantryTypes.REMOVE_FILTER_CHIP:
            return {...state, pantryArr: state.pantryArr]}

        default:
            return state;
    }
}

export default pantryReducer;