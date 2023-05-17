import React from 'react';
import { useState } from 'react';
import { sculptureList } from './data';

/**
 * 图片轮播控件
 * @returns 画廊组件
 */
export default function Gallery() {
    //必须声明在组件最顶层
	//当前图片下标
	const [index, setIndex] = useState(0);

	function handleClick() {
		let nextIndex = index < sculptureList.length - 1 ? index + 1 : 0;
		setIndex(nextIndex);
	}

	let sculpture = sculptureList[index];
	return (
		<>
			<button onClick={handleClick}>Next</button>
			<h2>
				<i>{sculpture.name}</i>
				by {sculpture.artist}
			</h2>
			<h3>
				({index + 1} of {sculptureList.length})
			</h3>
			<img src={sculpture.url} alt={sculpture.alt} />
			<p>{sculpture.description}</p>
		</>
	);
}
