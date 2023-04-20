import React from 'react';

// 1. 类声明方式声明'Hello'组件 (推荐)
/* export default class Hello extends React.Component {
    render() {
        return <div>Hello</div>
    }
}
 */

function Hello() {
    return <p>Hello(函数声明式)</p>
}
export default Hello;