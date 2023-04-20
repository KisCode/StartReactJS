import React from "react";

export default class ALink extends React.Component {
  clickMe(e) {
    //preventDefault 阻止默认行为打开url
    e.preventDefault();
    console.log("Click Me!");
  }

  render() {
    return (
      <a
        href="https://zh-hans.reactjs.org/docs/hooks-overview.html"
        onClick={this.clickMe}
      >
        点我跳转
      </a>
    );
  }
}
/* 
function ALink() {
	function clickMe(e) {
        //preventDefault 阻止默认行为打开url
		e.preventDefault();
		console.log("Click Me!");
	}

	return (
		<a
			href="https://zh-hans.reactjs.org/docs/hooks-overview.html"
			onClick={clickMe}
		>
			点我跳转
		</a>
	);
}
export default ALink;
 */