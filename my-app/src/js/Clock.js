
import React from 'react';
import ReactDOM from 'react-dom';

/* 
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    root.render(<Clock date={new Date()} />);
}

//定时
setInterval(tick, 1000);
 */


class Clock extends React.Component {
    timerID

    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    componentDidMount() {
        //挂载:已插入真实DOM
        //设置定时器，每秒调用以下tick()方法
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        //卸载:已移除真实DOM
        //移除定时器
        clearInterval(this.timerID);

    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


// 导出类名
export default Clock;