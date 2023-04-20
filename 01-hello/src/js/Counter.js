import React from "react";

//计数器组件
//展示state状态
export default class Counter extends React.Component {
	/* 	
    constructor() {
		super();
        //初始化 state
		this.state = {
			count: 0,
		};
	}
 */

	//初始化 state
	state = {
		count: 0,
	};

	increment() {
		//不要直接修改State
		this.setState({ count: this.state.count + 1 });
	}

	render() {
		return (
			<div>
				<p>
					计数器：<span>{this.state.count}</span>
				</p>
				<button onClick={() => this.increment()}>+1</button>
			</div>
		);
	}
}
