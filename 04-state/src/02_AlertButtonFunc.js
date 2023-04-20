import React from 'react';

/**
 * 函数式组件，功能等同于类组件AlertButton
 * @param {弹出消息提示} message 
 * @param {组件显示内容} children 
 * @returns 
 */
export default function AlertButtonFunc({message, children}) {
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
