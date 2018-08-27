import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={ Store }>
    	<App />
 	</Provider>
  , document.getElementById('root'));
registerServiceWorker();
