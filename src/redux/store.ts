import {composeWithDevTools} from '@redux-devtools/extension';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {cartItems} from './reducers/cartItem';

const reducers = combineReducers({
  cartItems,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
