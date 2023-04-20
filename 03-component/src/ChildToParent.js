import React from 'react';

/**
 * 子组件向父组件通讯
 * 1. 父组件声明函数（回调方法）
 * 2. 将回调方法通过参数形式传递给子组件
 * 3. 子组件调用回调方法
 */
export default class ChildToParent extends React.Component {
	state = {
		receveMsg: ''
	};

	// 声明回调方法，供子级组件调用
	getChildMsg = (msg) => {
		console.log('父组件接收消息:', msg);
		this.setState({
			receveMsg: msg
		});
	};

	render() {
		return (
			<div>
				<p>子组件向父组件通讯,我是父组件</p>
				<h1>{this.state.receveMsg}</h1>
				<Child func={this.getChildMsg} />
				<Child2 func={this.getChildMsg} />
			</div>
		);
	}
}

/**
 * 函数组件，演示向父组件通讯
 * @param {函数组件} props
 * @returns
 */
function Child(props) {
	function handleClick() {
		console.log('handleClick');
		props.func('我是Child1');
	}

	return (
		<div>
			<button onClick={() => handleClick()}>Child1向Parent发送</button>
		</div>
	);
}

class Child2 extends React.Component {
	render() {
		return (
			<div>
				<button onClick={() => this.props.func('你好，我是Child2')}>
					Child2向Parent发送
				</button>
			</div>
		);
	}
}
