import React from 'react';

/**
 * 非受控组件
 * 因为非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。
 */
export default class RefForm extends React.Component {
	constructor() {
		super();
		this.txtRef = React.createRef();
	}

	handleSubmit = (e) => {
		e.preventDefault();
		alert('submit: ' + this.txtRef.current.value);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type='text' ref={this.txtRef} />
				</label>
				<input type='submit' value='Submit' />
			</form>
		);
	}
}
