import { useState } from 'react';
import { useImmer } from 'use-immer';

//初始数据
let initialList = [
	{ id: 0, title: 'Big Bellies', seen: false },
	{ id: 1, title: 'Lunar Landscape', seen: false },
	{ id: 2, title: 'Terracotta Army', seen: true }
];

/**
 * 更新state中的数组
 * 删除、新增
 * https://react.docschina.org/learn/updating-arrays-in-state
 * @returns
 */
export default function ArtListByImmer() {
	const [myArticleList, setMyArticleList] = useImmer(initialList);
	const [yourArticleList, setYourArticleList] = useImmer(initialList);

	function handleChangeMyArticle(airticleId, nextSeen) {
		console.log('handleChange', airticleId, nextSeen);

		setMyArticleList(draft => {
			const article = draft.find(article => article.id === airticleId);
			article.seen = nextSeen;
		})
	}

	
	function handleChangeYourArticle(airticleId, nextSeen) {
		console.log('handleChangeYourArticle', airticleId, nextSeen);

		setYourArticleList(draft => {
			const article = draft.find(article => article.id === airticleId);
			article.seen = nextSeen;
		})
	}

	return (
		<>
			<h2>我的清单</h2>
			<ul>
				{myArticleList.map((article) => (
					<li key={article.id}>
						<label>
							<input
								type='checkbox'
								checked={article.seen}
								onChange={(e) => {
									handleChangeMyArticle(article.id, e.target.checked);
								}}
							/>
							{article.title}
						</label>
					</li>
				))}
			</ul>

			<h2>Your List</h2>
			<ul>
				{yourArticleList.map((article) => (
					<li key={article.id}>
						<label>
							<input
								type='checkbox'
								checked={article.seen}
								onChange={(e) => {
									handleChangeYourArticle(article.id, e.target.checked);
								}}
							/>
							{article.title}
						</label>
					</li>
				))}
			</ul>
		</>
	);
}
