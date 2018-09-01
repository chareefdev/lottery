import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {Provider} from 'react-redux';
import {store,reducer} from './store/Storestate';
import {faTimesCircle, faStroopwafel,faAlignCenter, faAlignJustify,faClock,faShoppingCart} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel,faAlignJustify,faAlignCenter,faClock,faShoppingCart,faTimesCircle)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
