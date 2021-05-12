import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState){
    const composeEnhancers = 

    return createStore(
        rootReducer,
        initialState
    
    )
}