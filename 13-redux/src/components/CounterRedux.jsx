import React from 'react';
import store from '../redux/store';
//引入Action
import {
	createAddAction,
	createSubtractAction,
	createAddIfOddAction,
	createAsycAddAction
} from '../redux/count_action';

/**
 * 使用Redux实现的计数器
 */
export default class CounterRedux extends React.Component {
	state = {
		count: 0
	};

	componentDidMount() {
		//订阅redux状态变化
		store.subscribe(() => {
			console.log('subscribe', store.getState());
			//通过setState驱动页面重新render
			this.setState({});
		});
	}

	add = () => {
		//从ref中结构 select选中值
		const { value } = this.selectNumber;
		store.dispatch(createAddAction(parseInt(value)));
	};

	subtract = () => {
		const { value } = this.selectNumber;
		store.dispatch(createSubtractAction(parseInt(value)));
	};

	/**
	 * 奇数时加
	 */
	addIfOdd = () => {
		const { value } = this.selectNumber;
		if (parseInt(value) % 2 !== 0) {
			//如果奇数时加
			store.dispatch(createAddIfOddAction(parseInt(value)));
		}
	};

	/**
	 * 异步加法，延迟1s
	 */
	asycAdd = () => {
		const { value } = this.selectNumber;
		store.dispatch(createAsycAddAction(parseInt(value), 500));
	};

	render() {
		const count = store.getState();

		return (
			<div>
				<h3>计算结果：{count}</h3>
				<select
					ref={(current) => {
						this.selectNumber = current;
					}}
				>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<br />
				<button onClick={this.add}> + </button>
				&nbsp;
				<button onClick={this.subtract}> - </button>
				&nbsp;
				<button onClick={this.addIfOdd}> 奇数时加 </button>
				&nbsp;
				<button onClick={this.asycAdd}> 异步加 </button>
			</div>
		);
	}
}
