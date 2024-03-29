import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from './simple-intl'
const zh_CN = {
    'hello':'你好'
}
const en_US = {
    'hello':'hello'
}

ReactDOM.render((
    <IntlProvider ProviderValue={zh_CN}>
        <App/>
    </IntlProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
