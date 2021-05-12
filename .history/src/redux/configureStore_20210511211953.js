import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

    return createStore(
        rootReducer,
        initialState
    
    )
}