import React from 'react';

/**
 * 计数器UI组件
 */
export default class CounterUI extends React.Component {
	state = {
		count: 0
	};

	componentDidMount() {
		const {store} = this.props;
		console.log('store2',store)
		//改为直接从this.props.count 获取状态无需再次监听
		
/* 
		//订阅redux状态变化
		store.subscribe(() => {
			console.log('subscribe', store.getState());
			//通过setState驱动页面重新render
			this.setState({});
		});
		 */
	}

	add = () => {
		//从ref中结构 select选中值
		const { value } = this.selectNumber;
		this.props.add(parseInt(value));
	};

	subtract = () => {
		const { value } = this.selectNumber;
		this.props.subtract(parseInt(value));
	};

	/**
	 * 奇数时加
	 */
	addIfOdd = () => {
		const { value } = this.selectNumber;
		this.props.addIfOdd(parseInt(value));
	};

	/**
	 * 异步加法，延迟1s
	 */
	asycAdd = () => {
		const { value } = this.selectNumber;
		this.props.asycAdd(parseInt(value));
	};

	render() {
		const { count } = this.props;
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
