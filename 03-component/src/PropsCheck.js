import React from 'react';
import PropTypes from 'prop-types';

/**
 * props参数校验
 */
export default class PropsCheck extends React.Component {
	render() {
		return (
			<div>
				<Child msg={999} />
				{/* <ColorChild colors={['red', 'blue', 'yello']} /> */}
				{/* <ChildPage pageSize={20} pageIndex={1} /> */}
				<ChildPage pageParm={{ pageSize: 20, pageIndex: 9 ,key:'管家'}} />
			</div>
		);
	}
}

class Child extends React.Component {
	render() {
		return <p>{this.props.msg}</p>;
	}
}

Child.propTypes = {
	msg: PropTypes.number
};
/* 
class ColorChild extends React.Component {
	render() {
		return (
			<ul>
				{this.props.colors.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		);
	}
}

ColorChild.propTypes = {
	colors: PropTypes.array
};

 */

class ChildPage extends React.Component {
	render() {
		return (
			<div>
				<p>pageIndex:{this.props.pageParm.pageIndex}</p>
				<p>pageIndex:{this.props.pageParm.pageSize}</p>
				<p>pageIndex:{this.props.pageParm.key}</p>
				{/* <p>pageSize:{this.props.pageParm.pageSize}</p> */}
			</div>
		);
	}
}

ChildPage.propTypes = {
	pageParm: PropTypes.shape({
		pageIndex: PropTypes.number,
		pageSize: PropTypes.number,
		key: PropTypes.string
	})

};

ChildPage.defaultProps = {
	//设置默认值
	pageSize: 10,
	pageIndex: 0
};
