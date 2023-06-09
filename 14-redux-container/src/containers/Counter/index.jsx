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
/* const mapStateToProps = (state) => {
	return { count: state};
}; */
//简化上行函数
const mapStateToProps = state => ({ count: state });

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
// export default connect(mapStateToProps, mapDispatchToProps)(CounterUI);

/* ------------------------------------针对以上代码进行优化------------------------------------ */
export default connect(
	//mapStateToProps的简化写法
	state => ({ count: state }), 

	//mapDispatchToProps的一般写法
	/* 	
	dispatch => ({
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
	})
 	*/

	//mapDispatchToProps的简化写法，
	//省略dispatch，返回对象的方式返回action对象，dispatch交由react-redux框架执行
	{
		add: createAddAction,
		subtract: createSubtractAction,
		addIfOdd: createAddIfOddAction,
		asycAdd: createAsycAddAction
	}
	// mapDispatchToProps
)(CounterUI);
