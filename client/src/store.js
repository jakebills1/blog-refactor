import { createStore, compose, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
// redux tools to create store
import rootReducer from './reducers/index';
// imports reducers
const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)
// allows use of redux devtools plugin
const store = createStore(rootReducer, {}, enhancers)
// createStore(reducer, [preloadedState], [enhancer])
if(module.hot) {
  module.hot.accept('./reducers/',() => {
   const nextRootReducer = require('./reducers/index').default;
   store.replaceReducer(nextRootReducer);
  });
}
export default store;
