//初始状态值
let initState = 0;
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
		case 'add':
			return previousState + data;
		case 'subtract':
			return previousState - data;
		case 'addIfOdd':
			return previousState + data;
		case 'asycAdd':
			return previousState + data;
		default:
			return previousState;
	}
}
