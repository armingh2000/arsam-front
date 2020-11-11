import rootReducer from './reducers/rootReducer'
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
