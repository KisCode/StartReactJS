import React from 'react';

/**
 * 兄弟组件通讯
 * 1. 将共享状态提到最近的父组件中
 * 2. 父组件提供共享状态； 提供操作共享状态的方法
 * 3. 子组件通过props接收状态或回调方法
 *
 */
export default class ChildToChild extends React.Component {
	state = {
		msg: ''
	};

	getChildMsg = (receveMsg) => {
		console.log('父组件接收：', receveMsg);
		this.setState({
			msg: receveMsg
		});
	};

	render() {
		return (
			<div>
				<p>此处父组件</p>
				<br />
				<Node1 func={this.getChildMsg} />
				<Node2 msg={this.state.msg} />
			</div>
		);
	}
}

/**
 * Node1为输入组件
 */
class Node1 extends React.Component {
	handleChange = (e) => {
		const value = e.target.value;
		const callback = this.props.func;
		callback(value);
	};

	render() {
		return (
			<input
				type='txext'
				placeholder='请输入'
				onChange={this.handleChange}
			></input>
		);
	}
}

/**
 * 显示组件 显示Node1输入内容
 */
class Node2 extends React.Component {
	render() {
		return <h1>{this.props.msg}</h1>;
	}
}
