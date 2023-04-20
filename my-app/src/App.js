import logo from './logo.svg';
import './App.css';
import Header from './js/Header';
import Welcome from './js/Welcome';
import Clock from "./js/Clock";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>}

      </header>
    </div>
  );
} */

// 1. 函数式声明
//  函数名大写
function App() {
  return (
    // 自定义控件
    <div className="root">
      <Header/>
      <Welcome name="One" />
      <Welcome name="Two" />
      <Clock/>
    </div>
  );
}


export default App;
