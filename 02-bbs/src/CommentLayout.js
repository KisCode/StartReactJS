import React from 'react';
import CommentList from './CommentList';

/**
 * 评论列表
 */
export default class CommentLayout extends React.Component {
	state = {
		commentList: []
	};

	render() {
		return this.state.commentList.length !== 0 ? (
			<EmptyLayout />
		) : (
			<CommentList />
		);
	}
}

function EmptyLayout() {
	return <p>暂无评论，快去评论吧</p>;
}

