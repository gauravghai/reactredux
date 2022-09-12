import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './Reducers';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;