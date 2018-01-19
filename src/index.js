import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import  counterReducer  from './reducers';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { counterSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    counterReducer, 
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

sagaMiddleware.run(counterSaga);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
