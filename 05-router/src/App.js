import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	NavLink,
	useParams,
	useNavigate
} from 'react-router-dom';
import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<ul>
				<li>
					<NavLink to='/'>首页</NavLink>
				</li>
				<li>
					<NavLink to='/about'>关于我们</NavLink>
				</li>
				<li>
					<NavLink to='/inbox'>邮箱</NavLink>
				</li>
				<li>
					<NavLink to='/message/123'>123Msg</NavLink>
				</li>
			</ul>
      
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/inbox' element={<Inbox />}></Route>
				<Route path='/message/:id' element={<Message />}></Route>
				{/* 如果以上路由都没找到，则使用NotFound */}
				<Route path='*' element={<NotFound />}></Route>
			</Routes>

			{/* <Link to='/inbox'>Inbox</Link> */}
		</div>
	);
}

const Home = () => {
	return <h1>Hello world</h1>;
};

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

const Inbox = () => {
	// 使用 hook
	const location = useLocation();
	const { from, pathname } = location;
	return (
		<div>
			I'm Inbox，当前在 {pathname}，你是从 {from} 跳转过来的
		</div>
	);
};

// 带参数的动态路由
const Message = () => {
	// 使用 hook
	const routeParams = useParams();
	// 使用useSearchParams获取url上'type'字段值
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(routeParams, searchParams.get('type'));
	return <div>Message id: {routeParams.id}</div>;
};

const NotFound = () => {
	return <h1>404,你来到了没有知识的荒原</h1>;
};

export default App;
