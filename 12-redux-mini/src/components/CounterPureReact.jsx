import React from 'react';

/**
 * 纯React实现的计数器
 */
export default class CounterPureReact extends React.Component {
	state = {
		count: 0
	};

	add = () => {
		console.log('add');
		//从state中结构 count 重命名为result
		const { count: result } = this.state;
		const { value } = this.selectNumber;
		this.setState({
			count: result + parseInt(value)
		});
	};

	subtract = () => {
		console.log('subtract');
		const { count: result } = this.state;
		const { value } = this.selectNumber;
		this.setState({
			count: result - parseInt(value)
		});
	};

	/**
	 * 奇数时加
	 */
	addIfOdd = () => {
		console.log('addIfOdd');
		const { count: result } = this.state;
		const { value } = this.selectNumber;
		if (parseInt(value) % 2 === 0) {
			//如果时偶数则返回
			return;
		}

		this.setState({
			count: result + parseInt(value)
		});
	};

    /**
     * 异步加法，延迟1s
     */
	asycAdd = () => {
		console.log('asycAdd');
		const { count: result } = this.state;
		const { value } = this.selectNumber;

		setTimeout(() => {
			this.setState({
				count: result + parseInt(value)
			});
		}, 1000);
	};

	render() {
		const { count: result } = this.state;

		return (
			<div>
				<h3>计算结果：{result}</h3>
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
