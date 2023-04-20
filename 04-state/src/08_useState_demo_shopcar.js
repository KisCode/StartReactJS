import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialProducts = [
	{
		id: 0,
		name: 'Baklava',
		count: 1
	},
	{
		id: 1,
		name: 'Cheese',
		count: 5
	},
	{
		id: 2,
		name: 'Spaghetti',
		count: 2
	}
];

/**
 * 购物车案例，点击商品后按钮增加对应购物车数量
 * @returns
 */
export default function ShoppingCart() {
	/* //使用useState方式
	const [products, setProducts] = useState(initialProducts);

	function handleIncreaseClick(productId) {
		console.log('更新购物车', productId);

		const newProductList= products.map((product) => {
			if (product.id === productId) {
				return { ...product, count: product.count + 1 };
			} else {
				return product;
			}
		});
    setProducts(newProductList);
	}
 */

	//通过Immer方式修改对象
	const [products, setProducts] = useImmer(initialProducts);
	function handleIncreaseClick(productId) {
		setProducts((draft) => {
			const product = draft.find((product) => product.id === productId);
			product.count = product.count + 1;
		});
	}

	/**
	 * 删除购物车中的商品
	 * @param {} product
	 */
	function hanldeDeleteClick(productId) {
		setProducts(products.filter((product) => product.id !== productId));
	}

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					{product.name} (<b>{product.count}</b>)
					<button
						onClick={() => {
							handleIncreaseClick(product.id);
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							hanldeDeleteClick(product.id);
						}}
					>
						–
					</button>
				</li>
			))}
		</ul>
	);
}
