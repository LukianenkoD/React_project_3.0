import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootReducer } from "../reducers/combReducer.js";

export const store = createStore(rootReducer, composeWithDevTools());