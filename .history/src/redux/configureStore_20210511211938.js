import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState){
    const composeEnhancers = window

    return createStore(
        rootReducer,
        initialState
    
    )
}