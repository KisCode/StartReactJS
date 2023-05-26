import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BaseRouterDemo from './01_Router_base';
import RouterNavigateDemo from './02_Router_Navigate';
import RouterStateLinkDemo from './03_Router_state_link';
import RouterStateNavigateDemo from './05_Router_state_navigate';
import DynamicRouterDemo from './04_Router_dynamic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <App /> */}

			{/* <BaseRouterDemo /> */}

			{/* 编程式导航 */}
			{/* <RouterNavigateDemo /> */}

			{/* 通过Link传递路由参数 */}
			{/* <RouterStateLinkDemo /> */}

			{/* 通过navigate传递路由参数 */}
			{/* <RouterStateNavigateDemo/> */}

			{/* 动态路由 */}
			<DynamicRouterDemo />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
