import React from 'react';

const numbers = [1, 2, 3, 4, 5];

//列表渲染
export default class MapList extends React.Component {
	render() {
		return (
			<ul>
				{numbers.map((n) => (
					<li key={n}>{n}</li>
				))}
			</ul>
		);
	}
}
