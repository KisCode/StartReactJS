import { useState } from 'react';

//初始数据
let initialArtists = [
	{ id: 0, name: 'Marta Colvin Andrade' },
	{ id: 1, name: 'Lamidi Olonade Fakeye' },
	{ id: 2, name: 'Ranjani Shettar' },
	{ id: 3, name: 'Alina Szapocznikow' },
	{ id: 4, name: 'Taipei Zoo' },
	{ id: 5, name: 'Louise Nevelson' }
];

/**
 * 更新state中的数组
 * 删除、新增
 * https://react.docschina.org/learn/updating-arrays-in-state
 * @returns
 */
export default function ArticleList() {
	const [articleList, setArticleList] = useState(initialArtists);

	function handleDelete(article) {
		console.log('删除', article);
		setArticleList(articleList.filter((a) => a.id !== article.id));
	}

	function handleAdd() {
		console.log('插入尾部');
		/* 		//错误写法，不能直接操作state数组
		articleList.push({
			id: articleList.length,
			name: 'New Insert' + new Date()
		});
 */
		setArticleList([
			...articleList,
			{
				id: articleList.length,
				name: 'New Insert' + new Date()
			}
		]);
	}

	return (
		<>
			<ul>
				{articleList.map((article) => (
					<li key={article.id}>
						{article.name}
						<button
							onClick={() => {
								handleDelete(article);
							}}
						>
							删除
						</button>
						<button onClick={handleAdd}>插入</button>
					</li>
				))}
			</ul>
		</>
	);
}
