import React from 'react';
import { useState } from 'react';

export default function UserForm() {
	//必须声明在组件最顶层
	const [userName, setUserName] = useState('');

	function handleClick() {
		setUserName('');
	}
	function handleChange(e) {
		setUserName(e.target.value);
	}
	return (
		<form>
			<input
				placeholder='input user name'
				value={userName}
				onChange={handleChange}
			/>
			<h1>Hi,{userName}</h1>
			<button onClick={handleClick}>Reset</button>
		</form>
	);
}
