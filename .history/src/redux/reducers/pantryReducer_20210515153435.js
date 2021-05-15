import { cateredRecipes, pantryArr, categoryArr} from '../../data';
import pantryTypes from '../types';

const INITIAL_STATE = {
    query: '',
    pantryArr,
    pantryArrCopy: [],
act){
                
            }
            return {...state , pantryArr: state.pantryArr.filter(item => {
                if(item.category === action.payload){
                    console.log(item)
                }
                return item.category === action.payload
            })
            }
        

        default:
            return state;
    }
}

export default pantryReducer;