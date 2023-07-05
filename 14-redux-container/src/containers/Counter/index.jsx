// 引入Conter的UI组件
import CounterUI from '../../components/CounterUI';

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux';

//引入Action
import {
	createAddAction,
	createSubtractAction,
	createAddIfOddAction,
	createAsycAddAction
} from '../../redux/count_action';

/**
 * mapStateToProps 用于传递状态, 函数返回的是一个对象
 * @param {传递的状态} state
 * @returns 返回的对象中 key就是作为传递给UI组件props的key,value就是传递给UI组件props的value
 */
const mapStateToProps = (state) => {
	return { count: state};
};

/**
 * mapDispatchToProps 用于传递操作状态的方法
 * @param {store的dispatch} dispatch
 * @returns 返回的对象中 key就是作为传递给UI组件props的key,value就是传递给UI组件props的value
 */
const mapDispatchToProps = (dispatch) => {
	return {
		add: (number) => {
			dispatch(createAddAction(number));
		},
		subtract: (number) => {
			dispatch(createSubtractAction(number));
		},
		addIfOdd: (number) => {
			dispatch(createAddIfOddAction(number));
		},
		asycAdd: (number) => {
			dispatch(createAsycAddAction(number, 500));
		}
	};
};

/**
 * CounterUI的容器组件
 * container核心代码：
 * 	1. connect 容器连接指定UI组件，容器组件为UI组件的父组件
 *  2. connect 两个参数mapStateToProps 、mapDispatchToProps 分别用于传递状态和方法给子级UI组件
 */
export default connect(mapStateToProps, mapDispatchToProps)(CounterUI);
