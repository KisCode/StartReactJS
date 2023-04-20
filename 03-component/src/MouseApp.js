import React from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';

/**
 * propers-render高阶用法
 */
export default class MouseApp extends React.Component {
	render() {
		return (
			<div>
				<Mouse
					render={(mouse) => {
						return (
							<p>
								鼠标位置：{mouse.x},{mouse.y}
							</p>
						);
					}}
				/>

				<Mouse
					render={(mouse) => {
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
				/>
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

	componentDidMount() {
		//组件挂载时 监听鼠标移动事件
		window.addEventListener('mousemove', this.handleMouseMove);
	}

	componentWillUnmount() {
		//组件卸载时 移除事件监听
		window.removeEventListener('mousemove', this.handleMouseMove);
	}

	render() {
		return this.props.render(this.state);
	}
}

//添加props校验
Mouse.protoTypes = {
	//函数 且必填的
	render: PropTypes.func.isRequired
};
