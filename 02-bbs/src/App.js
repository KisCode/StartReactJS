import './App.css';
import React from 'react';
import EmptyLayout from './EmptyLayout';

/**
 * 模拟论坛发帖页面
 */
export default class App extends React.Component {
	state = {
		commentList: [
			/* { id: 1, name: 'jack', content: '沙发！！！' },
			{ id: 2, name: 'rose', content: '板凳~' },
			{ id: 3, name: 'tom', content: '楼主好人' } */
		],

		userName: '',
		userContent: ''
	};

	handleForm = (e) => {
		// const name = e.target.name;
		// this.setState({ [name]: e.target.value });

		//另一种写法，从'e.target'解构出对应属性值
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
		// console.log(name, value);
		console.log(this.state.userContent, this.state.userName);
	};

	submitForm = () => {
		const { userName, userContent, commentList } = this.state;
		// console.log(userName, userContent, commentList.length);

		if (userName.trim().length === 0 || userContent.trim().length === 0) {
			alert('请输入评论人和评论内容！');
			return;
		}

		/* 		
		commentList.push({
			id: commentList.length,
			name: userName,
			content: userContent
		}); 
		*/

		const newCommentList = [
			{
				id: commentList.length,
				name: userName,
				content: userContent
			},
			...commentList
		];

		this.setState({
			userName: '',
			userContent: '',
			commentList: newCommentList
		});
	};

	render() {
		return (
			<div className='App-Layout'>
				<input
					type='text'
					name='userName'
					value={this.state.userName}
					placeholder='请输入评论人'
					onChange={this.handleForm}
				/>
				<br />
				<br />
				<textarea
					name='userContent'
					placeholder='请输入评论内容'
					value={this.state.userContent}
					cols='40'
					rows='10'
					onChange={this.handleForm}
				/>
				<br />
				<button onClick={this.submitForm}>发表评论</button>

				{/* 渲染评论列表 */}
				{this.state.commentList.length === 0 ? (
					<EmptyLayout />
				) : (
					this.renderCommentList()
				)}
			</div>
		);
	}

	renderCommentList() {
		return (
			<ul>
				{this.state.commentList.map((item) => (
					<li key={item.id}>
						<h2>评论人:{item.name}</h2>
						<span>评论内容：{item.content}</span>
					</li>
				))}
			</ul>
		);
	}
}
