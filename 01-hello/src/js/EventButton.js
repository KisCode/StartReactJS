import React from "react";
/* 
//点击事件绑定
export default class EventButton extends React.Component {
	constructor() {
		super();
        //必须绑定this，否则showAlert 函数中this为undefined
		this.showAlert = this.showAlert.bind(this);
	}

	showAlert(e) {
		console.log("Click:", this);
		alert("ok");
	}

	render() {
		return <button onClick={this.showAlert}>OK</button>;
	}
}
 */

export default class EventButton extends React.Component {
	showAlert() {
		console.log("Click2:", this);
		alert("ok");
	}

	render() {
        //使用箭头函数 设置绑定回调
		return <button onClick={() => this.showAlert()}>OK</button>;
	}
}