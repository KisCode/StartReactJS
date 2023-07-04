// 引入redux中的createStore用于创建redux中Store（已被标记为废弃）
// import { createStore } from "redux";
//由于新版本中createStore已被标记为@deprecated，故使用legacy_createStore方式引入
import { applyMiddleware, legacy_createStore as createStore } from 'redux';

//引入形实转换中间件thunk，通过applyMiddleware执行中间件
import thunk from 'redux-thunk';

//引入为Counter组件服务的reducer
import countReducer from './count_reducer';

//创建一个和countReducer关联的store
export default createStore(countReducer, applyMiddleware(thunk));
