import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || COMPOSE

    return createStore(
        rootReducer,
        initialState
    
    )
}