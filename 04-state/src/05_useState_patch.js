import { useState } from 'react';

/**
 * useState批处理组件
 * 1. 使用更新函数传递给state,React会将此函数加入队列，以便在事件处理函数中的所有其他代码运行后进行处理。
 * 2. 在下一次渲染期间，React 会遍历队列并给你更新之后的最终 state。
 * https://react.docschina.org/learn/queueing-a-series-of-state-updates
 * @returns
 */
export default function Counter() {
	const [number, setNumber] = useState(0);

	return (
		<>
			<h1>{number}</h1>
			<button
				onClick={() => {
					/* 
        //错误写法   
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
 */

        //使用更新函数 n => n+1

        setNumber(n => n+1);
        setNumber(n => n+1);
        setNumber(n => n+1);
      }}
			>
				+3
			</button>
		</>
	);
}
