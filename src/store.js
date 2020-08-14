import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/sagas';
import reducer from './reducers';

export default (initialState) => {

    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

    const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(
        reducer,
        initialState,
        enhancers
    );

    sagaMiddleware.run(sagas)

    return store;
}