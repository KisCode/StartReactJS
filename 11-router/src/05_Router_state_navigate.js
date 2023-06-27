import {
	Link,
	NavLink,
	Navigate,
	Route,
	Routes,
	useLocation
} from 'react-router-dom';
import Error404 from './Error404';
import ProductHome from './ProductHome';

/**
 * 通过路由传递状态
 * 1. 通过<Navigate > state设置参数
 * 2. 在接收页面通过useLocation()接收参数
 * @returns 编程式导航
 *
 */
function RouterStateNavigateDemo() {
	return (
		<div>
			<ul>
				<li>
					<NavLink to='/'>首页</NavLink>
				</li>
				<li>
					<NavLink to='/me'>传参</NavLink>
				</li>
			</ul>

			{/* Router定义所有路由 */}
			<Routes>
				<Route path='/' element={<Home />}></Route>
				{/* 跳转到首页，同时参数传递 */}
				<Route
					path='/me'
					element={<Navigate to='/' state={'Hi,我是一个参数'} />}
				></Route>
				<Route path='*' element={<Error404 />}></Route>
			</Routes>
		</div>
	);
}

const Home = () => {
	let location = useLocation();
	return (
		<div>
			<h1>首页，接收参数：</h1>
			<p>{location.state}</p>
		</div>
	);
};

export default RouterStateNavigateDemo;
