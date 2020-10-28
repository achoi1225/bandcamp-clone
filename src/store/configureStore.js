import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import authentication from './reducers/authentication';
import uiSignupForm from './reducers/ui-signup-form';
import uiLoginForm from './reducers/ui-login-form';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    authentication,
    uiSignupForm,
    uiLoginForm,
});

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}

export default configureStore;