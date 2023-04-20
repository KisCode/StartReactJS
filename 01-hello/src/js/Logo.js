import logo from "../logo.svg";
import "../App.css";
import React from "react";

export default class Logo extends React.Component {
	render() {
		return (
			<div>
				<img
					src={logo}
					alt="logo"
					className="App-logo"
					width="228"
					height="228"
				/>
			</div>
		);
	}
}
