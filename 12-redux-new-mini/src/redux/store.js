/**
 * 该文件专用于提供一个store对象，整个应用只有一个store对象
 */

//引入createStore, 用于创建redux中Store,由于新版本中createStore已被标记为@deprecated，故使用legacy_createStore方式引入
import { configureStore } from '@reduxjs/toolkit';
//引入为Count组件服务的reducer
import countNewReducer from './count_reducer';
//对外暴露store
export default configureStore({
	reducer: { conuter: countNewReducer }
});
