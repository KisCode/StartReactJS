import React from 'react';

/**
 * Form表单案例进一步优化，复用onChange方法
 * 1. 表单元素添加name属性，属性值与state一致
 * 2. 根据表单类型获取对应值
 * 3. 在 change 事件处理程序中通过 [name] 来修改对应的state
 */
export default class FormOpt extends React.Component {
	state = {
		txt: '',
		check: false,
		selectValue: ''
	};

	handleChange = (e) => {
		const value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		const name = e.target.name;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div>
				<span>输入结果：{this.state.txt}</span>
				<input
					type='text'
					name='txt'
					value={this.state.txt}
					onChange={this.handleChange}
				/>
				<br />

				<input name='check' type='checkbox' onChange={this.handleChange} />
				<span>选中：{this.state.check ? 'Yes' : 'No'}</span>
				<span>
					<br />
					选中：{this.state.check.toString()}
				</span>
				<br />

				<span>选中：{this.state.selectValue}</span>
				<select
					name='selectValue'
					value={this.state.selectValue}
					onChange={this.handleChange}
				>
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
