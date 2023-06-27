import CalculatorPureReact from './components/CalculatorPureReact';
import CounterPureReact from './components/CounterPureReact';
import CounterRedux from './components/CounterRedux';

function App() {
	return (
		<div>
			{/* 纯React代码实现的计算器 */}
			{/* <CalculatorPureReact /> */}

			{/* 纯React代码实现的计数器 */}
			{/* <CounterPureReact /> */}

			<CounterRedux />
		</div>
	);
}

export default App;
