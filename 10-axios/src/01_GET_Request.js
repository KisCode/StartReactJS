import React from 'react';
import axios from 'axios';
// import axios from './client/axios';

export default class GetSample extends React.Component {
	render() {
		const get = () => {
			console.log('article list');
			axios
				.get('/article/list/0/json', {
					proxy: {
						host: 'https://www.wanandroid.com'
					}
				})
				.then(function (response) {
					console.log(response.data);
				});
		};

		return (
			<div>
				<h1>Get请求</h1>

				<ul>
					<li>
						<button onClick={get}>文章列表</button>
					</li>
					<li></li>
					<li></li>
				</ul>
			</div>
		);
	}
}
