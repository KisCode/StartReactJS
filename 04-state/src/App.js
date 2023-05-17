import './App.css';
import Button from './01_Button';
import AlertButton from './02_AlertButton';
import AlertButtonFunc from './02_AlertButtonFunc';
import Gallery from './03_useState_Gallery';
import UserForm from './03_useState_UserForm';
import TrafficLight from './04_useState_TrafficLight';
import Counter from './05_useState_patch';
import Point from './06_useState_object';
import ArticleList from './07_useState_array';
import ArtList from './07_useState_array_artlist';
import ArtListByImmer from './07_useState_immer_array_artlist';
import ShoppingCart from './08_useState_demo_shopcar';

function App() {
	return (
		<div>
			{/* 			<header className='App-header'>
				<Button />
				<AlertButton message='开始播放'>播放电影</AlertButton>
				<AlertButtonFunc message='关闭音乐'>关闭音乐</AlertButtonFunc>
			</header>
 */}

			{/* <Gallery /> */}

			{/*       
      <UserForm/>
       */}

			{/* <TrafficLight /> */}

			{/* 批处理示例 */}
			{/* <Counter /> */}

			{/* 演示修改state对象 */}
			{/* <Point/> */}

			{/* <ArticleList/> */}
			{/* <ArtList/> */}
			{/* <ArtListByImmer/> */}

			{/* 购物车Immer的使用 */}
			<ShoppingCart />
		</div>
	);
}

export default App;
