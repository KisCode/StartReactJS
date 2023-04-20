import React from 'react';

export default class Button extends React.Component {
	handleClick = () => {
		console.log('handleClick');
		alert('Click Me!');
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>I'm Button </button>

				<button
					onClick={function handleClick2() {
						alert('Button 2!');
					}}
				>
					I'm Button2
				</button>

                <button
					onClick={() => {
                        console.log(this)
                        alert("Button 3 箭头函数")
                    }}
				>
					Button3
				</button>
			</div>
		);
	}
}

