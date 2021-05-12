
const INITIAL_STATE = {

    pantryArr: [],
    cateredRecipesPantry : []
}


const pantryReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case "CREATE_PANTRY_ITEM":
            return [
                ...state,
                state.pantryArr
            []
    }
}

export default pantryReducer;