import { createStore, combineReducers } from 'redux';
import registerReducer from '../reducers';


const rootReducer = combineReducers({ registerReducer })
const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default store;
