import React from 'react';

export default class AlertButton extends React.Component {
	render() {
		/*      
		//1.通过props传递'message'、'children'两个参数
		const message = this.props.message;
		const children = this.props.children;
    */

		//2. 通过JS解构方式获取参数(简化方式1写法)
		const { message, children } = this.props;

		return (
			<div
				onClick={() => {
					alert('div onClick');
				}}
			>
				<button
					onClick={() => {
						alert(message);
					}}
				>
					{children}
				</button>
                <button
					onClick={(e) => {
                        //阻止事件向上传播,不会触发'div onClick'
                        e.stopPropagation();
						alert(message);
					}}
				>
					{children}
				</button>
			</div>
		);
	}
}
