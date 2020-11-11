import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import authentication from './reducers/authentication';
import uiRoleForm from './reducers/ui-role-form';
import uiFanSignupForm from './reducers/ui-fan-signup-form';
import uiLoginForm from './reducers/ui-login-form';
import uiArtistSignupForm from './reducers/ui-artist-signup-form';
import albums from './reducers/albums';
import album from './reducers/album';
import user from './reducers/user';
import follows from './reducers/follows';
import genres from './reducers/genres';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    authentication,
    uiRoleForm,
    uiFanSignupForm,
    uiArtistSignupForm,
    uiLoginForm,
    albums,
    album,
    user,
    follows,
    genres,
});

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}

export default configureStore;