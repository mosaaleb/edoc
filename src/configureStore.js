import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/index';
import Storage from './storage';

const configureStore = () => {
  const store = createStore(
    appReducer,
    Storage.loadState(),
    compose(
      applyMiddleware(thunk),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.subscribe(() => {
    Storage.saveState({
      auth: store.getState().auth,
      token: store.getState().token
    });
  });

  window.store = store;
  return store;
};

export default configureStore;
