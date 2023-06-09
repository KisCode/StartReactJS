/**
 * Count组件生成action对象
 */
import { ADD, SUBTRACT, ADDIFODD } from './constants';

/*
//普通函数申明
 export function createAddAction(data) {
	return { type: 'add', data };
}

export function createSubtractAction(data) {
	return { type: 'subtract', data };
}
 */

export const createAddAction = (data) => ({ type: ADD, data });

export const createSubtractAction = (data) => {
	return { type: SUBTRACT, data };
};

export const createAddIfOddAction = (data) => {
	/* 
	if (data % 2 !== 0) {
		return { type: ADDIFODD, data };
	}
	//如使用react-redux 框架自动分发action,此处必须有返回值，否则报错
	return { type: '', data }; 
	*/

	//创建action,后续判断逻辑交由reducer处理
	return {type: ADDIFODD, data};
};

/**
 * 异步action, action的值为函数。需要引入redux-thunk 行实转换中间件
 * 异步action中一般会调用同步action,异步action不是必须的，可以在调用方开启异步
 */
export const createAsycAddAction = (data, time) => {
	return (dispatch) => {
		setTimeout(() => {
			//通知redux 执行 , store.dispatch
			dispatch(createAddAction(data));
		}, time);
	};
};
