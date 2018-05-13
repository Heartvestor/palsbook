import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import AppRouter, { history } from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { startSetPals } from './actions/pals';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebaseConfig';
import './styles/base.css';
import loader from "./images/loader.gif";


const store = storeConfig();


const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(App, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<img className="loader" alt="loading" src={loader} />, document.getElementById('root'));

registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetPals()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }  
    });
  }
  else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
    
  }
});
