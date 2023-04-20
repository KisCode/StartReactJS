import React from "react";

export default class Warning extends React.Component {
	render() {
        //根据条件渲染 
		return this.props.show ? <p>Warning</p> : null;
	}
}
