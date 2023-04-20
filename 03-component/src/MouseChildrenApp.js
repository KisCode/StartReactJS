import React from 'react';
import logo from './logo.svg';

/**
 * propers-render高阶用法
 * 使用组件的children作为回调函数
 */
export default class MouseChildrenApp extends React.Component {
	render() {
		return (
			<div>
				<Mouse>
					{(mouse) => {
						return (
							<p>
								鼠标位置：{mouse.x},{mouse.y}
							</p>
						);
					}}
				</Mouse>

				<Mouse>
					{(mouse) => {
						return (
							<img
								src={logo}
								className='App-logo'
								alt='logo'
								style={{
									position: 'absolute',
									top: mouse.y,
									left: mouse.x
								}}
							/>
						);
					}}
				</Mouse>
			</div>
		);
	}
}

/**
 * Mouse组件封装了鼠标移动监听
 * 1. 状态：鼠标位置
 * 2. 状态逻辑：鼠标移动事件
 */
class Mouse extends React.Component {
	state = {
		x: 0,
		y: 0
	};

	handleMouseMove = (e) => {
		this.setState({
			x: e.clientX,
			y: e.clientY
		});
	};

	//监听鼠标移动事件
	componentDidMount() {
		window.addEventListener('mousemove', this.handleMouseMove);
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.handleMouseMove);
	}

	render() {
		return this.props.children(this.state);
	}
}
