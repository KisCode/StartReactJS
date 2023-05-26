import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Error404 from './Error404';
import ProductHome from './ProductHome';

/**
 * 通过路由传递状态
 * 1. 通过<Link state={}> state设置参数
 * 2. 在接收页面通过useLocation()接收参数
 * @returns 编程式导航
 * 
 */
function RouterStateLinkDemo() {
	return (
		<div>
			<ul>
				<li>
					<NavLink to='/'>首页</NavLink>
				</li>
				<li>
					<NavLink to='/me'>我的</NavLink>
				</li>
			</ul>

			{/* Router定义所有路由 */}
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/me' element={<Me />}></Route>
				<Route path='*' element={<Error404 />}></Route>
			</Routes>
		</div>
	);
}

const Home = () => {
	let location = useLocation();
	return(
		<div>
			<h1>首页，接收参数：</h1>
			<p>{location.state}</p>
		</div>
	)
}

const Me = () => {
	return (
		<div>
			<h2>That is Me</h2>
			<p>展示路由中Link传递状态</p>
			<Link to="/" state={"XXXX我是来自Me组件的参数哦！"} >返回</Link>
		</div>
	);
};
export default RouterStateLinkDemo;
