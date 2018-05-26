import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';

import reducers from './reducers';

import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));


const url = new URL(window.location.href);

const user = url.searchParams.get("user");
const subject = url.searchParams.get("subject");

let content = null;

if(!user || !subject){
  content = <div dir="ltr">missing parameters! got  user: {user ? user : "null"} and subject: { subject ? subject : "null"}</div>
}else{
  content = (
    <Provider store={store}>
      <App subject={subject} user={user}/>
    </Provider>
  )
}


ReactDOM.render(
    content
    , document.getElementById('root'));
registerServiceWorker();
