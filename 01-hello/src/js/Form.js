import React from 'react';

export default class Form extends React.Component {
	state = {
		txt: '',
		check: false,
		selectValue: ''
	};

	handleChange = (e) => {
		this.setState({
			txt: e.target.value
		});
	};

	handleCheck = (e) => {
		this.setState({
			// check: e.target.value === 'on'
			check: e.target.checked
		});
		// debugger;
	};

    
	handleSelect = (e) => {
		this.setState({
			selectValue: e.target.value
		});
        // debugger
	};

	render() {
		return (
			<div>
				<span>输入结果：{this.state.txt}</span>
				<input
					type='text'
					value={this.state.txt}
					onChange={this.handleChange}
				/>
				<br />

				<input type='checkbox' onChange={this.handleCheck} />
				<span>选中：{this.state.check ? 'Yes' : 'No'}</span>
				<span>
					<br />
					选中：{this.state.check.toString()}
				</span>
				<br />


				<span>选中：{this.state.selectValue}</span>
				<select value={this.state.selectValue} onChange={this.handleSelect}>
					<option value='dog'>Dog</option>
					<option value='cat'>Cat</option>
					<option value='hamster'>Hamster</option>
					<option value='parrot'>Parrot</option>
					<option value='spider'>Spider</option>
					<option value='goldfish'>Goldfish</option>
				</select>
			</div>
		);
	}
}
