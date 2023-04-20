import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ParentToChild from './ParentToChild';
import ChildToParent from './ChildToParent';
import ChildToChild from './ChildToChild';
import PropsCheck from './PropsCheck';
import ChildrenNode from './ChildrenNode';
import MouseApp from './MouseApp';
import MouseChildrenApp from './MouseChildrenApp';
import MouseHOCApp from './MouseHOCApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}

		{/* 父组件向子组件通信 */}
		{/* <ParentToChild/> */}

		{/* 子组件向父组件通讯 */}
		{/* <ChildToParent/> */}

		{/* 兄弟组件通讯 */}
		{/* <ChildToChild /> */}

		{/* <PropsCheck/> */}

		<ChildrenNode>
	{/* 		我是一个Children
			<p>6622p</p> */}
			{() => console.log('通过children传递函数')}
		</ChildrenNode>

		{/* <MouseApp/> */}

		{/* <MouseChildrenApp/> */}

		<MouseHOCApp/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
