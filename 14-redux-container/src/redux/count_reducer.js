/**
 * 引入Action常量
 */
import { ADD, SUBTRACT, ADDIFODD, ASYCADD } from './constants';

//状态初始值
const initState = 0;

/**
 * Count组件的Reducer（实际执行者）,纯函数形式
 * @param {上一个状态值,此处为Count的当前计算结果} previousState
 * @param {action 动作包含了type和data,type为要执行标识类型,data为数据} action
 * @returns
 */
export default function countReducer(previousState = initState, action) {
	console.log(previousState, action);
	const { type, data } = action;
	switch (type) {
		case ADD:
			return previousState + data;
		case SUBTRACT:
			return previousState - data;
		case ADDIFODD:
			return previousState + data;
		case ASYCADD:
			return previousState + data;
		default:
			return previousState;
	}
}
