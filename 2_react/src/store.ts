import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// TODO: Endre url til din reducer for oppgave 2
import rootReducer from './store/fasit/_reducers';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}