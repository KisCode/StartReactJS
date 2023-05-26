import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Error404 from './Error404';
import ProductHome from './ProductHome';
import { useNavigate } from 'react-router-dom';

/**
 * 通过<Navigate>
 * @returns 编程式导航
 * 
 */
function RouterNavigateDemo() {
	return (
		<div>
			<ul>
				<li>
					<NavLink to='/'>首页</NavLink>
				</li>
				<li>
					<NavLink to='/detail'>商品详情</NavLink>
				</li>
				<li>
					<NavLink to='/about'>关于我们</NavLink>
				</li>
			</ul>

			{/* Router定义所有路由 */}
			<Routes>
				<Route path='/' element={<ProductHome />}></Route>
				<Route path='/detail' element={<ProductDetail />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='*' element={<Error404 />}></Route>
			</Routes>
		</div>
	);
}

const About = () => {
	// useNavigate 主动调用路由跳转
	const navigate = useNavigate();

	const goHome = () => {
		navigate('/');
	};

	return (
		<div>
			<h2>I'm About</h2>
			<button onClick={goHome}>返回首页</button>
		</div>
	);
};
export default RouterNavigateDemo;
