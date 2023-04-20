import React from 'react';

/**
 * 父节点向子节点通讯
 * ☆ 通过子节点的props属性传递
 */
export default class ParentToChild extends React.Component {
	render() {
		return (
			<div>
				<p>父节点向子节点通讯</p>
				<Child msg='Haha' />
				<Child2 msg='Hehe' />
			</div>
		);
	}
}

function Child(props) {
	return <p>我是Child，接收：{props.msg}</p>;
}

class Child2 extends React.Component {
	render() {
		return <p>我是Child2，接收：{this.props.msg}</p>;
	}
}
