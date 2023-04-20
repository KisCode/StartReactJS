import React from 'react';
const numbers = [1, 2, 3, 4, 5];
export default class CommentList extends React.Component {
	state = {
		dataList: []
	};
    render(){
        return (
			<ul>
				{numbers.map((n) => (
					<li key={n}>{n}</li>
				))}
			</ul>
		);
    }

	
}
