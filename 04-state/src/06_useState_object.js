import { useState } from 'react';

/**
 * useState 对象状态修订
 * 1. 当useState状态值为obj类型，不能直接对该对象position进行修订，而是需要调用setPosition方法对position的属性进行修订
 * https://react.docschina.org/learn/updating-objects-in-state
 * @returns
 */
export default function Point() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});

	function handlePointerMove(e) {
		setPosition({
			x: e.clientX - e.width / 2,
			y: e.clientY - e.height / 2
		});
	}

	return (
		<div
			onPointerMove={handlePointerMove}
			style={{
				position: 'relative',
				width: '100vw',
				height: '100vh'
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'red',
					borderRadius: '50%',
					transform: `translate(${position.x}px, ${position.y}px)`,
					left: -10,
					top: -10,
					width: 120,
					height: 120
				}}
			/>
		</div>
	);
}
