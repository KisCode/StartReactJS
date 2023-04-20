import React from 'react';
import logo from './logo.svg';

/**
 * 高阶组件使用
 * @param  WrapperComponent  被增强的组件
 * @returns
 */
function withMouse(WrapperComponent) {
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
			window.addEventListener('mousemove', this.handleMouseMove);
		}

		componentWillUnmount() {
			window.removeEventListener('mousemove', this.handleMouseMove);
		}

		render() {
			//将状态参数通过props传递给被渲染组件
			return (
				<WrapperComponent {...this.state} {...this.props}></WrapperComponent>
			);
		}
	}

	//设置displayName,如果不设置组件名默认为'Mouse'
	Mouse.displayName = 'WithMouse' + getDisplayName(WrapperComponent);
	return Mouse;
}

//根据渲染组件获取名称
function getDisplayName(WrapperComponent) {
	return WrapperComponent.displayName || WrapperComponent.name || 'Component';
}

/**
 * 显示位置组件
 */
class Position extends React.Component {
	render() {
		return (
			<p>
				鼠标位置：({this.props.x} , {this.props.y})
				参数：{this.props.a}
			</p>
		);
	}
}

/**
 * 显示指定位置的图片组件
 */
class Image extends React.Component {
	render() {
		return (
			<img
				src={logo}
				alt='logo'
				style={{
					width: 200,
					height: 200,
					position: 'absolute',
					top: this.props.y - 100,
					left: this.props.x - 100
				}}
			/>
		);
	}
}

//通过高阶组件增强 Position组件，使其拥有鼠标事件监听逻辑
const MousePosition = withMouse(Position);

//通过高阶组件增强 ，使其拥有鼠标事件监听逻辑
const MouseImage = withMouse(Image);

export default class MouseHOCApp extends React.Component {
	render() {
		return (
			<div>
				<h1>高阶组件</h1>
				<MousePosition a='xxx'/>
				<MouseImage />
			</div>
		);
	}
}
