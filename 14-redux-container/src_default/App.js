// import Counter from "./containers/Counter";
//注意：此处导入的是容器组件
import Counter from "./containers/Counter";
import store from "./redux/store";

function App() {
  return (
    <div>
      {/* 将store 通过props的形式传递给容器组件*/}
      <Counter store={store}/>
    </div>
  );
}

export default App;
