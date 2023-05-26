import {
	NavLink,
	Route,
	Routes,
	useParams
} from 'react-router-dom';
import Error404 from './Error404';
import ProductHome from './ProductHome';

/**
 * 动态路由 
 * 1. <NavLink to='/wiki/hhha'>路由地址后拼接参数
 * 2. useParams() 接收参数
 * @returns
 */
function DynamicRouterDemo() {
	return (
		<div>
			<ul>
				<li>
					<NavLink to='/'>首页</NavLink>
				</li>
				<li>
					<NavLink to='/wiki/hhha'>Wiki</NavLink>
				</li>
			</ul>

			{/* Router定义所有路由 */}
			<Routes>
				<Route path='/' element={<ProductHome />}></Route>
				{/* 跳转到首页，同时参数传递 */}
				<Route
					path='/wiki/:keyword'
					element={<Wiki/>}></Route>
				<Route path='*' element={<Error404 />}></Route>
			</Routes>
		</div>
	);
}

const Wiki = () => {
	let { keyword } = useParams();

	return (
		<div>
			<h1>Welcom to Wiki：{keyword}</h1>
		</div>
	);
};

export default DynamicRouterDemo;
