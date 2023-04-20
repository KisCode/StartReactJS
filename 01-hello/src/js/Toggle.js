import React from "react";
import Warning from "./Warning";

export default class Toggle extends React.Component {
	state = {
		isShowing: false,
	};

	handleClick() {
        console.log(this);
		if (this.state.isShowing) {
			this.setState({ isShowing: false });
		} else {
			this.setState({ isShowing: true });
		}
	}

	render() {
		return (
			<div>
                <Warning show={this.state.isShowing}/>
				<button onClick={() => this.handleClick()}>
					{this.state.isShowing ? "Hide" : "Show"}
				</button>
			</div>
		);
	}
}
