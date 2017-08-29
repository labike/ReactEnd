// 引入总的rootReducer
import rootReducer from "../reducers/rootReducer";
// 引入redux，包含中间件
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store=createStore(rootReducer, applyMiddleware(thunk));
export default store;