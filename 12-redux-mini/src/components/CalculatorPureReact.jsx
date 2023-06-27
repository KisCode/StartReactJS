import React from 'react';

/**
 * 纯React实现的计算器
 */
export default class CalculatorPureReact extends React.Component {
	state = {
		number1: 0,
		number2: 0,
		result: 0
	};

	caculate = () => {
		//计算
		const { number1, number2 } = this.state;
		const n1 = parseInt(number1);
		const n2 = parseInt(number2);
		let result = 0;

		console.log(number1, number2, result);

		//从select获取当前选中对象值
		const { value } = this.selectNumber;
		console.log(this.selectNumber, value);
		switch (value) {
			case 'add':
				result = n1 + n2;
				break;
			case 'subtract':
				result = n1 - n2;
				break;
			case 'multiply':
				result = n1 * n2;
				break;
			case 'divide':
				if (n2 === 0) {
					alert('除数不能为0');
					return;
				}
				result = n1 / n2;
				break;
			default:
				break;
		}

		this.setState({ result: result });
	};

	saveNumber1 = (e) => {
		//通过state保存input输入值(受控组件)
		console.log(e.target);
		this.setState({ number1: e.target.value });
	};

	saveNumber2 = (e) => {
		this.setState({ number2: e.target.value });
	};

	render() {
		const { result } = this.state;
		return (
			<div>
				<h3>计算结果：{result}</h3>
				<input
					type='number'
					onChange={this.saveNumber1}
					placeholder='输入数字'
				/>
				&nbsp;
				<select
					ref={(current) => {
						this.selectNumber = current;
					}}
				>
					<option value='add'>加</option>
					<option value='subtract'>减</option>
					<option value='multiply'>乘</option>
					<option value='divide'>除</option>
				</select>{' '}
				&nbsp;
				<input
					type='number'
					onChange={this.saveNumber2}
					placeholder='输入数字'
				/>{' '}
				&nbsp;
				<button onClick={this.caculate}>计算</button>
			</div>
		);
	}
}
