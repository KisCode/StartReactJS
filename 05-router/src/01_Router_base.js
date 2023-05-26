import { NavLink, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Error404 from './Error404';
import ProductHome from './ProductHome';

function BaseRouterDemo() {
	return (
		<div>
			{/* <ProductList /> */}
			<ul>
				<li>
					<NavLink to='/'>首页</NavLink>
				</li>
				<li>
					<NavLink to='/detail'>商品详情001</NavLink>
				</li>
				<li>
					<p>002</p>
				</li>
			</ul>

			{/* Router定义所有路由 */}
			<Routes>
				<Route path='/' element={<ProductHome />}></Route>
				<Route path='/detail' element={<ProductDetail />}></Route>
				<Route path='*' element={<Error404 />}></Route>
			</Routes>
		</div>
	);
}
export default BaseRouterDemo;
