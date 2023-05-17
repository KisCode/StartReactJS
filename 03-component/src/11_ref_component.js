import React from 'react';

/**
 * ref使用示例，通过refs访问DOM节点或React元素
 */
export default class RefComponent extends React.Component {
    constructor(){
        super()
        
        //创建 ref
        this.txtRef = React.createRef()
    }
    // 获取文本框的值
    getTxt =() => {
        console.log(this.txtRef.current.value)
    }
    render(){
        return (
          <div>
            <input type ="text" ref={this.txtRef} />
            <button onClick ={this.getTxt}>获取值</button>
          </div>
        )
    }
}