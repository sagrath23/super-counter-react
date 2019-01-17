import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StoreContext } from 'redux-react-hook';
import configureStore from './store'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <StoreContext.Provider value={configureStore()}>
        <App />
    </StoreContext.Provider>, 
    document.getElementById('root'));
registerServiceWorker();
