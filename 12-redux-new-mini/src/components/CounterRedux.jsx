import React from 'react';
import store from '../redux/store';

/**
 * 使用Redux实现的计数器
 */
export default class CounterRedux extends React.Component {
	state = {
		count: 0
	};

	componentDidMount() {
		//检测redux状态变化
		store.subscribe(() => {
			store.getState();
			console.log('@', store.getState());

			this.setState({});
		});
	}

	add = () => {
		console.log('add');
		//从ref中结构 select选中值
		const { value } = this.selectNumber;
		store.dispatch({ type: 'add', data: parseInt(value) });
	};

	subtract = () => {
		console.log('subtract');
		const { value } = this.selectNumber;
		store.dispatch({ type: 'subtract', data: parseInt(value) });
	};

	/**
	 * 奇数时加
	 */
	addIfOdd = () => {
		console.log('addIfOdd');
		const { value } = this.selectNumber;
		if (parseInt(value) % 2 !== 0) {
			//如果奇数时加
			store.dispatch({ type: 'addIfOdd', data: parseInt(value) });
		}
	};

	/**
	 * 异步加法，延迟1s
	 */
	asycAdd = () => {
		console.log('asycAdd');
		const { value } = this.selectNumber;
		setTimeout(() => {
			store.dispatch({ type: 'asycAdd', data: parseInt(value) });
		}, 1000);
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
