// import Counter from "./containers/Counter";
//注意：此处导入的是容器组件
import Counter from './containers/Counter';

function App() {
	return (
		<div>
			<h1>优化版</h1>

			{/* 将store 通过props的形式传递给容器组件*/}
			{/* <Counter store={store}/> */}

			{/* 修改为通过<Provider>全局提供store */}
			<Counter />
		</div>
	);
}

export default App;
