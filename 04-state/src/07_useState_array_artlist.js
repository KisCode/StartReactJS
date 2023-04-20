import { useState } from 'react';

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
export default function ArtList() {
	const [myArticleList, setMyArticleList] = useState(initialList);
	const [yourArticleList, setYourArticleList] = useState(initialList);

	function handleChangeMyArticle(airticleId, nextSeen) {
		console.log('handleChange', airticleId, nextSeen);

		setMyArticleList(
			myArticleList.map((article) => {
				if (article.id === airticleId) {
					return { ...article, seen: nextSeen };
				} else {
					return article;
				}
			})
		);
	}

	
	function handleChangeYourArticle(airticleId, nextSeen) {
		console.log('handleChangeYourArticle', airticleId, nextSeen);

		setYourArticleList(
			yourArticleList.map((article) => {
				if (article.id === airticleId) {
					//生产一个新的对象
					return { ...article, seen: nextSeen };
				} else {
					return article;
				}
			})
		);
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
