
const INITIAL_STATE = {

    pantryArr: [],
    cateredRecipesPantry : []
}


const pantryReducer = (state=INITIAL_STATE , action) => {
    switch(action.type){
        case "CREATE_PANTRY_ITEM":
            return [
                ...state.pantryArr,
                { action.payload }
            ]
    }
}

export default pantryReducer;