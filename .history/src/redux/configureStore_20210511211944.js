import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEV

    return createStore(
        rootReducer,
        initialState
    
    )
}