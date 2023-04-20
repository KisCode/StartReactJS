import './App.css';
import React from 'react';

/**
 * Context使用，多级组件嵌套传值
 * 1. Provider数据提供者
 * 2. Consumer数据接受者
 */
const { Provider, Consumer } = React.createContext();

export default class App extends React.Component {
	render() {
		return (
			<Provider value='你好!'>
				<div className='App'>
					<Child />
				</div>
			</Provider>
		);
	}
}

/**
 * 显示组件 显示Node1输入内容
 */
class Child extends React.Component {
	render() {
		return (
			<div>
				{/* <Consumer>{(data) => <h1>Hello {data}</h1>}</Consumer> */}
				<SubChild />
			</div>
		);
	}
}
class SubChild extends React.Component {
	render() {
		return <Consumer>{(data) => <h1>SubChild {data}</h1>}</Consumer>;
	}
}
